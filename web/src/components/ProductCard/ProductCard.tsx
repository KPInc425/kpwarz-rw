// @src/components/Product.js
// Chakra imports
import {
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from '@chakra-ui/react'
// Assets

import BuySellMenu from '../BuySellMenu/BuySellMenu'

const ProductCard = ({ item, secondaryItem, merchantId, characterId }) => {
  return (
    <Card
      key={item.id}
      variant={'outline'}
      // minW={{ base: '100%', md: '300px' }}
      // w={{ base: '100%', md: '300px' }}
      direction={{ base: 'row' }}
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
          // minW={{ base: '75px', md: '150px' }}
          m={'0 auto'}
          borderRadius={'full'}
          boxSize={{ base: '75px' }}
          src={item.imgURL}
        />
      </CardHeader>
      <CardBody>
        <Text>{item.description}</Text>
        <SimpleGrid columns={2} spacing={1}>
          <Text>Owned: {item.quantity}</Text>
          <Text>Available: {secondaryItem.quantity}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Quality: {item.quality}</Text>
          <Text>Ability: {item.ability}</Text>
          <Text>Type: {item.type}</Text>
          <Text>Uses: {item.uses}</Text>
        </SimpleGrid>
      </CardBody>
      <CardFooter>
        <BuySellMenu
          item={item}
          merchantId={merchantId}
          characterId={characterId}
        />
      </CardFooter>
    </Card>
  )
}

export default ProductCard
