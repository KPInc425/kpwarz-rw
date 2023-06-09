// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TransactionSell> = (args) => {
//   return <TransactionSell {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TransactionSell from './TransactionSell'

export const generated = () => {
  return <TransactionSell />
}

export default {
  title: 'Components/TransactionSell',
  component: TransactionSell,
} as ComponentMeta<typeof TransactionSell>
