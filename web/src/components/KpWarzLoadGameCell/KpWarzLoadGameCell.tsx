import { Button, Flex, Text } from '@chakra-ui/react'
import type {
  FindKPWarzLoadGameQuery,
  FindKPWarzLoadGameQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
      <Text fontSize={'6xl'} textAlign={'center'}>
        Choose a game to load
      </Text>
      <Flex wrap={'wrap'}>
        {KPWarzLoadGame.map((game) => {
          return (
            <div key={game.id}>
              <div>{game.name}</div>
              <div>{game.description}</div>
              <div>{game.startLocation}</div>
              <div>{game.currentDay}</div>
              <div>{game.maxDays}</div>
              <div>{game.timeOfDay}</div>
              {/* <div>{game.regions}</div> */}
              <div>{JSON.stringify(game.currentCity)}</div>
              <div>{JSON.stringify(game.character)}</div>
              <div>{game.createdAt}</div>
              <Button onClick={() => handleClick(game.id)}>Load</Button>
            </div>
          )
        })}
        {/* {JSON.stringify(KPWarzLoadGame)} */}
      </Flex>
    </>
  )
}
