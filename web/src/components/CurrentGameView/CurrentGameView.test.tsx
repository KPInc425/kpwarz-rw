import { render } from '@redwoodjs/testing/web'

import CurrentGameView from './CurrentGameView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CurrentGameView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CurrentGameView />)
    }).not.toThrow()
  })
})
