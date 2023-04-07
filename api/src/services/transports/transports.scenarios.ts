import type { Prisma, Transport } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TransportCreateArgs>({
  transport: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        speed: 3102920,
        price: 5073689,
        storage: 8063638,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 873779,
            maxHealth: 4309194,
            currentItems: 1958909,
            maxItems: 157272,
            luck: 6901673,
            storageType: 'String',
            user: {
              create: {
                email: 'String5228524',
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
        speed: 2695521,
        price: 3023985,
        storage: 1827725,
        character: {
          create: {
            name: 'String',
            bio: 'String',
            description: 'String',
            health: 270785,
            maxHealth: 788606,
            currentItems: 9590636,
            maxItems: 4869541,
            luck: 1617956,
            storageType: 'String',
            user: {
              create: {
                email: 'String1601825',
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

export type StandardScenario = ScenarioData<Transport, 'transport'>
