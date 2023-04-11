import type { Prisma, Item } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: {
      data: {
        name: 'String',
        quantity: 7868862,
        price: 823794,
        quality: 'String',
        ability: 'String',
        description: 'String',
        type: 'String',
        uses: 5398721,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 1026217,
            maxHealth: 6499768,
            currentItems: 6491707,
            maxItems: 3814551,
            luck: 4508846,
            storageType: 'String',
            user: {
              create: {
                email: 'String4914859',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        game: {
          create: {
            name: 'String',
            description: 'String',
            startLocation: 'String',
            currentRegionId: 87534,
            currentCity: 'String',
            maxDays: 1430713,
            currentDay: 3671783,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                health: 9082184,
                maxHealth: 2541254,
                currentItems: 2229696,
                maxItems: 9380017,
                luck: 6803519,
                storageType: 'String',
                user: {
                  create: {
                    email: 'String426091',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String6843376',
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
        quantity: 6195176,
        price: 75362,
        quality: 'String',
        ability: 'String',
        description: 'String',
        type: 'String',
        uses: 2737114,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 6443238,
            maxHealth: 738901,
            currentItems: 5913994,
            maxItems: 9992016,
            luck: 849870,
            storageType: 'String',
            user: {
              create: {
                email: 'String852338',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        game: {
          create: {
            name: 'String',
            description: 'String',
            startLocation: 'String',
            currentRegionId: 4512,
            currentCity: 'String',
            maxDays: 2448698,
            currentDay: 9353773,
            timeOfDay: 'String',
            character: {
              create: {
                name: 'String',
                bio: 'String',
                description: 'String',
                health: 6496930,
                maxHealth: 2081814,
                currentItems: 6817514,
                maxItems: 4032132,
                luck: 4648678,
                storageType: 'String',
                user: {
                  create: {
                    email: 'String9600007',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String514248',
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

export type StandardScenario = ScenarioData<Item, 'item'>
