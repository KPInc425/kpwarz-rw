import type { Transport } from '@prisma/client'

import {
  transports,
  transport,
  createTransport,
  updateTransport,
  deleteTransport,
} from './transports'
import type { StandardScenario } from './transports.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('transports', () => {
  scenario('returns all transports', async (scenario: StandardScenario) => {
    const result = await transports()

    expect(result.length).toEqual(Object.keys(scenario.transport).length)
  })

  scenario('returns a single transport', async (scenario: StandardScenario) => {
    const result = await transport({ id: scenario.transport.one.id })

    expect(result).toEqual(scenario.transport.one)
  })

  scenario('creates a transport', async (scenario: StandardScenario) => {
    const result = await createTransport({
      input: {
        name: 'String',
        description: 'String',
        speed: 2167713,
        price: 7551506,
        storage: 5648785,
        characterId: scenario.transport.two.characterId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.speed).toEqual(2167713)
    expect(result.price).toEqual(7551506)
    expect(result.storage).toEqual(5648785)
    expect(result.characterId).toEqual(scenario.transport.two.characterId)
  })

  scenario('updates a transport', async (scenario: StandardScenario) => {
    const original = (await transport({
      id: scenario.transport.one.id,
    })) as Transport
    const result = await updateTransport({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a transport', async (scenario: StandardScenario) => {
    const original = (await deleteTransport({
      id: scenario.transport.one.id,
    })) as Transport
    const result = await transport({ id: original.id })

    expect(result).toEqual(null)
  })
})
