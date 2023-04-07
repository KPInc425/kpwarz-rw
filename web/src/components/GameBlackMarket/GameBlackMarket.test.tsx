import { render } from '@redwoodjs/testing/web'

import GameBlackMarket from './GameBlackMarket'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameBlackMarket', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameBlackMarket />)
    }).not.toThrow()
  })
})
