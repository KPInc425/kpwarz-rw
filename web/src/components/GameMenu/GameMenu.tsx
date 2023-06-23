import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const GameMenu = ({ updateCurrentView }) => {
  return (
    <div>
      {/* <h2 className="text-center text-2xl font-bold">Menu</h2> */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
      >
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={0}
          label={'Player Info'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={1}
          label={'Inventory'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={2}
          label={'Actions'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={3}
          label={'Trader'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={4}
          label={'Travel'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={5}
          label={'Stores'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={6}
          label={'Finances'}
        />
        {/* Make this conditional on if the player has the Dark Web perk */}
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={7}
          label={'Dark Web'}
        />
        <GameMenuButton
          onClick={updateCurrentView}
          viewIndex={8}
          label={'Black Market'}
        />
        <Button colorScheme="red">
          <Link to={routes.home()}>Quit Game</Link>
        </Button>
      </Stack>
    </div>
  )
}

export default GameMenu

const GameMenuButton = ({ label, onClick, viewIndex }) => {
  const handleClick = () => {
    onClick(viewIndex)
  }
  return (
    <Button colorScheme="green" onClick={handleClick}>
      {label}
    </Button>
  )
}
