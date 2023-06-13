import type {
  FindPlayerInventoryQuery,
  FindPlayerInventoryQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Inventory from '../Inventory/Inventory'

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
        imgURL
        quantity
        quality
        ability
        type
        uses
        price
      }
      game {
        characterId
        currentCity {
          id
          name
          merchantId
          merchant {
            id
            name
            items {
              id
              name
              quantity
            }
          }
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
  // console.log('playerInventory', playerInventory)
  return (
    <Inventory
      mainInventory={playerInventory.items}
      secondaryInventory={playerInventory.game.currentCity.merchant.items}
      owner={playerInventory.name}
      characterId={playerInventory.id}
      merchantId={playerInventory.game.currentCity.merchantId}
      isShop={false}
    />
  )
}
