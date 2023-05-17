import { render } from '@redwoodjs/testing/web'

import Inventory from './Inventory'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Inventory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Inventory />)
    }).not.toThrow()
  })
})
