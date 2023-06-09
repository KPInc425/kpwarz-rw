import type { Region } from '@prisma/client'

import {
  regions,
  region,
  createRegion,
  updateRegion,
  deleteRegion,
} from './regions'
import type { StandardScenario } from './regions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('regions', () => {
  scenario('returns all regions', async (scenario: StandardScenario) => {
    const result = await regions()

    expect(result.length).toEqual(Object.keys(scenario.region).length)
  })

  scenario('returns a single region', async (scenario: StandardScenario) => {
    const result = await region({ id: scenario.region.one.id })

    expect(result).toEqual(scenario.region.one)
  })

  scenario('creates a region', async (scenario: StandardScenario) => {
    const result = await createRegion({
      input: {
        name: 'String',
        description: 'String',
        gameId: scenario.region.two.gameId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.gameId).toEqual(scenario.region.two.gameId)
  })

  scenario('updates a region', async (scenario: StandardScenario) => {
    const original = (await region({ id: scenario.region.one.id })) as Region
    const result = await updateRegion({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a region', async (scenario: StandardScenario) => {
    const original = (await deleteRegion({
      id: scenario.region.one.id,
    })) as Region
    const result = await region({ id: original.id })

    expect(result).toEqual(null)
  })
})
