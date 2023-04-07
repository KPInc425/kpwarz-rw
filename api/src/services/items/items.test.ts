import type { Item } from '@prisma/client'

import { items, item, createItem, updateItem, deleteItem } from './items'
import type { StandardScenario } from './items.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('items', () => {
  scenario('returns all items', async (scenario: StandardScenario) => {
    const result = await items()

    expect(result.length).toEqual(Object.keys(scenario.item).length)
  })

  scenario('returns a single item', async (scenario: StandardScenario) => {
    const result = await item({ id: scenario.item.one.id })

    expect(result).toEqual(scenario.item.one)
  })

  scenario('creates a item', async (scenario: StandardScenario) => {
    const result = await createItem({
      input: {
        name: 'String',
        quantity: 3386561,
        price: 3975717,
        quality: 'String',
        ability: 'String',
        description: 'String',
        type: 'String',
        uses: 7291932,
        characterId: scenario.item.two.characterId,
        gameId: scenario.item.two.gameId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.quantity).toEqual(3386561)
    expect(result.price).toEqual(3975717)
    expect(result.quality).toEqual('String')
    expect(result.ability).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.type).toEqual('String')
    expect(result.uses).toEqual(7291932)
    expect(result.characterId).toEqual(scenario.item.two.characterId)
    expect(result.gameId).toEqual(scenario.item.two.gameId)
  })

  scenario('updates a item', async (scenario: StandardScenario) => {
    const original = (await item({ id: scenario.item.one.id })) as Item
    const result = await updateItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a item', async (scenario: StandardScenario) => {
    const original = (await deleteItem({ id: scenario.item.one.id })) as Item
    const result = await item({ id: original.id })

    expect(result).toEqual(null)
  })
})
