import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { generateNewGame } from 'src/lib/generateNewGame'

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
  async (input) => {
    // Create character
    const character = await db.character.create({
      data: input.characterInput,
    })

    // Create game
    const game = await db.game.create({
      data: {
        characterId: character.id,
        ...input.gameInput,
      },
    })

    // Generate new finances for character
    const financeInput = generateNewFinances(character.id)
    await db.characterFinances.create({
      data: {
        character: { connect: { id: character.id } },
        ...financeInput,
      },
    })

    // Generate new region for game
    const regionInput = generateNewRegion(game.id)
    const region = await db.region.create({
      data: {
        game: { connect: { id: game.id } },
        ...regionInput,
      },
    })

    // Create cities for the region
    const cities = input.cityInputs.map(async (cityInput) => {
      const city = await db.city.create({
        data: {
          region: { connect: { id: region.id } },
          ...cityInput,
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
