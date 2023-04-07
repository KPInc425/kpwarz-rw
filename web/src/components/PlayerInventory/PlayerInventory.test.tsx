import { render } from '@redwoodjs/testing/web'

import PlayerInventory from './PlayerInventory'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlayerInventory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlayerInventory />)
    }).not.toThrow()
  })
})
