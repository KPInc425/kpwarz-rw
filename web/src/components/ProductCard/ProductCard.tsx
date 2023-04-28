// @src/components/Product.js
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  useColorModeValue,
  DarkMode,
  MenuButton,
  Menu,
  IconButton,
  MenuList,
  MenuItem,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Portal,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react'
// Assets

import { CgDollar } from 'react-icons/cg'
import { GiHandBag } from 'react-icons/gi'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import TransactionBuy from '../TransactionBuy/TransactionBuy'

const ProductCard = ({
  item,
  // icon,
  characterId,
}) => {
  return (
    <DarkMode>
      <Flex
        borderRadius="20px"
        bg="white"
        _dark={{ bg: '#111c44' }}
        h="300px"
        w={{ base: '200px', md: '200px' }}
        direction="column"
      >
        <Box p="20px">
          <Flex w="100%" mb="10px">
            <Image
              src="https://i.imgur.com/cCNYIXA.png"
              boxSize="75px"
              me="auto"
            />
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
                          />
                        </PopoverBody>
                        <PopoverFooter>Lookin to Buy?</PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </MenuItem>
                <MenuItem onClick={() => alert('Trying to Sell something?')}>
                  <Icon
                    as={GiHandBag}
                    w="20px"
                    h="20px"
                    color={'red.400'}
                    mr={2}
                  />
                  <span>Sell</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Box>
            <Text
              fontWeight="600"
              color="gray.800"
              _dark={{ color: 'white' }}
              w="100%"
              fontSize="2xl"
            >
              {item.name}
            </Text>
          </Box>
        </Box>
        <Flex
          bg="gray.50"
          _dark={{ bg: 'whiteAlpha.100' }}
          w="100%"
          p="20px"
          borderBottomLeftRadius="inherit"
          borderBottomRightRadius="inherit"
          height="100%"
          direction="column"
        >
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            {item.description}
          </Text>
          <Flex alignItems={'center'}>
            <Icon as={CgDollar} w="20px" h="20px" color={'green.400'} />
            <Text
              fontSize="sm"
              color="gray.500"
              lineHeight="22px"
              pe="40px"
              fontWeight="500"
              mb="auto"
            >
              {item.price}
            </Text>
            <Icon as={GiHandBag} w="20px" h="20px" color={'blue.400'} me={1} />
            <Text
              fontSize="sm"
              color="gray.500"
              lineHeight="24px"
              pe="40px"
              fontWeight="500"
              mb="auto"
            >
              {item.quantity}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DarkMode>
  )
}

export default ProductCard
