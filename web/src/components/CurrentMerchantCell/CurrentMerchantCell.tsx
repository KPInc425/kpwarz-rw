import type {
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCurrentMerchantQuery($id: Int!) {
    currentMerchant: merchant(id: $id) {
      id
      name
      bio
      description
      location {
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
          game {
            id
            characterId
          }
        }
        services {
          id
          name
        }
      }
      currentItems
      maxItems
      temperament
      items {
        id
        name
        quantity
        price
        quality
        ability
        type
        uses
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
