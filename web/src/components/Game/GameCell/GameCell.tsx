import type { FindGameById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Game from 'src/components/Game/Game'

export const QUERY = gql`
  query FindGameById($id: Int!) {
    game: game(id: $id) {
      id
      name
      description
      startLocation
      currentRegionId
      currentCity
      maxDays
      currentDay
      timeOfDay
      characterId
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Game not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ game }: CellSuccessProps<FindGameById>) => {
  return <Game game={game} />
}
