import type { ComponentMeta, ComponentStory } from '@storybook/react'

import KpWarzGameLayout from './KpWarzGameLayout'

export const generated: ComponentStory<typeof KpWarzGameLayout> = (args) => {
  return <KpWarzGameLayout {...args} />
}

export default {
  title: 'Layouts/KpWarzGameLayout',
  component: KpWarzGameLayout,
} as ComponentMeta<typeof KpWarzGameLayout>
