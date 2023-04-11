import type { Prisma, City } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CityCreateArgs>({
  city: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        avgPrice: 2752455,
        minQuantity: 2155053,
        maxQuantity: 645073,
        region: {
          create: {
            name: 'String',
            description: 'String',
            game: {
              create: {
                name: 'String',
                description: 'String',
                startLocation: 'String',
                currentRegionId: 2763145,
                currentCity: 'String',
                maxDays: 9994133,
                currentDay: 8184513,
                timeOfDay: 'String',
                character: {
                  create: {
                    name: 'String',
                    bio: 'String',
                    description: 'String',
                    luck: 8652224,
                    user: {
                      create: {
                        email: 'String6650234',
                        hashedPassword: 'String',
                        salt: 'String',
                      },
                    },
                  },
                },
                user: {
                  create: {
                    email: 'String3003840',
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
        avgPrice: 5054469,
        minQuantity: 6105728,
        maxQuantity: 9271144,
        region: {
          create: {
            name: 'String',
            description: 'String',
            game: {
              create: {
                name: 'String',
                description: 'String',
                startLocation: 'String',
                currentRegionId: 4666099,
                currentCity: 'String',
                maxDays: 9571647,
                currentDay: 3086504,
                timeOfDay: 'String',
                character: {
                  create: {
                    name: 'String',
                    bio: 'String',
                    description: 'String',
                    luck: 310039,
                    user: {
                      create: {
                        email: 'String107429',
                        hashedPassword: 'String',
                        salt: 'String',
                      },
                    },
                  },
                },
                user: {
                  create: {
                    email: 'String2153108',
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
