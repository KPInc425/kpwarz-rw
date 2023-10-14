// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DialogueModal> = (args) => {
//   return <DialogueModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DialogueModal from './DialogueModal'

export const generated = () => {
  return <DialogueModal />
}

export default {
  title: 'Components/DialogueModal',
  component: DialogueModal,
} as ComponentMeta<typeof DialogueModal>
