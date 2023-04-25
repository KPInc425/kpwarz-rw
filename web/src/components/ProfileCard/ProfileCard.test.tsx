import { render } from '@redwoodjs/testing/web'

import ProductCard from './ProfileCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileCard />)
    }).not.toThrow()
  })
})
