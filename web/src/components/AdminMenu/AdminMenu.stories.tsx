// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AdminMenu> = (args) => {
//   return <AdminMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AdminMenu from './AdminMenu'

export const generated = () => {
  return <AdminMenu />
}

export default {
  title: 'Components/AdminMenu',
  component: AdminMenu,
} as ComponentMeta<typeof AdminMenu>
