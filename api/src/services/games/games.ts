import type {
  QueryResolvers,
  MutationResolvers,
  GameRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import {
  checkTravelTime,
  randomizeMerchantProducts,
} from 'src/lib/gameUtilities'
import pickRandomItems from 'src/lib/PickRandomItems'

export const games: QueryResolvers['games'] = () => {
  return db.game.findMany()
}

export const getGamesToLoad: QueryResolvers['games'] = () => {
  return db.game.findMany({
    where: { userId: context.currentUser.id },
  })
}

export const game: QueryResolvers['game'] = ({ id }) => {
  return db.game.findUnique({
    where: { id },
  })
}

export const createGame: MutationResolvers['createGame'] = ({ input }) => {
  return db.game.create({
    data: input,
  })
}

export const updateGame: MutationResolvers['updateGame'] = ({ id, input }) => {
  return db.game.update({
    data: input,
    where: { id },
  })
}

export const updateGameOnTravel: MutationResolvers['updateGameOnTravel'] =
  async ({ id, input }) => {
    const game = await db.game.findUnique({
      where: { id },
    })

    await db.item.deleteMany({
      where: { merchantId: input.merchantId },
    })

    const chosenItems = pickRandomItems(
      await db.availableItems.findMany(),
      Math.floor(Math.random() * (10 - 2 + 1) + 2)
    )

    console.log(input.merchantId)
    const merchant = await db.merchant.findUnique({
      where: { id: input.merchantId },
    })

    const newMerchantProductList = randomizeMerchantProducts(
      merchant,
      chosenItems,
      input.avgPrice
    )
    newMerchantProductList.forEach(async (item) => {
      await db.item.create({
        data: {
          ...item,
          merchant: {
            connect: { id: input.merchantId },
          },
        },
      })
    })

    const character = await db.character.findUnique({
      where: { id: game.characterId },
    })
    const updatedTime = checkTravelTime(game, character)
    console.log(updatedTime)
    input = {
      ...input,
      currentDay: game.currentDay + (updatedTime.nextDay ? 1 : 0),
      timeOfDay: updatedTime.timeOfDay,
    }
    delete input.merchantId
    delete input.avgPrice
    return db.game.update({
      data: input,
      where: { id },
    })
  }

export const deleteGame: MutationResolvers['deleteGame'] = ({ id }) => {
  return db.game.delete({
    where: { id },
  })
}

export const Game: GameRelationResolvers = {
  currentCity: (_obj, { root }) => {
    return db.game.findUnique({ where: { id: root?.id } }).currentCity()
  },
  lostItems: (_obj, { root }) => {
    return db.game.findUnique({ where: { id: root?.id } }).lostItems()
  },
  regions: (_obj, { root }) => {
    return db.game.findUnique({ where: { id: root?.id } }).regions()
  },
  character: (_obj, { root }) => {
    return db.game.findUnique({ where: { id: root?.id } }).character()
  },
  user: (_obj, { root }) => {
    return db.game.findUnique({ where: { id: root?.id } }).user()
  },
}
