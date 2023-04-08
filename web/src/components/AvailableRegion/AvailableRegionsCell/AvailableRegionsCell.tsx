import type { FindAvailableRegions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableRegions from 'src/components/AvailableRegion/AvailableRegions'

export const QUERY = gql`
  query FindAvailableRegions {
    availableRegions {
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
      {'No availableRegions yet. '}
      <Link to={routes.newAvailableRegion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableRegions,
}: CellSuccessProps<FindAvailableRegions>) => {
  return <AvailableRegions availableRegions={availableRegions} />
}
