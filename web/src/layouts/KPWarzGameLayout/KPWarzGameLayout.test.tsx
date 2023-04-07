import { render } from '@redwoodjs/testing/web'

import KpWarzGameLayout from './KpWarzGameLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KpWarzGameLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KpWarzGameLayout />)
    }).not.toThrow()
  })
})
