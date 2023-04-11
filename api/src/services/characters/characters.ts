import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import generateNewCity from 'src/lib/generateNewCity'
import generateNewFinances from 'src/lib/generateNewFinances'
import generateNewGame from 'src/lib/generateNewGame'
import generateNewRegion from 'src/lib/generateNewRegion'

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
    console.log('input', input)
    const character = await db.character.create({
      data: input,
    })

    // Create game
    const gameInput = generateNewGame(character.id)
    const game = await db.game.create({
      data: {
        gameInput,
      },
    })

    // Generate new finances for character
    const financeInput = generateNewFinances(character.id)
    await db.characterFinances.create({
      data: {
        financeInput,
      },
    })

    // Generate new region for game
    const regionInput = generateNewRegion(game.id)
    const region = await db.region.create({
      data: {
        regionInput,
      },
    })

    // Create cities for the region
    const cityInputs = []
    for (let i = 0; i < 6; i++) {
      cityInputs.push(generateNewCity(region.id))
    }

    const cities = cityInputs.map(async (cityInput) => {
      const city = await db.city.create({
        data: {
          cityInput,
        },
      })
      return city
    })

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
