import type { FindAvailableItemsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableItems from 'src/components/AvailableItems/AvailableItems'

export const QUERY = gql`
  query FindAvailableItemsById($id: Int!) {
    availableItems: availableItems(id: $id) {
      id
      name
      description
      type
      ability
      basePrice
      chance
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AvailableItems not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableItems,
}: CellSuccessProps<FindAvailableItemsById>) => {
  return <AvailableItems availableItems={availableItems} />
}
