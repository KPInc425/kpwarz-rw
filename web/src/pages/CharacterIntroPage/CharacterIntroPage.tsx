// import { Grid, GridItem } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PlayerCharacterCell from 'src/components/PlayerCharacterCell'

const CharacterIntroPage = ({ id }) => {
  return (
    <>
      <MetaTags title="CharacterIntro" description="CharacterIntro page" />
      <PlayerCharacterCell id={Number(id)} />
    </>
  )
}

export default CharacterIntroPage
