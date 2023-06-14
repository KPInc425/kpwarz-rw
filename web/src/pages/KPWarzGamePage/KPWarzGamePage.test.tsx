import { render } from '@redwoodjs/testing/web'

import KPWarzGamePage from './KPWarzGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KPWarzGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KPWarzGamePage />)
    }).not.toThrow()
  })
})
