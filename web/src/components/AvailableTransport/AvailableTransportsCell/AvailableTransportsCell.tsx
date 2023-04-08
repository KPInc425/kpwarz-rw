import type { FindAvailableTransports } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableTransports from 'src/components/AvailableTransport/AvailableTransports'

export const QUERY = gql`
  query FindAvailableTransports {
    availableTransports {
      id
      name
      description
      speed
      price
      storage
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No availableTransports yet. '}
      <Link to={routes.newAvailableTransport()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableTransports,
}: CellSuccessProps<FindAvailableTransports>) => {
  return <AvailableTransports availableTransports={availableTransports} />
}
