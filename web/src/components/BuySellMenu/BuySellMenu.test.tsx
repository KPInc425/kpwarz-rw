import { render } from '@redwoodjs/testing/web'

import BuySellMenu from './BuySellMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BuySellMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuySellMenu />)
    }).not.toThrow()
  })
})
