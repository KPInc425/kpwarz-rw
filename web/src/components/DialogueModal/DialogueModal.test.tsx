import { render } from '@redwoodjs/testing/web'

import DialogueModal from './DialogueModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DialogueModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DialogueModal />)
    }).not.toThrow()
  })
})
