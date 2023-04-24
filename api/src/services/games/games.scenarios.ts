import type { Prisma, Game } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        startLocation: 'String',
        currentRegionId: 8948006,
        maxDays: 3020768,
        currentDay: 3345451,
        timeOfDay: 'String',
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 7132709,
            user: {
              create: {
                email: 'String2032337',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String5425072',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        startLocation: 'String',
        currentRegionId: 9583947,
        maxDays: 8169877,
        currentDay: 2371817,
        timeOfDay: 'String',
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 8729732,
            user: {
              create: {
                email: 'String2327380',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String5823267',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Game, 'game'>
