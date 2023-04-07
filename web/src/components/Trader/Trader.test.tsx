import { render } from '@redwoodjs/testing/web'

import Trader from './Trader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Trader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Trader />)
    }).not.toThrow()
  })
})
