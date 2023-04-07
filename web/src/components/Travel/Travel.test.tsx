import { render } from '@redwoodjs/testing/web'

import Travel from './Travel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Travel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Travel />)
    }).not.toThrow()
  })
})
