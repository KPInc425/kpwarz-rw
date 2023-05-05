import type { Prisma, CharacterFinances } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CharacterFinancesCreateArgs>({
  characterFinances: {
    one: {
      data: {
        cashOnHand: 7537084,
        bankAccount: 7666509,
        debt: 194503,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 7479640,
            maxHealth: 7514793,
            currentItems: 360746,
            maxItems: 5668225,
            luck: 3077075,
            storageType: 'String',
            user: {
              create: {
                email: 'String412117',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        cashOnHand: 8424395,
        bankAccount: 3702368,
        debt: 4021808,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 4582422,
            maxHealth: 8031625,
            currentItems: 6652032,
            maxItems: 8360080,
            luck: 342583,
            storageType: 'String',
            user: {
              create: {
                email: 'String8352391',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CharacterFinances,
  'characterFinances'
>
