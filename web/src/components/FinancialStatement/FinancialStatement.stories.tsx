// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FinancialStatement> = (args) => {
//   return <FinancialStatement {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FinancialStatement from './FinancialStatement'

export const generated = () => {
  return <FinancialStatement />
}

export default {
  title: 'Components/FinancialStatement',
  component: FinancialStatement,
} as ComponentMeta<typeof FinancialStatement>
