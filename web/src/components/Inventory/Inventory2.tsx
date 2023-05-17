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

import ProductCard from '../ProductCard/ProductCard'
import TransactionBuy from '../TransactionBuy/TransactionBuy'
import TransactionSell from '../TransactionSell/TransactionSell'

const Inventory = ({ inventory, owner, characterId, merchantId }) => {
  console.log('inventory', inventory)
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
    <Flex direction={'column'} alignItems={'center'}>
      {/* {JSON.stringify(inventory)} */}
      <Text fontSize={'3xl'}>{owner}'s Inventory</Text>
    <TableContainer key={item.id}>
      <Table variant="simple" colorScheme="teal">
        <TableCaption>
          <Text as={'cite'}>
            "Every day I'm hustlin'..." - A Comedian
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
      {inventory.length > 0 ? (
        inventory.map((item) => {
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
              <Td>{item.price}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.ability}</Td>
              <Td>{item.uses}</Td>
              <Td>
                <Menu>
                  <MenuButton
                    w="38px"
                    h="38px"
                    align="center"
                    justify="center"
                    borderRadius="12px"
                    pt="5px"
                    bg="gray.100"
                    _dark={{ bg: 'whiteAlpha.200' }}
                  >
                    <Icon
                      w="24px"
                      h="24px"
                      as={IoEllipsisHorizontalSharp}
                      color="brand.200"
                      _dark={{ color: 'white' }}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Popover closeOnBlur={false}>
                        <PopoverTrigger>
                          <Box>
                            <Icon
                              as={CgDollar}
                              w="20px"
                              h="20px"
                              color={'green.400'}
                              mr={2}
                            />
                            <span>Buy</span>
                          </Box>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            {/* <PopoverArrow /> */}
                            <PopoverHeader>{item.name}</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                              <TransactionBuy
                                item={item}
                                characterId={characterId}
                                merchantId={merchantId}
                              />
                            </PopoverBody>
                            <PopoverFooter>Lookin to Buy?</PopoverFooter>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </MenuItem>
                    <MenuItem>
                      <Popover closeOnBlur={false}>
                        <PopoverTrigger>
                          <Box>
                            <Icon
                              as={GiHandBag}
                              w="20px"
                              h="20px"
                              color={'red.400'}
                              mr={2}
                            />
                            <span>Sell</span>
                          </Box>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            {/* <PopoverArrow /> */}
                            <PopoverHeader>{item.name}</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                              <TransactionSell
                                item={item}
                                characterId={characterId}
                                merchantId={merchantId}
                              />
                            </PopoverBody>
                            <PopoverFooter>Lookin to Sell?</PopoverFooter>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          )
        }
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
        )
      ) : (
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
                    <Menu>
                      <MenuButton
                        w="38px"
                        h="38px"
                        align="center"
                        justify="center"
                        borderRadius="12px"
                        pt="5px"
                        bg="gray.100"
                        _dark={{ bg: 'whiteAlpha.200' }}
                      >
                        <Icon
                          w="24px"
                          h="24px"
                          as={IoEllipsisHorizontalSharp}
                          color="brand.200"
                          _dark={{ color: 'white' }}
                        />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Popover closeOnBlur={false}>
                            <PopoverTrigger>
                              <Box>
                                <Icon
                                  as={CgDollar}
                                  w="20px"
                                  h="20px"
                                  color={'green.400'}
                                  mr={2}
                                />
                                <span>Buy</span>
                              </Box>
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent>
                                {/* <PopoverArrow /> */}
                                <PopoverBody>
                                  <PopoverCloseButton />
                                  You Don't even know what you want to buy...
                                </PopoverBody>
                              </PopoverContent>
                            </Portal>
                          </Popover>
                        </MenuItem>
                        <MenuItem>
                          <Popover closeOnBlur={false}>
                            <PopoverTrigger>
                              <Box>
                                <Icon
                                  as={GiHandBag}
                                  w="20px"
                                  h="20px"
                                  color={'red.400'}
                                  mr={2}
                                />
                                <span>Sell</span>
                              </Box>
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverBody>
                                  You ain't got nothing to sell...
                                </PopoverBody>
                              </PopoverContent>
                            </Portal>
                          </Popover>
                        </MenuItem>
                      </MenuList>
                    </Menu>
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
