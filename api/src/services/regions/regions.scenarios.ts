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
            currentRegionId: 2006212,
            currentCity: 'String',
            maxDays: 163383,
            currentDay: 5565098,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                luck: 3021167,
                user: {
                  create: {
                    email: 'String7634775',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String5682344',
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
            currentRegionId: 1583866,
            currentCity: 'String',
            maxDays: 4618404,
            currentDay: 5439339,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                luck: 7763591,
                user: {
                  create: {
                    email: 'String345100',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String8361495',
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
