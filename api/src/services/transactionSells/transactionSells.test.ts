import type { TransactionSell } from '@prisma/client'

import {
  transactionSells,
  transactionSell,
  createTransactionSell,
  updateTransactionSell,
  deleteTransactionSell,
} from './transactionSells'
import type { StandardScenario } from './transactionSells.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('transactionSells', () => {
  scenario(
    'returns all transactionSells',
    async (scenario: StandardScenario) => {
      const result = await transactionSells()

      expect(result.length).toEqual(
        Object.keys(scenario.transactionSell).length
      )
    }
  )

  scenario(
    'returns a single transactionSell',
    async (scenario: StandardScenario) => {
      const result = await transactionSell({
        id: scenario.transactionSell.one.id,
      })

      expect(result).toEqual(scenario.transactionSell.one)
    }
  )

  scenario('creates a transactionSell', async (scenario: StandardScenario) => {
    const result = await createTransactionSell({
      input: {
        characterId: scenario.transactionSell.two.characterId,
        merchantId: scenario.transactionSell.two.merchantId,
        itemName: 'String',
        quantity: 3613760,
        price: 5905101,
      },
    })

    expect(result.characterId).toEqual(scenario.transactionSell.two.characterId)
    expect(result.merchantId).toEqual(scenario.transactionSell.two.merchantId)
    expect(result.itemName).toEqual('String')
    expect(result.quantity).toEqual(3613760)
    expect(result.price).toEqual(5905101)
  })

  scenario('updates a transactionSell', async (scenario: StandardScenario) => {
    const original = (await transactionSell({
      id: scenario.transactionSell.one.id,
    })) as TransactionSell
    const result = await updateTransactionSell({
      id: original.id,
      input: { itemName: 'String2' },
    })

    expect(result.itemName).toEqual('String2')
  })

  scenario('deletes a transactionSell', async (scenario: StandardScenario) => {
    const original = (await deleteTransactionSell({
      id: scenario.transactionSell.one.id,
    })) as TransactionSell
    const result = await transactionSell({ id: original.id })

    expect(result).toEqual(null)
  })
})
