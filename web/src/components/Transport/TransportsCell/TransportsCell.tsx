import type { FindTransports } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Transports from 'src/components/Transport/Transports'

export const QUERY = gql`
  query FindTransports {
    transports {
      id
      name
      description
      speed
      price
      storage
      characterId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No transports yet. '}
      <Link to={routes.newTransport()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ transports }: CellSuccessProps<FindTransports>) => {
  return <Transports transports={transports} />
}
