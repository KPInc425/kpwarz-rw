// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Trader> = (args) => {
//   return <Trader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Trader from './Trader'

export const generated = () => {
  return <Trader />
}

export default {
  title: 'Components/Trader',
  component: Trader,
} as ComponentMeta<typeof Trader>
