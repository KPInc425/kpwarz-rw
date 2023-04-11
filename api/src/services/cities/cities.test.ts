import type { City } from '@prisma/client'

import { cities, city, createCity, updateCity, deleteCity } from './cities'
import type { StandardScenario } from './cities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cities', () => {
  scenario('returns all cities', async (scenario: StandardScenario) => {
    const result = await cities()

    expect(result.length).toEqual(Object.keys(scenario.city).length)
  })

  scenario('returns a single city', async (scenario: StandardScenario) => {
    const result = await city({ id: scenario.city.one.id })

    expect(result).toEqual(scenario.city.one)
  })

  scenario('creates a city', async (scenario: StandardScenario) => {
    const result = await createCity({
      input: {
        name: 'String',
        description: 'String',
        avgPrice: 8873915,
        minQuantity: 3380129,
        maxQuantity: 7564993,
        regionId: scenario.city.two.regionId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.avgPrice).toEqual(8873915)
    expect(result.minQuantity).toEqual(3380129)
    expect(result.maxQuantity).toEqual(7564993)
    expect(result.regionId).toEqual(scenario.city.two.regionId)
  })

  scenario('updates a city', async (scenario: StandardScenario) => {
    const original = (await city({ id: scenario.city.one.id })) as City
    const result = await updateCity({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a city', async (scenario: StandardScenario) => {
    const original = (await deleteCity({ id: scenario.city.one.id })) as City
    const result = await city({ id: original.id })

    expect(result).toEqual(null)
  })
})
