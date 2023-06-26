import {
  AbsoluteCenter,
  Button,
  ButtonGroup,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Show,
  Wrap,
  WrapItem,
  useColorMode,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const GameMenu = ({ updateCurrentView }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const gameViews = [
    'Player Info',
    'Inventory',
    'Actions',
    'Trader',
    'Travel',
    'Stores',
    'Finances',
    'Dark Web',
    'Black Market',
  ]
  console.log('gameViews: ', gameViews)
  return (
    <div>
      <Center>
        <Show above="md">
          <ButtonGroup
            variant="outline"
            spacing="2"
            justifyContent={'center'}
            py={2}
          >
            <Wrap justify={'center'}>
              {gameViews.map((view, index) => (
                <WrapItem key={index}>
                  <Button
                    colorScheme="green"
                    onClick={() => updateCurrentView(index)}
                  >
                    {view}
                  </Button>
                </WrapItem>
              ))}
              <WrapItem>
                <Button colorScheme="red">
                  <Link to={routes.home()}>Quit Game</Link>
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="blue" onClick={toggleColorMode}>
                  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
              </WrapItem>
            </Wrap>
          </ButtonGroup>
        </Show>
        <Show below="md">
          <Menu placement="bottom">
            <MenuButton
              as={Button}
              w={'95%'}
              variant={'outline'}
              colorScheme="green"
            >
              Menu
            </MenuButton>
            <Center>
              <Portal>
                <MenuList w={'90vw'}>
                  {gameViews.map((view, index) => (
                    <MenuItem key={index} justifyContent={'center'}>
                      <Button
                        w={'100%'}
                        variant={'outline'}
                        _hover={{ bg: 'purple.400' }}
                        colorScheme="green"
                        onClick={() => updateCurrentView(index)}
                      >
                        {view}
                      </Button>
                    </MenuItem>
                  ))}
                  <MenuItem justifyContent={'center'}>
                    <Button colorScheme="red" w={'100%'}>
                      <Link to={routes.home()}>Quit Game</Link>
                    </Button>
                  </MenuItem>
                  <MenuItem justifyContent={'center'} closeOnSelect={false}>
                    <Button
                      colorScheme="blue"
                      onClick={toggleColorMode}
                      w={'100%'}
                    >
                      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Center>
          </Menu>
        </Show>
      </Center>
    </div>
  )
}

export default GameMenu
