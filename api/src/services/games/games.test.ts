import type { Game } from '@prisma/client'

import { games, game, createGame, updateGame, deleteGame } from './games'
import type { StandardScenario } from './games.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('games', () => {
  scenario('returns all games', async (scenario: StandardScenario) => {
    const result = await games()

    expect(result.length).toEqual(Object.keys(scenario.game).length)
  })

  scenario('returns a single game', async (scenario: StandardScenario) => {
    const result = await game({ id: scenario.game.one.id })

    expect(result).toEqual(scenario.game.one)
  })

  scenario('creates a game', async (scenario: StandardScenario) => {
    const result = await createGame({
      input: {
        name: 'String',
        description: 'String',
        startLocation: 'String',
        currentRegionId: 1235,
        currentCity: 'String',
        maxDays: 6441362,
        currentDay: 9329621,
        timeOfDay: 'String',
        characterId: scenario.game.two.characterId,
        userId: scenario.game.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.startLocation).toEqual('String')
    expect(result.currentRegionId).toEqual(21136)
    expect(result.currentCity).toEqual('String')
    expect(result.maxDays).toEqual(6441362)
    expect(result.currentDay).toEqual(9329621)
    expect(result.timeOfDay).toEqual('String')
    expect(result.characterId).toEqual(scenario.game.two.characterId)
    expect(result.userId).toEqual(scenario.game.two.userId)
  })

  scenario('updates a game', async (scenario: StandardScenario) => {
    const original = (await game({ id: scenario.game.one.id })) as Game
    const result = await updateGame({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a game', async (scenario: StandardScenario) => {
    const original = (await deleteGame({ id: scenario.game.one.id })) as Game
    const result = await game({ id: original.id })

    expect(result).toEqual(null)
  })
})
