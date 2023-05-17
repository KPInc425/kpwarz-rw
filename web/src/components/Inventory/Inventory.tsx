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
    <Flex justify={'center'} direction={'column'}>
      <Text fontSize={'3xl'}>{owner}'s Inventory</Text>
      <Box maxH={'40vh'} overflow={'auto'}>
        <Flex
          gap={2}
          direction={{ base: 'column', sm: 'column' }}
          sx={{ justifyContent: 'center' }}
        >
          {mainInventory.length > 0 ? (
            mainInventory.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                  secondaryItem={
                    secondaryInventory.find(
                      (secondaryItem) => secondaryItem.name === item.name
                    ) || emptyItem
                  }
                  merchantId={merchantId}
                  characterId={characterId}
                />
              )
            })
          ) : (
            <ProductCard
              item={emptyItem}
              merchantId={merchantId}
              secondaryItem={emptyItem}
              characterId={characterId}
            />
          )}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Inventory
