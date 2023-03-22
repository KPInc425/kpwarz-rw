import type { ComponentMeta, ComponentStory } from '@storybook/react'

import KpWarzLayout from './KpWarzLayout'

export const generated: ComponentStory<typeof KpWarzLayout> = (args) => {
  return <KpWarzLayout {...args} />
}

export default {
  title: 'Layouts/KpWarzLayout',
  component: KpWarzLayout,
} as ComponentMeta<typeof KpWarzLayout>
