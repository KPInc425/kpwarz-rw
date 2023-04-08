import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CreateCharacter from 'src/components/CreatecharacterCell/CreateCharacter'

const CharacterCreationPage = () => {
  return (
    <>
      <MetaTags
        title="CharacterCreation"
        description="CharacterCreation page"
      />

      <CreateCharacter />
    </>
  )
}

export default CharacterCreationPage
