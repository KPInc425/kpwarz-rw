// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlayerInfo> = (args) => {
//   return <PlayerInfo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlayerInfo from './PlayerInfo'

export const generated = () => {
  return <PlayerInfo />
}

export default {
  title: 'Components/PlayerInfo',
  component: PlayerInfo,
} as ComponentMeta<typeof PlayerInfo>
