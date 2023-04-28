import { render } from '@redwoodjs/testing/web'

import TransactionBuy from './TransactionBuy'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TransactionBuy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionBuy />)
    }).not.toThrow()
  })
})
