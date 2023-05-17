// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Inventory> = (args) => {
//   return <Inventory {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Inventory from './Inventory'

export const generated = () => {
  return <Inventory />
}

export default {
  title: 'Components/Inventory',
  component: Inventory,
} as ComponentMeta<typeof Inventory>
