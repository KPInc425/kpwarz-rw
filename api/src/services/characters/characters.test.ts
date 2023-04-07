import type { Character } from '@prisma/client'

import {
  characters,
  character,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from './characters'
import type { StandardScenario } from './characters.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('characters', () => {
  scenario('returns all characters', async (scenario: StandardScenario) => {
    const result = await characters()

    expect(result.length).toEqual(Object.keys(scenario.character).length)
  })

  scenario('returns a single character', async (scenario: StandardScenario) => {
    const result = await character({ id: scenario.character.one.id })

    expect(result).toEqual(scenario.character.one)
  })

  scenario('creates a character', async (scenario: StandardScenario) => {
    const result = await createCharacter({
      input: {
        name: 'String',
        bio: 'String',
        description: 'String',
        userId: scenario.character.two.userId,
        health: 7724651,
        maxHealth: 8709473,
        currentItems: 2646416,
        maxItems: 412600,
        luck: 273575,
        storageType: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.bio).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.userId).toEqual(scenario.character.two.userId)
    expect(result.health).toEqual(7724651)
    expect(result.maxHealth).toEqual(8709473)
    expect(result.currentItems).toEqual(2646416)
    expect(result.maxItems).toEqual(412600)
    expect(result.luck).toEqual(273575)
    expect(result.storageType).toEqual('String')
  })

  scenario('updates a character', async (scenario: StandardScenario) => {
    const original = (await character({
      id: scenario.character.one.id,
    })) as Character
    const result = await updateCharacter({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a character', async (scenario: StandardScenario) => {
    const original = (await deleteCharacter({
      id: scenario.character.one.id,
    })) as Character
    const result = await character({ id: original.id })

    expect(result).toEqual(null)
  })
})
