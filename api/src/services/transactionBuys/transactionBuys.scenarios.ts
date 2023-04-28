import type { Prisma, TransactionBuy } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TransactionBuyCreateArgs>({
  transactionBuy: {
    one: {
      data: {
        quantity: 2905897,
        price: 2466092,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 9329449,
            user: {
              create: {
                email: 'String6270495',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        item: {
          create: {
            name: 'String',
            quantity: 6907166,
            price: 8510573,
            type: 'Food',
          },
        },
      },
    },
    two: {
      data: {
        quantity: 4354168,
        price: 2838308,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 5594881,
            user: {
              create: {
                email: 'String8488266',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        item: {
          create: {
            name: 'String',
            quantity: 1169336,
            price: 1022786,
            type: 'Food',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TransactionBuy, 'transactionBuy'>
