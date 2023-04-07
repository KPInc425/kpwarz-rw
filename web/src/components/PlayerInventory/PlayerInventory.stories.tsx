// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlayerInventory> = (args) => {
//   return <PlayerInventory {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlayerInventory from './PlayerInventory'

export const generated = () => {
  return <PlayerInventory />
}

export default {
  title: 'Components/PlayerInventory',
  component: PlayerInventory,
} as ComponentMeta<typeof PlayerInventory>
