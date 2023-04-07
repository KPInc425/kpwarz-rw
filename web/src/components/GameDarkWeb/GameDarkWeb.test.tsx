import { render } from '@redwoodjs/testing/web'

import GameDarkWeb from './GameDarkWeb'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameDarkWeb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameDarkWeb />)
    }).not.toThrow()
  })
})
