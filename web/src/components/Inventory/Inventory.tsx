import { Flex, Text, Box } from '@chakra-ui/react'

import ProductCard from '../ProductCard/ProductCard'

const Inventory = ({
  mainInventory,
  secondaryInventory,
  owner,
  characterId,
  merchantId,
}) => {
  console.log('mainInventory', mainInventory)
  console.log('secondary', secondaryInventory)
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
    <Box>
      <Text fontSize={'3xl'}>{owner}'s Inventory</Text>
      <Flex direction={{ base: 'column', sm: 'row' }} alignItems={'center'}>
        {/* {JSON.stringify(inventory)} */}

        {mainInventory.length > 0 ? (
          mainInventory.map((item) => {
            return (
              <>
                <ProductCard
                  key={item.id}
                  item={item}
                  secondaryItem={secondaryInventory.find(
                    (secondaryItem) => secondaryItem.name === item.name
                  )}
                  merchantId={merchantId}
                  characterId={characterId}
                />
              </>
            )
          })
        ) : (
          <>
            <ProductCard
              item={emptyItem}
              merchantId={merchantId}
              secondaryItem={emptyItem}
              characterId={characterId}
            />
          </>
        )}
      </Flex>
    </Box>
  )
}

export default Inventory
