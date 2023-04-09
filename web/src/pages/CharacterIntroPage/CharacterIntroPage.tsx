// import { Grid, GridItem } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CharacterIntroCell from 'src/components/CharacterIntroCell'

const CharacterIntroPage = ({ id }) => {
  return (
    <>
      <MetaTags title="CharacterIntro" description="CharacterIntro page" />
      <CharacterIntroCell id={Number(id)} />
    </>
  )
}

export default CharacterIntroPage
