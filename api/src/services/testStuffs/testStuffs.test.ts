import type { TestStuff } from '@prisma/client'

import {
  testStuffs,
  testStuff,
  createTestStuff,
  updateTestStuff,
  deleteTestStuff,
} from './testStuffs'
import type { StandardScenario } from './testStuffs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('testStuffs', () => {
  scenario('returns all testStuffs', async (scenario: StandardScenario) => {
    const result = await testStuffs()

    expect(result.length).toEqual(Object.keys(scenario.testStuff).length)
  })

  scenario('returns a single testStuff', async (scenario: StandardScenario) => {
    const result = await testStuff({ id: scenario.testStuff.one.id })

    expect(result).toEqual(scenario.testStuff.one)
  })

  scenario('creates a testStuff', async () => {
    const result = await createTestStuff({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a testStuff', async (scenario: StandardScenario) => {
    const original = (await testStuff({
      id: scenario.testStuff.one.id,
    })) as TestStuff
    const result = await updateTestStuff({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a testStuff', async (scenario: StandardScenario) => {
    const original = (await deleteTestStuff({
      id: scenario.testStuff.one.id,
    })) as TestStuff
    const result = await testStuff({ id: original.id })

    expect(result).toEqual(null)
  })
})
