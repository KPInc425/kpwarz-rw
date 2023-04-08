import { render } from '@redwoodjs/testing/web'

import CharacterIntroPage from './CharacterIntroPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CharacterIntroPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharacterIntroPage />)
    }).not.toThrow()
  })
})
