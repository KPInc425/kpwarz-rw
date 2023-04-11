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
} from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import type {
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductCard from '../ProductCard/ProductCard'
import StatCard from '../StatCard/StatCard'

export const QUERY = gql`
  query FindCharacterIntroQuery($id: Int!) {
    characterIntro: character(id: $id) {
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
      game {
        name
        description
        startLocation
        currentCity
        maxDays
        currentDay
        timeOfDay
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCharacterIntroQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  characterIntro,
}: CellSuccessProps<
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables
>) => {
  return (
    <div>
      <Box>
        <Badge m={4} p={4} borderRadius={'12px'}>
          <Text fontSize="4xl">Starting Info</Text>
        </Badge>
        <SimpleGrid columns={5} spacing={4} p={4}>
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
            statTitle={'Starting City'}
            statData={characterIntro.game.currentCity}
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
        </SimpleGrid>
      </Box>
    </div>
  )
}
