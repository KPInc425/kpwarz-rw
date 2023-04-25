// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProductCard> = (args) => {
//   return <ProductCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileCard from './ProfileCard'

export const generated = () => {
  return <ProfileCard />
}

export default {
  title: 'Components/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>
