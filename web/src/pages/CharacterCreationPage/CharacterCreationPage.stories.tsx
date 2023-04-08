import type { ComponentMeta } from '@storybook/react'

import CharacterCreationPage from './CharacterCreationPage'

export const generated = () => {
  return <CharacterCreationPage />
}

export default {
  title: 'Pages/CharacterCreationPage',
  component: CharacterCreationPage,
} as ComponentMeta<typeof CharacterCreationPage>
