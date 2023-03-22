import { render } from '@redwoodjs/testing/web'

import KpWarzLayout from './KpWarzLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KpWarzLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KpWarzLayout />)
    }).not.toThrow()
  })
})
