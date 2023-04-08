import type { ComponentMeta } from '@storybook/react'

import CharacterIntroPage from './CharacterIntroPage'

export const generated = () => {
  return <CharacterIntroPage />
}

export default {
  title: 'Pages/CharacterIntroPage',
  component: CharacterIntroPage,
} as ComponentMeta<typeof CharacterIntroPage>
