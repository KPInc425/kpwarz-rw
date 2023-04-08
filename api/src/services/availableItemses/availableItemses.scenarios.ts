import type { Prisma, AvailableItems } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AvailableItemsCreateArgs>({
  availableItems: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        type: 'String',
        ability: 'String',
        basePrice: 1,
        chance: 1,
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        type: 'String',
        ability: 'String',
        basePrice: 1,
        chance: 1,
      },
    },
  },
})

export type StandardScenario = ScenarioData<AvailableItems, 'availableItems'>
