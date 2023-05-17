import { render } from '@redwoodjs/testing/web'

import IDCard from './IDCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IDCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IDCard />)
    }).not.toThrow()
  })
})
