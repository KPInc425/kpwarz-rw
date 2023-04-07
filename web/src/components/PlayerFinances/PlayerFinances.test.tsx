import { render } from '@redwoodjs/testing/web'

import PlayerFinances from './PlayerFinances'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerFinances', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerFinances />)
    }).not.toThrow()
  })
})
