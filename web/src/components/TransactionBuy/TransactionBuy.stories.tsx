// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TransactionBuy> = (args) => {
//   return <TransactionBuy {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TransactionBuy from './TransactionBuy'

export const generated = () => {
  mockGraphQLMutation('CreateTransactionMutation', (variables, { ctx }) => {
    const id = Math.floor(Math.random() * 1000)
    ctx.delay(3000)

    return {
      createTransactionBuy: {
        id,
        characterId: variables.input.characterId,
        quantity: variables.input.quantity,
        price: variables.input.price,
        itemId: variables.input.itemId,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return (
    <TransactionBuy
      item={{
        name: 'Cannabis Flower',
        quantity: 420,
        id: 420,
        price: 8,
        unit: 'gram',
      }}
      characterId={1}
    />
  )
}

export default {
  title: 'Components/TransactionBuy',
  component: TransactionBuy,
} as ComponentMeta<typeof TransactionBuy>
