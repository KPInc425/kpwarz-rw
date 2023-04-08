import type { AvailableCity } from '@prisma/client'

import {
  availableCities,
  availableCity,
  createAvailableCity,
  updateAvailableCity,
  deleteAvailableCity,
} from './availableCities'
import type { StandardScenario } from './availableCities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('availableCities', () => {
  scenario(
    'returns all availableCities',
    async (scenario: StandardScenario) => {
      const result = await availableCities()

      expect(result.length).toEqual(Object.keys(scenario.availableCity).length)
    }
  )

  scenario(
    'returns a single availableCity',
    async (scenario: StandardScenario) => {
      const result = await availableCity({ id: scenario.availableCity.one.id })

      expect(result).toEqual(scenario.availableCity.one)
    }
  )

  scenario('creates a availableCity', async () => {
    const result = await createAvailableCity({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a availableCity', async (scenario: StandardScenario) => {
    const original = (await availableCity({
      id: scenario.availableCity.one.id,
    })) as AvailableCity
    const result = await updateAvailableCity({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a availableCity', async (scenario: StandardScenario) => {
    const original = (await deleteAvailableCity({
      id: scenario.availableCity.one.id,
    })) as AvailableCity
    const result = await availableCity({ id: original.id })

    expect(result).toEqual(null)
  })
})
