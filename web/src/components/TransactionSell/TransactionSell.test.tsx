import { render } from '@redwoodjs/testing/web'

import TransactionSell from './TransactionSell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TransactionSell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionSell />)
    }).not.toThrow()
  })
})
