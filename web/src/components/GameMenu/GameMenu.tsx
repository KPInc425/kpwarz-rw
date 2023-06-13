import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const GameMenu = ({ updateCurrentView }) => {
  return (
    <div>
      {/* <h2 className="text-center text-2xl font-bold">Menu</h2> */}
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'center'}
      >
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={0}
          label={'Player Info'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={1}
          label={'Inventory'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={2}
          label={'Actions'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={3}
          label={'Trader'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={4}
          label={'Travel'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={5}
          label={'Stores'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={6}
          label={'Finances'}
        />
        {/* Make this conditional on if the player has the Dark Web perk */}
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={7}
          label={'Dark Web'}
        />
        <MenuButton
          onClick={updateCurrentView}
          viewIndex={8}
          label={'Black Market'}
        />
      </Stack>
    </div>
  )
}

export default GameMenu

const MenuButton = ({ label, onClick, viewIndex }) => {
  const handleClick = () => {
    onClick(viewIndex)
  }
  return (
    <Button colorScheme="green" onClick={handleClick}>
      {label}
    </Button>
  )
}
