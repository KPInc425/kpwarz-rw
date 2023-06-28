import { Container, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Text
        borderRadius={'1rem'}
        className="box-shadow-inset mb-2 border-2 border-black p-6 text-center text-3xl [text-shadow:_0_3px_3px_rgb(0_255_0_/_65%)]"
      >
        KPWarz News!
      </Text>
      <ArticlesCell />
      <Container
        maxW={'container.lg'}
        border={'2px outset rgba(0,0,0,0.25)'}
        p={4}
        borderRadius={'1rem'}
      >
        <Text textAlign={'center'}>And this is where the party begins!</Text>
      </Container>
      <Link
        to={routes.characterCreation()}
        className="mx-auto mt-2 block rounded-lg bg-blue-700 p-2 text-center hover:bg-blue-400 dark:bg-green-700 dark:hover:bg-green-500 dark:hover:text-slate-700 dark:hover:shadow-lg dark:hover:shadow-green-700"
      >
        Begin Game
      </Link>
    </>
  )
}

export default HomePage
