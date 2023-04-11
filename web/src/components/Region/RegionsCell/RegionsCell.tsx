import type { FindRegions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Regions from 'src/components/Region/Regions'

export const QUERY = gql`
  query FindRegions {
    regions {
      id
      name
      description
      control
      gameId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No regions yet. '}
      <Link to={routes.newRegion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ regions }: CellSuccessProps<FindRegions>) => {
  return <Regions regions={regions} />
}
