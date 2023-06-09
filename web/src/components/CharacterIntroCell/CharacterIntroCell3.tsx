import {
  Box,
  Grid,
  GridItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Badge,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import type {
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StatCard from '../StatCard/StatCard'

export const QUERY = gql`
  query FindCharacterIntroQuery($id: Int!) {
    characterIntro: getCharacterIntro(id: $id) {
      id
      name
      bio
      background
      description
      userId
      health
      maxHealth
      currentItems
      maxItems
      luck
      storageType
      createdAt
      finances {
        id
        cashOnHand
        bankAccount
        debt
      }
      game {
        name
        description
        startLocation
        currentCity {
          id
          name
        }
        currentRegionId
        maxDays
        currentDay
        timeOfDay
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindCharacterIntroQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  characterIntro,
  reRender,

  queryResult: { refetch },
}: CellSuccessProps<
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables
>) => {
  if (reRender === true) {
    refetch()
  }

  return (
    <div>
      <Box>
        <Flex gap={4} wrap={'wrap'} justifyContent={'center'}>
          {/* {characterIntro.id} */}
          <StatCard
            statTitle={'Name'}
            statData={characterIntro.name}
            statInfo={"It's the name you were born with."}
          />
          <StatCard
            statTitle={'Upbringing'}
            statData={characterIntro.background}
            statInfo={'How did you grow up?'}
          />
          <StatCard
            statTitle={'Health'}
            statData={[characterIntro.health, '/', characterIntro.maxHealth]}
            statInfo={"Can't be losing too much of this."}
          />
          <StatCard
            statTitle={'Storage Type'}
            statData={characterIntro.storageType}
            statInfo={'How are you gonna hold it?'}
          />
          <StatCard
            statTitle={'Items Held'}
            statData={[
              characterIntro.currentItems,
              '/',
              characterIntro.maxItems,
            ]}
            statInfo={'What you got on ya?'}
          />
          <StatCard
            statTitle={'Luck'}
            statData={characterIntro.luck}
            statInfo={'Are ya feeling lucky? Huh?'}
          />
          <StatCard
            statTitle={'Current City'}
            statData={characterIntro.game.currentCity.name}
            statInfo={'Where you startin?'}
          />
          <StatCard
            statTitle={'Day Count'}
            statData={[
              characterIntro.game.currentDay,
              '/',
              characterIntro.game.maxDays,
            ]}
            statInfo={'Where you startin?'}
          />
          <StatCard
            statTitle={'Time of Day'}
            statData={characterIntro.game.timeOfDay}
            statInfo={'Do you know what time it is?'}
          />
          <StatCard
            statTitle={'Cash On Hand'}
            statData={characterIntro.finances.cashOnHand}
            statInfo={'Empty your pockets!'}
          />
        </Flex>
      </Box>
    </div>
  )
}
