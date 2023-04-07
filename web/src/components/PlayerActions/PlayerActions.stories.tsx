// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlayerActions> = (args) => {
//   return <PlayerActions {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlayerActions from './PlayerActions'

export const generated = () => {
  return <PlayerActions />
}

export default {
  title: 'Components/PlayerActions',
  component: PlayerActions,
} as ComponentMeta<typeof PlayerActions>
