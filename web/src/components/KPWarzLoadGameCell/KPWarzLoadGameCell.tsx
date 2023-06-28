import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import type {
  FindKPWarzLoadGameQuery,
  FindKPWarzLoadGameQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LoadGameCard from '../LoadGameCard/LoadGameCard'

export const QUERY = gql`
  query FindKPWarzLoadGameQuery {
    KPWarzLoadGame: getGamesToLoad {
      id
      name
      description
      startLocation
      currentDay
      maxDays
      timeOfDay
      regions {
        name
      }
      currentCity {
        name
      }
      character {
        name
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindKPWarzLoadGameQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  KPWarzLoadGame,
}: CellSuccessProps<
  FindKPWarzLoadGameQuery,
  FindKPWarzLoadGameQueryVariables
>) => {
  const handleClick = (gameId) => {
    console.log('clicked')
    navigate(routes.kpwarzGame({ id: gameId }))
  }
  return (
    <>
      <Container
        maxW={'container.md'}
        border={'2px outset rgba(0,0,0,0.25)'}
        my={4}
        borderRadius={'1rem'}
        boxShadow={'2xl'}
      >
        <Text
          fontSize={'6xl'}
          textAlign={'center'}
          sx={{ textWrap: 'balance' }}
        >
          Choose a Game to Load
        </Text>
      </Container>
      <Flex wrap={'wrap'} gap={4} justify={'center'}>
        {KPWarzLoadGame.map((game) => {
          return <LoadGameCard key={game.id} game={game} />
        })}
        {/* {JSON.stringify(KPWarzLoadGame)} */}
      </Flex>
    </>
  )
}
