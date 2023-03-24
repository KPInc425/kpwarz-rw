import { render } from '@redwoodjs/testing/web'

import KPWarzLayout from './KPWarzLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KPWarzLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KPWarzLayout />)
    }).not.toThrow()
  })
})
