import { useState } from 'react'

import {
  Badge,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import type {
  FindIntroSceneQuery,
  FindIntroSceneQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CharacterIntroCell from 'src/components/CharacterIntroCell'
import CurrentRegionCell from 'src/components/CurrentRegionCell'

export const QUERY = gql`
  query FindIntroSceneQuery($id: Int!) {
    introScene: getGameInfo(id: $id) {
      id
      name
      description
      currentRegionId
      currentCity {
        id
      }
      currentDay
      timeOfDay
      maxDays
      characterId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindIntroSceneQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  introScene,
}: CellSuccessProps<FindIntroSceneQuery, FindIntroSceneQueryVariables>) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [introView, setIntroView] = useState(5)

  const startGame = () => {
    console.log('start game')
    console.log(typeof introScene.id)
    navigate(routes.kpwarzGame({ id: introScene.id }))
  }

  const handleClick = (view) => {
    console.log('view', view)
    setIntroView(view)
  }
  return (
    <div>
      {/* {JSON.stringify(characterIntro)} */}
      <Grid
        h="100vh"
        templateColumns="repeat(12, minmax(0, 1fr))"
        templateRows="repeat(12, minmax(0, 1fr))"
        gap={2}
      >
        <GridItem
          colSpan={{ base: '12', lg: '2' }}
          rowSpan={{ base: '6', lg: '12' }}
          rowStart={{ base: '7', lg: '1' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          <Heading textAlign={'center'}>Character Intro</Heading>
          <Stack px={2}>
            <Button
              disabled={true}
              onClick={() => handleClick(1)}
              colorScheme="green"
            >
              Mug Shot
            </Button>
            <Button
              disabled={true}
              onClick={() => handleClick(2)}
              colorScheme="green"
            >
              Character Backstory
            </Button>
            <Button
              disabled={true}
              onClick={() => handleClick(3)}
              colorScheme="green"
            >
              Plot Thickens
            </Button>
            <Button
              disabled={true}
              onClick={() => handleClick(4)}
              colorScheme="green"
            >
              Buffs/Debuffs
            </Button>
            <Button onClick={() => handleClick(5)} colorScheme="green">
              Starting Info
            </Button>
            <Button
              disabled={true}
              onClick={() => handleClick(6)}
              colorScheme="green"
            >
              Breaking Newz!
            </Button>
            <Button onClick={() => handleClick(7)} colorScheme="green">
              Locations
            </Button>
            <Button size="sm" colorScheme="blue" onClick={startGame}>
              Start Game
            </Button>
            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
              Toggle Mode
            </Button>
          </Stack>
        </GridItem>
        {introView === 1 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            MugShot (Coming Soon)
          </GridItem>
        )}
        {introView === 2 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            Chatacter Backstory: Inspired by Bio (Coming Soon)
          </GridItem>
        )}
        {introView === 3 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            Current Plot Point (Coming Soon)
          </GridItem>
        )}
        {introView === 4 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            Buffs and Debuffs (Coming Soon)
          </GridItem>
        )}
        {introView === 5 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            <Badge m={4} p={4} borderRadius={'12px'}>
              <Text fontSize="4xl">Starting Info</Text>
            </Badge>
            <CharacterIntroCell id={Number(introScene.characterId)} />
          </GridItem>
        )}
        {introView === 6 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            First News (Coming Soon)
          </GridItem>
        )}
        {introView === 7 && (
          <GridItem
            colSpan={{ base: '12', lg: '10' }}
            rowSpan={{ base: '6', lg: '12' }}
            colStart={{ base: '1', lg: '3' }}
            rowStart={{ base: '1', lg: '1' }}
            border="4px solid rgb(184, 182, 182)"
            borderRadius="12px"
          >
            <CurrentRegionCell id={Number(introScene.currentRegionId)} />
          </GridItem>
        )}
      </Grid>
    </div>
  )
}
