import type { FindAvailableRegionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableRegion from 'src/components/AvailableRegion/AvailableRegion'

export const QUERY = gql`
  query FindAvailableRegionById($id: Int!) {
    availableRegion: availableRegion(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AvailableRegion not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableRegion,
}: CellSuccessProps<FindAvailableRegionById>) => {
  return <AvailableRegion availableRegion={availableRegion} />
}
