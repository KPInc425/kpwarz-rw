import type { Prisma, TransactionSell } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TransactionSellCreateArgs>({
  transactionSell: {
    one: {
      data: {
        itemName: 'String',
        quantity: 5782219,
        price: 7587308,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 7173043,
            user: {
              create: {
                email: 'String4131609',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        merchant: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        itemName: 'String',
        quantity: 3440437,
        price: 6042105,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            luck: 9050899,
            user: {
              create: {
                email: 'String2217073',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        merchant: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TransactionSell, 'transactionSell'>
