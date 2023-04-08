import type { FindAvailableCityById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AvailableCity from 'src/components/AvailableCity/AvailableCity'

export const QUERY = gql`
  query FindAvailableCityById($id: Int!) {
    availableCity: availableCity(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AvailableCity not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableCity,
}: CellSuccessProps<FindAvailableCityById>) => {
  return <AvailableCity availableCity={availableCity} />
}
