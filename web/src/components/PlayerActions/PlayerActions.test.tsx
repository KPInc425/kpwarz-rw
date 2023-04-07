import { render } from '@redwoodjs/testing/web'

import PlayerActions from './PlayerActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerActions />)
    }).not.toThrow()
  })
})
