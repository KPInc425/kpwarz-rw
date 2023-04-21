// import { Grid, GridItem } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import IntroSceneCell from 'src/components/IntroSceneCell'

const CharacterIntroPage = ({ id }) => {
  return (
    <>
      <MetaTags title="CharacterIntro" description="CharacterIntro page" />
      <IntroSceneCell id={Number(id)} />
    </>
  )
}

export default CharacterIntroPage
