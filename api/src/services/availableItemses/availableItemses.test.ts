import type { AvailableItems } from '@prisma/client'

import {
  availableItemses,
  availableItems,
  createAvailableItems,
  updateAvailableItems,
  deleteAvailableItems,
} from './availableItemses'
import type { StandardScenario } from './availableItemses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('availableItemses', () => {
  scenario(
    'returns all availableItemses',
    async (scenario: StandardScenario) => {
      const result = await availableItemses()

      expect(result.length).toEqual(Object.keys(scenario.availableItems).length)
    }
  )

  scenario(
    'returns a single availableItems',
    async (scenario: StandardScenario) => {
      const result = await availableItems({
        id: scenario.availableItems.one.id,
      })

      expect(result).toEqual(scenario.availableItems.one)
    }
  )

  scenario('creates a availableItems', async () => {
    const result = await createAvailableItems({
      input: {
        name: 'String7804789',
        description: 'String',
        ability: 'String',
      },
    })

    expect(result.name).toEqual('String7804789')
    expect(result.description).toEqual('String')
    expect(result.ability).toEqual('String')
  })

  scenario('updates a availableItems', async (scenario: StandardScenario) => {
    const original = (await availableItems({
      id: scenario.availableItems.one.id,
    })) as AvailableItems
    const result = await updateAvailableItems({
      id: original.id,
      input: { name: 'String38157802' },
    })

    expect(result.name).toEqual('String38157802')
  })

  scenario('deletes a availableItems', async (scenario: StandardScenario) => {
    const original = (await deleteAvailableItems({
      id: scenario.availableItems.one.id,
    })) as AvailableItems
    const result = await availableItems({ id: original.id })

    expect(result).toEqual(null)
  })
})
