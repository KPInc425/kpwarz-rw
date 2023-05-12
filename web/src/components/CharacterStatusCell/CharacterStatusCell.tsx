import { Box, Flex } from '@chakra-ui/react'
import type {
  FindCharacterStatusQuery,
  FindCharacterStatusQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCharacterStatusQuery($id: Int!) {
    characterStatus: getCharacterIntro(id: $id) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCharacterStatusQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  characterStatus,
}: CellSuccessProps<
  FindCharacterStatusQuery,
  FindCharacterStatusQueryVariables
>) => {
  return (
    <div>
      <Box>
        <Flex gap={4} wrap={'wrap'} justifyContent={'center'}>
          {/* <div>
            {'Character ID: '}
            {characterStatus.id}
          </div> */}
          <div>
            {'Name: '}
            {characterStatus.name}
          </div>
          <div>
            {'Upbringing: '}
            {characterStatus.background}
          </div>
          <div>
            {'Health: '}
            {[characterStatus.health, '/', characterStatus.maxHealth]}
          </div>
          <div>
            {'Storage Type: '}
            {characterStatus.storageType}
          </div>
          <div>
            {'Items Held: '}
            {[characterStatus.currentItems, '/', characterStatus.maxItems]}
          </div>
          <div>
            {'Luck: '}
            {characterStatus.luck}
          </div>
          <div>
            {'Current City: '}
            {characterStatus.game.currentCity.name}
          </div>
          <div>
            {'Day Count: '}
            {[
              characterStatus.game.currentDay,
              '/',
              characterStatus.game.maxDays,
            ]}
          </div>
          <div>
            {'Time of Day: '}
            {characterStatus.game.timeOfDay}
          </div>
          <div>
            {'Cash On Hand: $'}
            {characterStatus.finances.cashOnHand}
          </div>
        </Flex>
      </Box>
    </div>
  )
}
