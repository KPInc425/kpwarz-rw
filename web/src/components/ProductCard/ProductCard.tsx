// @src/components/Product.js
// Chakra imports
import { Image, Text, Card, CardHeader, CardBody } from '@chakra-ui/react'
// Assets

import BuySellMenu from '../BuySellMenu/BuySellMenu'

const ProductCard = ({ item, secondaryItem, merchantId, characterId }) => {
  return (
    <Card
      key={item.id}
      variant={'outline'}
      minW={{ base: '100%', md: '300px' }}
      // w={{ base: '100%', md: '300px' }}
      direction={{ base: 'row', md: 'column' }}
      // m={'0 auto'}
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
          minW={{ base: '75px', md: '150px' }}
          m={'0 auto'}
          borderRadius={'full'}
          boxSize={{ base: '75px', sm: '150px' }}
          src={item.imgURL}
        />
        <BuySellMenu
          item={item}
          merchantId={merchantId}
          characterId={characterId}
        />
      </CardHeader>
      <CardBody>
        <Text>{item.description}</Text>
        <Text>Owned: {item.quantity}</Text>
        <Text>For Sale: {secondaryItem.quantity}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Quality: {item.quality}</Text>
        <Text>Ability: {item.ability}</Text>
        <Text>Type: {item.type}</Text>
        <Text>Uses: {item.uses}</Text>
      </CardBody>
      <Text>{merchantId}</Text>
      <Text>{characterId}</Text>
    </Card>
  )
}

export default ProductCard
