import { render } from '@redwoodjs/testing/web'

import TeamsCard from './TeamsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamsCard />)
    }).not.toThrow()
  })
})
