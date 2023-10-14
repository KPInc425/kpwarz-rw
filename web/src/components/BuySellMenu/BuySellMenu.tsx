import {
  Box,
  Button,
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
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { CgDollar } from 'react-icons/cg'
import { GiHandBag } from 'react-icons/gi'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import TransactionBuy from '../TransactionBuy/TransactionBuy'
import TransactionSell from '../TransactionSell/TransactionSell'

const BuySellMenu = ({ item, merchant, character }) => {
  return (
    <Stack>
      <Popover closeOnBlur={false}>
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Button>
                <Icon
                  as={CgDollar}
                  w="20px"
                  h="20px"
                  color={'green.400'}
                  mr={2}
                />
                <span>Buy</span>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                {/* <PopoverArrow /> */}
                <PopoverHeader>{item.name}</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <TransactionBuy
                    item={item}
                    character={character}
                    merchant={merchant}
                    onClose={onClose}
                  />
                </PopoverBody>
                <PopoverFooter>Lookin to Buy?</PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>

      <Popover closeOnBlur={true}>
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Button>
                <Icon
                  as={GiHandBag}
                  w="20px"
                  h="20px"
                  color={'red.400'}
                  mr={2}
                />
                <span>Sell</span>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                {/* <PopoverArrow /> */}
                <PopoverHeader>{item.name}</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <TransactionSell
                    item={item}
                    character={character}
                    merchant={merchant}
                    onClose={onClose}
                  />
                </PopoverBody>
                <PopoverFooter>Lookin to Sell?</PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </Stack>
  )
}

export default BuySellMenu
