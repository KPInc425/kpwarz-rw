import type { ComponentMeta, ComponentStory } from '@storybook/react'

import KPWarzGameLayout from './KPWarzGameLayout'

export const generated: ComponentStory<typeof KPWarzGameLayout> = (args) => {
  return <KPWarzGameLayout {...args} />
}

export default {
  title: 'Layouts/KPWarzGameLayout',
  component: KPWarzGameLayout,
} as ComponentMeta<typeof KPWarzGameLayout>
