import type { AvailableService } from '@prisma/client'

import {
  availableServices,
  availableService,
  createAvailableService,
  updateAvailableService,
  deleteAvailableService,
} from './availableServices'
import type { StandardScenario } from './availableServices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('availableServices', () => {
  scenario(
    'returns all availableServices',
    async (scenario: StandardScenario) => {
      const result = await availableServices()

      expect(result.length).toEqual(
        Object.keys(scenario.availableService).length
      )
    }
  )

  scenario(
    'returns a single availableService',
    async (scenario: StandardScenario) => {
      const result = await availableService({
        id: scenario.availableService.one.id,
      })

      expect(result).toEqual(scenario.availableService.one)
    }
  )

  scenario('creates a availableService', async () => {
    const result = await createAvailableService({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a availableService', async (scenario: StandardScenario) => {
    const original = (await availableService({
      id: scenario.availableService.one.id,
    })) as AvailableService
    const result = await updateAvailableService({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a availableService', async (scenario: StandardScenario) => {
    const original = (await deleteAvailableService({
      id: scenario.availableService.one.id,
    })) as AvailableService
    const result = await availableService({ id: original.id })

    expect(result).toEqual(null)
  })
})
