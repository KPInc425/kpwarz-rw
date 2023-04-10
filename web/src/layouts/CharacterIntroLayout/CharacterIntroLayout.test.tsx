import { render } from '@redwoodjs/testing/web'

import CharacterIntroLayout from './CharacterIntroLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CharacterIntroLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharacterIntroLayout />)
    }).not.toThrow()
  })
})
