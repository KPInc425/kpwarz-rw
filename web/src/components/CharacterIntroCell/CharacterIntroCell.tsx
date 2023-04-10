import {
  Box,
  Grid,
  GridItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import type {
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
        <Text fontSize="4xl">Starting Info</Text>
        <Stack direction="row" alignItems={'center'} spacing={4} wrap={'wrap'}>
          <Stat>
            <StatLabel>
              <Badge>Name</Badge>
            </StatLabel>
            <StatNumber>{characterIntro.name}</StatNumber>
          </Stat>
          <Box>
            <Badge>Upbringing</Badge>
            <p>{characterIntro.background}</p>
          </Box>
          <Box>
            <Badge>Health</Badge>
            <p>
              {characterIntro.health} / {characterIntro.maxHealth}
            </p>
          </Box>
          <Box>
            <Badge>Storage Type</Badge>
            <p>{characterIntro.storageType}</p>
          </Box>
          <Box>
            <Badge>Items Held</Badge>
            <p>
              {characterIntro.currentItems} / {characterIntro.maxItems}
            </p>
          </Box>
          <Box>
            <Badge>Luck</Badge>
            <p>{characterIntro.luck}</p>
          </Box>
          <Box>
            <Badge>Starting City</Badge>
            <p>{characterIntro.game.currentCity}</p>
          </Box>
          <Box>
            <Badge>Day Count</Badge>
            <p>
              {characterIntro.game.currentDay} / {characterIntro.game.maxDays}
            </p>
          </Box>
          <Box>
            <Badge>Time of Day</Badge>
            <p>{characterIntro.game.timeOfDay}</p>
          </Box>
        </Stack>
      </Box>
    </div>
  )
}
