// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Comment> = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'KPInc425',
        body: 'This is the first comment!',
        createdAt: '2023-03-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'iLGAdmin@iLG.net',
    roles: 'moderator',
  })
  return (
    <Comment
      comment={{
        name: 'KPInc425',
        body: 'This is the first comment!',
        createdAt: '2023-03-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>
