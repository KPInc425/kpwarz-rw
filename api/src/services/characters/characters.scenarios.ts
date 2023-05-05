import type { Prisma, Character } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CharacterCreateArgs>({
  character: {
    one: {
      data: {
        name: 'String',
        bio: 'String',
        description: 'String',
        health: 2009993,
        maxHealth: 2450494,
        currentItems: 7908046,
        maxItems: 9292352,
        luck: 8774428,
        storageType: 'String',
        user: {
          create: {
            email: 'String6757046',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        bio: 'String',
        description: 'String',
        health: 2106312,
        maxHealth: 8791841,
        currentItems: 7526556,
        maxItems: 1761825,
        luck: 6557325,
        storageType: 'String',
        user: {
          create: {
            email: 'String4519105',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Character, 'character'>
