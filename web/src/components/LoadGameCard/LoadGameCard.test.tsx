import { render } from '@redwoodjs/testing/web'

import LoadGameCard from './LoadGameCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadGameCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadGameCard />)
    }).not.toThrow()
  })
})
