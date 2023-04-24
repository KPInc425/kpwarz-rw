import type { Prisma, AvailableItems } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AvailableItemsCreateArgs>({
  availableItems: {
    one: {
      data: { name: 'String4508404', description: 'String', ability: 'String' },
    },
    two: {
      data: { name: 'String9788796', description: 'String', ability: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<AvailableItems, 'availableItems'>
