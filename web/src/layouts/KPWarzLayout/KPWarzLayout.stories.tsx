import type { ComponentMeta, ComponentStory } from '@storybook/react'

import KPWarzLayout from './KPWarzLayout'

export const generated: ComponentStory<typeof KPWarzLayout> = (args) => {
  return <KPWarzLayout {...args} />
}

export default {
  title: 'Layouts/KPWarzLayout',
  component: KPWarzLayout,
} as ComponentMeta<typeof KPWarzLayout>
