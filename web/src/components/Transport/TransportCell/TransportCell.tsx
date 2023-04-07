import type { FindTransportById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Transport from 'src/components/Transport/Transport'

export const QUERY = gql`
  query FindTransportById($id: Int!) {
    transport: transport(id: $id) {
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

export const Empty = () => <div>Transport not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ transport }: CellSuccessProps<FindTransportById>) => {
  return <Transport transport={transport} />
}
