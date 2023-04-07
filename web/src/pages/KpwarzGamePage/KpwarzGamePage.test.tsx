import { render } from '@redwoodjs/testing/web'

import KpwarzGamePage from './KpwarzGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KpwarzGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KpwarzGamePage />)
    }).not.toThrow()
  })
})
