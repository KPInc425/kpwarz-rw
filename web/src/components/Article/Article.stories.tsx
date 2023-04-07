// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  richBody: [
    {
      type: 'paragraph',
      align: 'center',
      children: [
        { text: 'Anywho, ' },
        { bold: true, text: 'breaking ' },
        {
          text: 'news! There will be a game attached to this blog and the posts will be more oriented to the goings on of the game in the future with some devlogs sprinkled in. I am not very good at this, but I will be attempting keep up with this as ',
        },
        { text: 'best', italic: true },
        { text: ' as possible. ' },
      ],
    },
    { type: 'paragraph', align: 'center', children: [{ text: '' }] },
    {
      type: 'paragraph',
      align: 'center',
      children: [
        {
          text: 'A prototype of the game has already been built with different tech, so getting it over to RedwoodJS ',
        },
        { text: "shouldn't", underline: true },
        { text: ' take too long :D' },
      ],
    },
    { type: 'paragraph', align: 'center', children: [{ text: '' }] },
    {
      type: 'paragraph',
      align: 'center',
      children: [
        {
          text: 'The game is a trading simulator in the vain of dopewarz/drugwars with some modern twists. The game will have some social aspects sprinkled in, such as leader boards, and possibly trading/selling of some sort, there is still a lot of planning to be done, but the most basic version will be worked on first, which should include buying/selling products, banking system for financing/loans, store system for needed products, and a travel system to trade in new areas. ',
        },
      ],
    },
    { type: 'paragraph', align: 'center', children: [{ text: '' }] },
    {
      type: 'paragraph',
      align: 'right',
      children: [
        { text: 'More updates coming soon! We ' },
        { bold: true, text: 'appreciate ' },
        {
          text: 'you sitting through this announcement, you may continue on with your regularly scheduled broadcast! ',
        },
      ],
    },
  ],
  createdAt: '02:40 pst',
  user: {
    name: 'KPInc425',
  },
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default {
  title: 'Components/Article',
  component: Article,
} as ComponentMeta<typeof Article>
