import type {
  FindPlayerCharacterQuery,
  FindPlayerCharacterQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPlayerCharacterQuery($id: Int!) {
    playerCharacter: character(id: $id) {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindPlayerCharacterQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  playerCharacter,
}: CellSuccessProps<
  FindPlayerCharacterQuery,
  FindPlayerCharacterQueryVariables
>) => {
  return <div>{JSON.stringify(playerCharacter)}</div>
}
