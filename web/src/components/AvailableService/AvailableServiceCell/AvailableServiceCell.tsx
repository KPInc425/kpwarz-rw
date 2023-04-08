import type { FindAvailableServiceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableService from 'src/components/AvailableService/AvailableService'

export const QUERY = gql`
  query FindAvailableServiceById($id: Int!) {
    availableService: availableService(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AvailableService not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableService,
}: CellSuccessProps<FindAvailableServiceById>) => {
  return <AvailableService availableService={availableService} />
}
