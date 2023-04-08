import type { AvailableTransport } from '@prisma/client'

import {
  availableTransports,
  availableTransport,
  createAvailableTransport,
  updateAvailableTransport,
  deleteAvailableTransport,
} from './availableTransports'
import type { StandardScenario } from './availableTransports.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('availableTransports', () => {
  scenario(
    'returns all availableTransports',
    async (scenario: StandardScenario) => {
      const result = await availableTransports()

      expect(result.length).toEqual(
        Object.keys(scenario.availableTransport).length
      )
    }
  )

  scenario(
    'returns a single availableTransport',
    async (scenario: StandardScenario) => {
      const result = await availableTransport({
        id: scenario.availableTransport.one.id,
      })

      expect(result).toEqual(scenario.availableTransport.one)
    }
  )

  scenario('creates a availableTransport', async () => {
    const result = await createAvailableTransport({
      input: {
        name: 'String',
        description: 'String',
        speed: 2331026,
        price: 8473146,
        storage: 3347649,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.speed).toEqual(2331026)
    expect(result.price).toEqual(8473146)
    expect(result.storage).toEqual(3347649)
  })

  scenario(
    'updates a availableTransport',
    async (scenario: StandardScenario) => {
      const original = (await availableTransport({
        id: scenario.availableTransport.one.id,
      })) as AvailableTransport
      const result = await updateAvailableTransport({
        id: original.id,
        input: { name: 'String2' },
      })

      expect(result.name).toEqual('String2')
    }
  )

  scenario(
    'deletes a availableTransport',
    async (scenario: StandardScenario) => {
      const original = (await deleteAvailableTransport({
        id: scenario.availableTransport.one.id,
      })) as AvailableTransport
      const result = await availableTransport({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
