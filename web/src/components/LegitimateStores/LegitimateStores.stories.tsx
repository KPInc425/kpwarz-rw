// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LegitimateStores> = (args) => {
//   return <LegitimateStores {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LegitimateStores from './LegitimateStores'

export const generated = () => {
  return <LegitimateStores />
}

export default {
  title: 'Components/LegitimateStores',
  component: LegitimateStores,
} as ComponentMeta<typeof LegitimateStores>
