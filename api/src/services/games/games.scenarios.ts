import type { Prisma, Game } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        startLocation: 'String',
        currentLocation: 'String',
        currentCity: 'String',
        maxDays: 6676609,
        currentDay: 364487,
        timeOfDay: 'String',
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 6764914,
            maxHealth: 9568014,
            currentItems: 7810754,
            maxItems: 4689493,
            luck: 9552889,
            storageType: 'String',
            user: {
              create: {
                email: 'String6902575',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String6806796',
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
        currentLocation: 'String',
        currentCity: 'String',
        maxDays: 4076504,
        currentDay: 5341931,
        timeOfDay: 'String',
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 2282486,
            maxHealth: 2096526,
            currentItems: 2845136,
            maxItems: 9497001,
            luck: 4519779,
            storageType: 'String',
            user: {
              create: {
                email: 'String5356839',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String9309805',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Game, 'game'>
