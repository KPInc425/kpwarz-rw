import type { AvailableRegion } from '@prisma/client'

import {
  availableRegions,
  availableRegion,
  createAvailableRegion,
  updateAvailableRegion,
  deleteAvailableRegion,
} from './availableRegions'
import type { StandardScenario } from './availableRegions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('availableRegions', () => {
  scenario(
    'returns all availableRegions',
    async (scenario: StandardScenario) => {
      const result = await availableRegions()

      expect(result.length).toEqual(
        Object.keys(scenario.availableRegion).length
      )
    }
  )

  scenario(
    'returns a single availableRegion',
    async (scenario: StandardScenario) => {
      const result = await availableRegion({
        id: scenario.availableRegion.one.id,
      })

      expect(result).toEqual(scenario.availableRegion.one)
    }
  )

  scenario('creates a availableRegion', async () => {
    const result = await createAvailableRegion({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a availableRegion', async (scenario: StandardScenario) => {
    const original = (await availableRegion({
      id: scenario.availableRegion.one.id,
    })) as AvailableRegion
    const result = await updateAvailableRegion({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a availableRegion', async (scenario: StandardScenario) => {
    const original = (await deleteAvailableRegion({
      id: scenario.availableRegion.one.id,
    })) as AvailableRegion
    const result = await availableRegion({ id: original.id })

    expect(result).toEqual(null)
  })
})
