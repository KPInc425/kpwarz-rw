import { render } from '@redwoodjs/testing/web'

import KPWarzLoadGamePage from './KPWarzLoadGamePage1'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KPWarzLoadGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KPWarzLoadGamePage />)
    }).not.toThrow()
  })
})
