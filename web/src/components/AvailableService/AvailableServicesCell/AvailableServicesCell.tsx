import type { FindAvailableServices } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableServices from 'src/components/AvailableService/AvailableServices'

export const QUERY = gql`
  query FindAvailableServices {
    availableServices {
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
      {'No availableServices yet. '}
      <Link to={routes.newAvailableService()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableServices,
}: CellSuccessProps<FindAvailableServices>) => {
  return <AvailableServices availableServices={availableServices} />
}
