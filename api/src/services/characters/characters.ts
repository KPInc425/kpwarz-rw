import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { randomizeMerchantProducts } from 'src/lib/gameUtilities'
import generateCharacter from 'src/lib/generateNewCharacter'
import generateNewCity from 'src/lib/generateNewCity'
import generateNewFinances from 'src/lib/generateNewFinances'
import generateNewGame from 'src/lib/generateNewGame'
import generateNewMerchant from 'src/lib/generateNewMerchant'
import generateNewRegion from 'src/lib/generateNewRegion'
import pickRandomItems from 'src/lib/PickRandomItems'

export const characters: QueryResolvers['characters'] = () => {
  return db.character.findMany()
}

export const character: QueryResolvers['character'] = ({ id }) => {
  return db.character.findUnique({
    where: { id },
  })
}

export const createCharacter: MutationResolvers['createCharacter'] = ({
  input,
}) => {
  return db.character.create({
    data: input,
  })
}

export const updateCharacter: MutationResolvers['updateCharacter'] = ({
  id,
  input,
}) => {
  return db.character.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacter: MutationResolvers['deleteCharacter'] = ({
  id,
}) => {
  return db.character.delete({
    where: { id },
  })
}

export const createCharacterAndGame: MutationResolvers['createCharacterAndGame'] =
  async ({ input }) => {
    // Create character
    console.log('Hello from createCharacterAndGame')
    console.log('input', input)
    const characterInput = generateCharacter(input)
    const character = await db.character.create({
      data: characterInput,
    })

    // Create game
    const gameInput = generateNewGame(character.id)
    console.log('gameInput', gameInput)
    const game = await db.game.create({
      data: {
        name: gameInput.name,
        description: gameInput.description,
        startLocation: gameInput.startLocation,
        currentRegionId: 99, // Add the missing `currentRegionId` field with a value
        currentDay: gameInput.currentDay,
        maxDays: gameInput.maxDays,
        timeOfDay: gameInput.timeOfDay,
        character: {
          connect: { id: character.id }, // Use `connect` to reference an existing character by its `id`
        },
        user: {
          connect: { id: context.currentUser.id }, // Use `connect` to reference an existing user by their `id`
        },
      },
    })

    // Generate new finances for character
    const financeInput = generateNewFinances(character.id)
    await db.characterFinances.create({
      data: financeInput,
    })

    // Generate new region for game
    const regionInput = generateNewRegion(game.id)
    const region = await db.region.create({
      data: regionInput,
    })

    // Create cities for the region
    const cityInputs = []
    for (let i = 0; i < 6; i++) {
      cityInputs.push(generateNewCity(region.id))
    }

    const cities = []
    for (const cityInput of cityInputs) {
      const merchantInput = generateNewMerchant(cityInput)
      const chosenItems = pickRandomItems(
        await db.availableItems.findMany(),
        Math.floor(Math.random() * (10 - 2 + 1) + 2)
      )

      // console.log('cityInput', cityInput)
      console.log('chosenItems', chosenItems)
      // console.log('merchantInput', merchantInput)
      // console.log('availableItems', avaiableItems)

      const merchant = await db.merchant.create({
        data: {
          name: merchantInput.name,
          description: merchantInput.description,
          bio: merchantInput.bio,
          currentItems: merchantInput.currentItems,
          maxItems: merchantInput.maxItems,
          temperament: merchantInput.temperament,
        },
      })

      const newMerchantProductList = randomizeMerchantProducts(
        merchant,
        chosenItems,
        cityInput.avgPrice
      )
      newMerchantProductList.forEach(async (item) => {
        await db.item.create({
          data: {
            ...item,
            merchant: {
              connect: { id: merchant.id },
            },
          },
        })
      })

      const city = await db.city.create({
        data: {
          name: cityInput.name,
          description: cityInput.description,
          avgQuality: cityInput.avgQuality,
          avgPrice: cityInput.avgPrice,
          minQuantity: cityInput.minQuantity,
          maxQuantity: cityInput.maxQuantity,
          authorityPresence: cityInput.authorityPresence,
          region: {
            connect: { id: region.id },
          },
          merchant: {
            connect: { id: merchant.id },
          },
          game: {
            connect: { id: game.id },
          },
        },
      })
      cities.push(city)
    }

    const getRandomCity = () => {
      const randomIndex = Math.floor(Math.random() * cities.length)
      return cities[randomIndex]
    }

    const randomCity = getRandomCity()

    const updatedGame = await db.game.update({
      where: { id: game.id },
      data: {
        currentRegionId: region.id,
        startLocation: randomCity.name,
        currentCity: {
          connect: { id: randomCity.id },
        },
      },
    })

    console.log('updatedGame', updatedGame)
    console.log('region', region)

    // Return created character, game, and region
    return {
      character,
      game,
      region,
      cities,
    }
  }

export const Character: CharacterRelationResolvers = {
  user: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).user()
  },
  finances: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).finances()
  },
  items: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).items()
  },
  transportation: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).transportation()
  },
  game: (_obj, { root }) => {
    return db.character.findUnique({ where: { id: root?.id } }).game()
  },
}
