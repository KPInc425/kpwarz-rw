// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LoadGameCard> = (args) => {
//   return <LoadGameCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LoadGameCard from './LoadGameCard'

export const generated = () => {
  return <LoadGameCard />
}

export default {
  title: 'Components/LoadGameCard',
  component: LoadGameCard,
} as ComponentMeta<typeof LoadGameCard>
