import { render } from '@redwoodjs/testing/web'

import PlayerInfo from './PlayerInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerInfo />)
    }).not.toThrow()
  })
})
