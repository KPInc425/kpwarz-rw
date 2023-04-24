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
      {/* {JSON.stringify(characterIntro)} */}
      <Grid
        h="100vh"
        templateColumns="repeat(12, minmax(0, 1fr))"
        templateRows="repeat(12, minmax(0, 1fr))"
        gap={4}
      >
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '2', md: '3', lg: '4' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          MugShot (Coming Soon)
          <p>{characterIntro.description}</p>
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6' }}
          rowSpan={{ base: '2', md: '3', lg: '6' }}
          colStart={{ base: '1', md: '7', lg: '4' }}
          rowStart={{ base: '3', md: '1', lg: '1' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Chatacter Backstory: Inspired by Bio (Coming Soon)
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '3' }}
          rowSpan={{ base: '1', lg: '2' }}
          rowStart={{ base: '5', md: '6', lg: '5' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Buffs/Debuffs (Coming Soon)
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '9' }}
          rowSpan={{ base: '2', lg: '3' }}
          rowStart={{ base: '6', md: '4', lg: '7' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          <Box>
            <legend>
              <Text fontSize="4xl">Starting Info</Text>
            </legend>
            <Stack
              direction="row"
              alignItems={'center'}
              spacing={4}
              wrap={'wrap'}
            >
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
                <p>{characterIntro.game.currentCity.name}</p>
              </Box>
              <Box>
                <Badge>Day Count</Badge>
                <p>
                  {characterIntro.game.currentDay} /{' '}
                  {characterIntro.game.maxDays}
                </p>
              </Box>
              <Box>
                <Badge>Time of Day</Badge>
                <p>{characterIntro.game.timeOfDay}</p>
              </Box>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: '12', lg: '9' }}
          rowSpan={{ base: '1', md: 2, lg: '3' }}
          rowStart={{ base: '8', md: '7' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          <h1>Current Plot Point (Coming Soon)</h1>
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '3', md: '6', lg: '6' }}
          rowStart={{ base: '10', md: '9', lg: '1' }}
          colStart={{ base: '1', md: '7', lg: '10' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          Starting Locations
        </GridItem>
        <GridItem
          colSpan={{ base: '12', md: '6', lg: '3' }}
          rowSpan={{ base: '1', md: '6', lg: '6' }}
          rowStart={{ base: '9', md: '9', lg: '7' }}
          colStart={{ base: '1', md: '1', lg: '10' }}
          border="4px solid rgb(184, 182, 182)"
          borderRadius="12px"
        >
          First News (Coming Soon)
        </GridItem>
      </Grid>
    </div>
  )
}
