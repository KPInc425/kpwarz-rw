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
  const leftPillStyling = {
    border: '1px solid grey',
    borderRadius: '12px 0 0 12px',
    padding: '0 10px',
    backgroundColor: 'red',
  }
  const rightPillStyling = {
    border: '1px solid grey',
    borderRadius: '0 12px 12px 0',
    padding: '0 10px',
    backgroundColor: 'white',
    color: 'red',
  }
  return (
    <div style={{ padding: '5px' }}>
      <Box>
        <Flex gap={4} wrap={'wrap'} justifyContent={'center'}>
          {/* <div>
            {'Character ID: '}
            <span style={rightPillStyling}>{characterStatus.id}
          </div> */}
          <div>
            <span style={leftPillStyling}>{'NAME'}</span>
            <span style={rightPillStyling}>
              {characterStatus.name.toUpperCase()}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'UPBRINGING'}</span>
            <span style={rightPillStyling}>
              {characterStatus.background.toUpperCase()}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'HEALTH'}</span>
            <span style={rightPillStyling}>
              {[characterStatus.health, '/', characterStatus.maxHealth]}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'STORAGE'}</span>
            <span style={rightPillStyling}>
              {characterStatus.storageType.toUpperCase()}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'ITEMS'}</span>
            <span style={rightPillStyling}>
              {[characterStatus.currentItems, '/', characterStatus.maxItems]}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'LUCK'}</span>
            <span style={rightPillStyling}>{characterStatus.luck}</span>
          </div>
          <div>
            <span style={leftPillStyling}>{'CITY'}</span>
            <span style={rightPillStyling}>
              {characterStatus.game.currentCity.name.toUpperCase()}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'DAY'}</span>
            <span style={rightPillStyling}>
              {[
                characterStatus.game.currentDay,
                '/',
                characterStatus.game.maxDays,
              ]}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'TIME'}</span>
            <span style={rightPillStyling}>
              {characterStatus.game.timeOfDay.toUpperCase()}
            </span>
          </div>
          <div>
            <span style={leftPillStyling}>{'CASH'}</span>
            <span style={rightPillStyling}>
              {'$' + characterStatus.finances.cashOnHand}
            </span>
          </div>
        </Flex>
      </Box>
    </div>
  )
}
