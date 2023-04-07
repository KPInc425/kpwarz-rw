import type { CharacterFinances } from '@prisma/client'

import {
  characterFinanceses,
  characterFinances,
  createCharacterFinances,
  updateCharacterFinances,
  deleteCharacterFinances,
} from './characterFinanceses'
import type { StandardScenario } from './characterFinanceses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('characterFinanceses', () => {
  scenario(
    'returns all characterFinanceses',
    async (scenario: StandardScenario) => {
      const result = await characterFinanceses()

      expect(result.length).toEqual(
        Object.keys(scenario.characterFinances).length
      )
    }
  )

  scenario(
    'returns a single characterFinances',
    async (scenario: StandardScenario) => {
      const result = await characterFinances({
        id: scenario.characterFinances.one.id,
      })

      expect(result).toEqual(scenario.characterFinances.one)
    }
  )

  scenario(
    'creates a characterFinances',
    async (scenario: StandardScenario) => {
      const result = await createCharacterFinances({
        input: {
          characterId: scenario.characterFinances.two.characterId,
          cashOnHand: 8807756,
          bankAccount: 1953922,
          debt: 9221566,
        },
      })

      expect(result.characterId).toEqual(
        scenario.characterFinances.two.characterId
      )
      expect(result.cashOnHand).toEqual(8807756)
      expect(result.bankAccount).toEqual(1953922)
      expect(result.debt).toEqual(9221566)
    }
  )

  scenario(
    'updates a characterFinances',
    async (scenario: StandardScenario) => {
      const original = (await characterFinances({
        id: scenario.characterFinances.one.id,
      })) as CharacterFinances
      const result = await updateCharacterFinances({
        id: original.id,
        input: { cashOnHand: 7481888 },
      })

      expect(result.cashOnHand).toEqual(7481888)
    }
  )

  scenario(
    'deletes a characterFinances',
    async (scenario: StandardScenario) => {
      const original = (await deleteCharacterFinances({
        id: scenario.characterFinances.one.id,
      })) as CharacterFinances
      const result = await characterFinances({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
