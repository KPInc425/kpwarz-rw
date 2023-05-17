import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react'
import { CgDollar } from 'react-icons/cg'
import { GiHandBag } from 'react-icons/gi'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import TransactionBuy from '../TransactionBuy/TransactionBuy'
import TransactionSell from '../TransactionSell/TransactionSell'

const BuySellMenu = ({ item, merchantId, characterId }) => {
  return (
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
  )
}

export default BuySellMenu
