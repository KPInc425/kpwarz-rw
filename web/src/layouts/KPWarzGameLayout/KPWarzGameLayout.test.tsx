import { render } from '@redwoodjs/testing/web'

import KPWarzGameLayout from './KPWarzGameLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KPWarzGameLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KPWarzGameLayout />)
    }).not.toThrow()
  })
})
