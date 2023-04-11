import type { Prisma, Service } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ServiceCreateArgs>({
  service: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        city: {
          create: {
            name: 'String',
            description: 'String',
            avgPrice: 8326156,
            minQuantity: 2369197,
            maxQuantity: 6548700,
            region: {
              create: {
                name: 'String',
                description: 'String',
                game: {
                  create: {
                    name: 'String',
                    description: 'String',
                    startLocation: 'String',
                    currentRegionId: 855941,
                    currentCity: 'String',
                    maxDays: 1124930,
                    currentDay: 5670153,
                    timeOfDay: 'String',
                    character: {
                      create: {
                        name: 'String',
                        bio: 'String',
                        description: 'String',
                        luck: 9519329,
                        user: {
                          create: {
                            email: 'String3936829',
                            hashedPassword: 'String',
                            salt: 'String',
                          },
                        },
                      },
                    },
                    user: {
                      create: {
                        email: 'String9590366',
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
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        city: {
          create: {
            name: 'String',
            description: 'String',
            avgPrice: 3721996,
            minQuantity: 2310380,
            maxQuantity: 5827272,
            region: {
              create: {
                name: 'String',
                description: 'String',
                game: {
                  create: {
                    name: 'String',
                    description: 'String',
                    startLocation: 'String',
                    currentRegionId: 7706119,
                    currentCity: 'String',
                    maxDays: 1136493,
                    currentDay: 3905689,
                    timeOfDay: 'String',
                    character: {
                      create: {
                        name: 'String',
                        bio: 'String',
                        description: 'String',
                        luck: 9862352,
                        user: {
                          create: {
                            email: 'String5037366',
                            hashedPassword: 'String',
                            salt: 'String',
                          },
                        },
                      },
                    },
                    user: {
                      create: {
                        email: 'String6016294',
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
    },
  },
})

export type StandardScenario = ScenarioData<Service, 'service'>
