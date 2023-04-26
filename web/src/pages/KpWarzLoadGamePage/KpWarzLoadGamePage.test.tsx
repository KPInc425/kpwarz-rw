import { render } from '@redwoodjs/testing/web'

import KpWarzLoadGamePage from './KpWarzLoadGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KpWarzLoadGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KpWarzLoadGamePage />)
    }).not.toThrow()
  })
})
