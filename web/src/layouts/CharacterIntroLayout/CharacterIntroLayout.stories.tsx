import type { ComponentMeta, ComponentStory } from '@storybook/react'

import CharacterIntroLayout from './CharacterIntroLayout'

export const generated: ComponentStory<typeof CharacterIntroLayout> = (
  args
) => {
  return <CharacterIntroLayout {...args} />
}

export default {
  title: 'Layouts/CharacterIntroLayout',
  component: CharacterIntroLayout,
} as ComponentMeta<typeof CharacterIntroLayout>
