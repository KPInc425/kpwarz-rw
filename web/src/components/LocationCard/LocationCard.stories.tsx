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

import LocationCard from './LocationCard'

export const generated = () => {
  return <LocationCard />
}

export default {
  title: 'Components/LocationCard',
  component: LocationCard,
} as ComponentMeta<typeof LocationCard>
