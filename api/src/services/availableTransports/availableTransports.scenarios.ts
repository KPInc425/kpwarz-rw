import type { Prisma, AvailableTransport } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AvailableTransportCreateArgs>({
  availableTransport: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        speed: 9552540,
        price: 3760185,
        storage: 1792586,
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        speed: 2480848,
        price: 5062136,
        storage: 8375744,
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  AvailableTransport,
  'availableTransport'
>
