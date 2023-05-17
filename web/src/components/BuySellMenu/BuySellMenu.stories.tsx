// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof BuySellMenu> = (args) => {
//   return <BuySellMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import BuySellMenu from './BuySellMenu'

export const generated = () => {
  return <BuySellMenu />
}

export default {
  title: 'Components/BuySellMenu',
  component: BuySellMenu,
} as ComponentMeta<typeof BuySellMenu>
