import { render } from '@redwoodjs/testing/web'

import LegitimateStores from './LegitimateStores'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LegitimateStores', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LegitimateStores />)
    }).not.toThrow()
  })
})
