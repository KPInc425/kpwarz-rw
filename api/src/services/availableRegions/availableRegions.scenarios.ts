import type { Prisma, AvailableRegion } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AvailableRegionCreateArgs>({
  availableRegion: {
    one: { data: { name: 'String', description: 'String' } },
    two: { data: { name: 'String', description: 'String' } },
  },
})

export type StandardScenario = ScenarioData<AvailableRegion, 'availableRegion'>
