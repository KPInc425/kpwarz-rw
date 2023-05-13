import { Card, CardHeader, Flex, Text, Image, CardBody } from '@chakra-ui/react'
import type {
  FindPlayerInventoryQuery,
  FindPlayerInventoryQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
  const emptyItem = {
    id: 0,
    name: 'No Bag',
    description: 'Nothing to see here...Go buy some sh$%',
    imgURL: 'media/gameIcons/noBag.jpg',
    quantity: 0,
    quality: 0,
    ability: 0,
    type: 'empty',
    uses: 0,
    price: 0,
  }
  return (
    <div>
      {/* {JSON.stringify(playerInventory)} */}
      <Text fontSize={'3xl'}>{playerInventory.name}'s Inventory</Text>
      <Flex>
        {playerInventory.items.length > 0 ? (
          playerInventory.items.map((item) => {
            return (
              <ProductCard
                key={item.id}
                item={item}
                merchantId={playerInventory.game.currentCity.merchantId}
                playerId={playerInventory.id}
              />
            )
          })
        ) : (
          <ProductCard
            item={emptyItem}
            merchantId={playerInventory.game.currentCity.merchantId}
            playerId={playerInventory.id}
          />
        )}
      </Flex>
    </div>
  )
}

const ProductCard = ({ item, merchantId, playerId }) => {
  return (
    <Card
      key={item.id}
      variant={'outline'}
      direction={{ base: 'row', md: 'column' }}
      m={'0 auto'}
    >
      <CardHeader
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Text textAlign={'center'}>{item.name}</Text>
        <Image
          border={'5px solid grey'}
          minW={{ base: '75px', sm: '150px' }}
          m={'0 auto'}
          borderRadius={'full'}
          boxSize={{ base: '75px', sm: '150px' }}
          src={item.imgURL}
        />
      </CardHeader>
      <CardBody>
        <Text> {item.description}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Quality: {item.quality}</Text>
        <Text>Ability: {item.ability}</Text>
        <Text>Type: {item.type}</Text>
        <Text>Uses: {item.uses}</Text>
        {merchantId}
        {playerId}
      </CardBody>
      <Text>{merchantId}</Text>
      <Text>{playerId}</Text>
    </Card>
  )
}
