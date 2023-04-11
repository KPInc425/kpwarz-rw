import type { Prisma, City } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CityCreateArgs>({
  city: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        avgPrice: 3325448,
        minQuantity: 2425574,
        maxQuantity: 2292131,
        region: {
          create: {
            name: 'String',
            description: 'String',
            game: {
              create: {
                name: 'String',
                description: 'String',
                startLocation: 'String',
                currentRegionId: 1920178,
                currentCity: 'String',
                maxDays: 8389124,
                currentDay: 8743012,
                timeOfDay: 'String',
                character: {
                  create: {
                    name: 'String',
                    bio: 'String',
                    description: 'String',
                    luck: 5502323,
                    user: {
                      create: {
                        email: 'String9502909',
                        hashedPassword: 'String',
                        salt: 'String',
                      },
                    },
                  },
                },
                user: {
                  create: {
                    email: 'String7253144',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
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
        avgPrice: 2419432,
        minQuantity: 8589984,
        maxQuantity: 5310666,
        region: {
          create: {
            name: 'String',
            description: 'String',
            game: {
              create: {
                name: 'String',
                description: 'String',
                startLocation: 'String',
                currentRegionId: 2830924,
                currentCity: 'String',
                maxDays: 1177394,
                currentDay: 3612866,
                timeOfDay: 'String',
                character: {
                  create: {
                    name: 'String',
                    bio: 'String',
                    description: 'String',
                    luck: 8044990,
                    user: {
                      create: {
                        email: 'String288028',
                        hashedPassword: 'String',
                        salt: 'String',
                      },
                    },
                  },
                },
                user: {
                  create: {
                    email: 'String7274844',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<City, 'city'>
