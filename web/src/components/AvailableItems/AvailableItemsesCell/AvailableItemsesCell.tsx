import type { FindAvailableItemses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableItemses from 'src/components/AvailableItems/AvailableItemses'

export const QUERY = gql`
  query FindAvailableItemses {
    availableItemses {
      id
      name
      description
      type
      ability
      basePrice
      chance
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No availableItemses yet. '}
      <Link to={routes.newAvailableItems()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableItemses,
}: CellSuccessProps<FindAvailableItemses>) => {
  return <AvailableItemses availableItemses={availableItemses} />
}
