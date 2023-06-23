import {
  Flex,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  Box,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react'
import { CgDollar } from 'react-icons/cg'
import { GiHandBag } from 'react-icons/gi'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import { sortByName } from 'src/lib/sortById'

import BuySellMenu from '../BuySellMenu/BuySellMenu'
import ProductCard from '../ProductCard/ProductCard'
import TransactionBuy from '../TransactionBuy/TransactionBuy'
import TransactionSell from '../TransactionSell/TransactionSell'

const Inventory = ({
  mainInventory,
  secondaryInventory,
  owner,
  characterId,
  merchantId,
  isShop,
}) => {
  console.log('inventory', mainInventory)
  const sortedInventory = [...mainInventory].sort(sortByName)
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

  const findItemQuantity = (secondInventoryItem) => {
    if (secondInventoryItem) {
      return secondInventoryItem.quantity
    } else {
      return 0
    }
  }

  return (
    <Flex direction={'column'} alignItems={'center'}>
      {/* {JSON.stringify(inventory)} */}
      <Text fontSize={'3xl'}>{owner}'s Inventory</Text>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <TableCaption>
            <Text as={'cite'}>"Every day I'm hustlin'..." - A Comedian</Text>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Price</Th>
              <Th>For Sale</Th>
              <Th>Owned</Th>
              <Th>Ability</Th>
              <Th>Uses</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedInventory.length > 0 &&
              sortedInventory.map((item) => {
                return (
                  <Tr>
                    <Td>{item.name}</Td>
                    <Td>
                      <Image
                        boxSize={'100px'}
                        borderRadius={'25%'}
                        src={item.imgURL}
                      />
                    </Td>
                    <Td> {item.description}</Td>
                    <Td>{item.type}</Td>
                    <Td>{`$${item.price}/Unit`}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>
                      {findItemQuantity(
                        secondaryInventory.find(
                          (secondaryItem) => secondaryItem.name === item.name
                        )
                      )}
                    </Td>
                    <Td>{item.ability}</Td>
                    <Td>{item.uses}</Td>
                    <Td>
                      {isShop && (
                        <BuySellMenu
                          item={item}
                          merchantId={merchantId}
                          characterId={characterId}
                        />
                      )}
                    </Td>
                  </Tr>
                )
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Ability</Th>
              <Th>Uses</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      {mainInventory.length <= 0 && (
        <>
          {/* <ProductCard
              item={emptyItem}
              merchantId={merchantId}
              characterId={characterId}
            /> */}
          <TableContainer>
            <Table variant="simple" colorScheme="teal">
              <TableCaption>
                <Text as={'cite'}>
                  Empty cup is half full...or something like that - Some Wise
                  Guy
                </Text>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Image</Th>
                  <Th>Description</Th>
                  <Th>Type</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Ability</Th>
                  <Th>Uses</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{emptyItem.name}</Td>
                  <Td>
                    <Image
                      boxSize={'100px'}
                      borderRadius={'25%'}
                      src={emptyItem.imgURL}
                    />
                  </Td>
                  <Td> {emptyItem.description}</Td>
                  <Td>{emptyItem.type}</Td>
                  <Td>{emptyItem.price}</Td>
                  <Td>{emptyItem.quantity}</Td>
                  <Td>{emptyItem.ability}</Td>
                  <Td>{emptyItem.uses}</Td>
                  <Td>
                    {isShop && (
                      <BuySellMenu
                        item={item}
                        merchantId={merchantId}
                        characterId={characterId}
                      />
                    )}
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Name</Th>
                  <Th>Image</Th>
                  <Th>Description</Th>
                  <Th>Type</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Ability</Th>
                  <Th>Uses</Th>
                  <Th>Actions</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      )}
    </Flex>
  )
}

export default Inventory
