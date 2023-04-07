// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GameBlackMarket> = (args) => {
//   return <GameBlackMarket {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GameBlackMarket from './GameBlackMarket'

export const generated = () => {
  return <GameBlackMarket />
}

export default {
  title: 'Components/GameBlackMarket',
  component: GameBlackMarket,
} as ComponentMeta<typeof GameBlackMarket>
