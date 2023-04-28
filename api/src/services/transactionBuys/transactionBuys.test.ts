import type { TransactionBuy } from '@prisma/client'

import {
  transactionBuys,
  transactionBuy,
  createTransactionBuy,
  updateTransactionBuy,
  deleteTransactionBuy,
} from './transactionBuys'
import type { StandardScenario } from './transactionBuys.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('transactionBuys', () => {
  scenario(
    'returns all transactionBuys',
    async (scenario: StandardScenario) => {
      const result = await transactionBuys()

      expect(result.length).toEqual(Object.keys(scenario.transactionBuy).length)
    }
  )

  scenario(
    'returns a single transactionBuy',
    async (scenario: StandardScenario) => {
      const result = await transactionBuy({
        id: scenario.transactionBuy.one.id,
      })

      expect(result).toEqual(scenario.transactionBuy.one)
    }
  )

  scenario('creates a transactionBuy', async (scenario: StandardScenario) => {
    const result = await createTransactionBuy({
      input: {
        characterId: scenario.transactionBuy.two.characterId,
        itemId: scenario.transactionBuy.two.itemId,
        quantity: 2955444,
        price: 5053925,
      },
    })

    expect(result.characterId).toEqual(scenario.transactionBuy.two.characterId)
    expect(result.itemId).toEqual(scenario.transactionBuy.two.itemId)
    expect(result.quantity).toEqual(2955444)
    expect(result.price).toEqual(5053925)
  })

  scenario('updates a transactionBuy', async (scenario: StandardScenario) => {
    const original = (await transactionBuy({
      id: scenario.transactionBuy.one.id,
    })) as TransactionBuy
    const result = await updateTransactionBuy({
      id: original.id,
      input: { quantity: 2324885 },
    })

    expect(result.quantity).toEqual(2324885)
  })

  scenario('deletes a transactionBuy', async (scenario: StandardScenario) => {
    const original = (await deleteTransactionBuy({
      id: scenario.transactionBuy.one.id,
    })) as TransactionBuy
    const result = await transactionBuy({ id: original.id })

    expect(result).toEqual(null)
  })
})
