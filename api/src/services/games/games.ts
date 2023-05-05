import type {
  QueryResolvers,
  MutationResolvers,
  GameRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { checkTravelTime } from 'src/lib/gameUtilities'

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
