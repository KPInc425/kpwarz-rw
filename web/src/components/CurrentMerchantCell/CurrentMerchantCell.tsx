import type {
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCurrentMerchantQuery($id: Int!) {
    currentMerchant: city(id: $id) {
      id
      name
      description
      avgQuality
      avgPrice
      minQuantity
      maxQuantity
      localBoss
      authorityPresence
      region {
        id
      }
      merchant {
        id
        name
        bio
        description
        currentItems
        maxItems
        items {
          id
          name
          description
          price
          quality
          quantity
          type
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCurrentMerchantQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  currentMerchant,
}: CellSuccessProps<
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables
>) => {
  return <div>{JSON.stringify(currentMerchant)}</div>
}
