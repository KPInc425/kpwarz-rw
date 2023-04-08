import type { FindAvailableTransportById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableTransport from 'src/components/AvailableTransport/AvailableTransport'

export const QUERY = gql`
  query FindAvailableTransportById($id: Int!) {
    availableTransport: availableTransport(id: $id) {
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

export const Empty = () => <div>AvailableTransport not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableTransport,
}: CellSuccessProps<FindAvailableTransportById>) => {
  return <AvailableTransport availableTransport={availableTransport} />
}
