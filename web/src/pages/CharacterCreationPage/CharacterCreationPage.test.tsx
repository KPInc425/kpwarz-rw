import { render } from '@redwoodjs/testing/web'

import CharacterCreationPage from './CharacterCreationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CharacterCreationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharacterCreationPage />)
    }).not.toThrow()
  })
})
