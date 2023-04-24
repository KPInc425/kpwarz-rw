import type { Merchant } from '@prisma/client'

import {
  merchants,
  merchant,
  createMerchant,
  updateMerchant,
  deleteMerchant,
} from './merchants'
import type { StandardScenario } from './merchants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('merchants', () => {
  scenario('returns all merchants', async (scenario: StandardScenario) => {
    const result = await merchants()

    expect(result.length).toEqual(Object.keys(scenario.merchant).length)
  })

  scenario('returns a single merchant', async (scenario: StandardScenario) => {
    const result = await merchant({ id: scenario.merchant.one.id })

    expect(result).toEqual(scenario.merchant.one)
  })

  scenario('creates a merchant', async () => {
    const result = await createMerchant({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a merchant', async (scenario: StandardScenario) => {
    const original = (await merchant({
      id: scenario.merchant.one.id,
    })) as Merchant
    const result = await updateMerchant({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a merchant', async (scenario: StandardScenario) => {
    const original = (await deleteMerchant({
      id: scenario.merchant.one.id,
    })) as Merchant
    const result = await merchant({ id: original.id })

    expect(result).toEqual(null)
  })
})
