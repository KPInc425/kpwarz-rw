import type { FindAvailableCities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableCities from 'src/components/AvailableCity/AvailableCities'

export const QUERY = gql`
  query FindAvailableCities {
    availableCities {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No availableCities yet. '}
      <Link to={routes.newAvailableCity()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableCities,
}: CellSuccessProps<FindAvailableCities>) => {
  return <AvailableCities availableCities={availableCities} />
}
