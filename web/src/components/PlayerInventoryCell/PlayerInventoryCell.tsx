import { Text } from '@chakra-ui/react'
import type {
  FindPlayerInventoryQuery,
  FindPlayerInventoryQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductCard from '../ProductCard/ProductCard'

export const QUERY = gql`
  query FindPlayerInventoryQuery($id: Int!) {
    playerInventory: getCharacterIntro(id: $id) {
      id
      name
      userId
      currentItems
      maxItems
      storageType
      items {
        id
        name
        description
        quantity
        quality
        ability
        type
        uses
      }
      game {
        currentCity {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPlayerInventoryQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  playerInventory,
}: CellSuccessProps<
  FindPlayerInventoryQuery,
  FindPlayerInventoryQueryVariables
>) => {
  return (
    <div>
      {/* {JSON.stringify(playerInventory)} */}
      <Text fontSize={'3xl'}>{playerInventory.name}'s Inventory</Text>
      {playerInventory.items.length > 0 ? (
        playerInventory.items.map((item) => {
          return <ProductCard key={item.id} props={item} />
        })
      ) : (
        <ProductCard
          props={{
            name: 'No bag',
            description: 'Nothing to see here...Go buy some sh$%',
            quantity: 0,
            price: 0,
            quality: 0,
            ability: 0,
            type: 'empty',
            uses: 0,
          }}
        />
      )}
    </div>
  )
}
