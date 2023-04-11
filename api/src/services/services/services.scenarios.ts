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
            avgPrice: 6228158,
            minQuantity: 7099776,
            maxQuantity: 2756872,
            region: {
              create: {
                name: 'String',
                description: 'String',
                game: {
                  create: {
                    name: 'String',
                    description: 'String',
                    startLocation: 'String',
                    currentRegionId: 8520331,
                    currentCity: 'String',
                    maxDays: 2939611,
                    currentDay: 6550126,
                    timeOfDay: 'String',
                    character: {
                      create: {
                        name: 'String',
                        bio: 'String',
                        description: 'String',
                        luck: 6839051,
                        user: {
                          create: {
                            email: 'String5919863',
                            hashedPassword: 'String',
                            salt: 'String',
                          },
                        },
                      },
                    },
                    user: {
                      create: {
                        email: 'String1151180',
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
            avgPrice: 4431357,
            minQuantity: 2816143,
            maxQuantity: 6315098,
            region: {
              create: {
                name: 'String',
                description: 'String',
                game: {
                  create: {
                    name: 'String',
                    description: 'String',
                    startLocation: 'String',
                    currentRegionId: 1636147,
                    currentCity: 'String',
                    maxDays: 9580296,
                    currentDay: 8796962,
                    timeOfDay: 'String',
                    character: {
                      create: {
                        name: 'String',
                        bio: 'String',
                        description: 'String',
                        luck: 4446909,
                        user: {
                          create: {
                            email: 'String3243414',
                            hashedPassword: 'String',
                            salt: 'String',
                          },
                        },
                      },
                    },
                    user: {
                      create: {
                        email: 'String3273449',
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
