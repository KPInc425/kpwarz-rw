import type { Prisma, Region } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RegionCreateArgs>({
  region: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        game: {
          create: {
            name: 'String',
            description: 'String',
            startLocation: 'String',
            currentRegionId: 4959558,
            currentCity: 'String',
            maxDays: 8600653,
            currentDay: 5599648,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                luck: 12132,
                storageType: 'String',
                user: {
                  create: {
                    email: 'String430344',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String3147872',
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
        name: 'String',
        description: 'String',
        game: {
          create: {
            name: 'String',
            description: 'String',
            startLocation: 'String',
            currentRegionId: 8461815,
            currentCity: 'String',
            maxDays: 4609091,
            currentDay: 3241540,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                luck: 8609072,
                storageType: 'String',
                user: {
                  create: {
                    email: 'String2568681',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String8139970',
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

export type StandardScenario = ScenarioData<Region, 'region'>
