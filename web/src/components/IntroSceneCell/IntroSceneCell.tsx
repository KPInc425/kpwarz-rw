import { useState, useRef } from 'react'

import {
  Badge,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import type {
  FindIntroSceneQuery,
  FindIntroSceneQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CharacterIntroCell from 'src/components/CharacterIntroCell'
import CurrentRegionCell from 'src/components/CurrentRegionCell'

export const QUERY = gql`
  query FindIntroSceneQuery($id: Int!) {
    introScene: getGameInfo(id: $id) {
      id
      name
      description
      currentRegionId
      currentCity {
        id
      }
      currentDay
      timeOfDay
      maxDays
      characterId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindIntroSceneQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  introScene,
}: CellSuccessProps<FindIntroSceneQuery, FindIntroSceneQueryVariables>) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [introView, setIntroView] = useState(5)
  const toggleButtonColor = useColorModeValue('yellow', 'yellow')
  const btnRef = useRef()
  const labels = [
    'Mug Shot',
    'Character Backstory',
    'Plot Thickens',
    'Buffs/Debuffs',
    'Starting Info',
    'Breaking Newz!',
    'Locations',
  ]

  const startGame = () => {
    console.log('start game')
    console.log(typeof introScene.id)
    navigate(routes.kpwarzGame({ id: introScene.id }))
  }

  const handleClick = (view) => {
    console.log('view', view)
    setIntroView(view)
  }
  return (
    <div>
      <Container maxW={'container.lg'} minW={'fit-content'}>
        <Show below="sm">
          <Button
            ref={btnRef}
            colorScheme="teal"
            variant="solid"
            onClick={onOpen}
            w={'100%'}
            my={4}
          >
            Open Menu
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading textAlign={'center'}>Character Intro</Heading>
              </DrawerHeader>

              <DrawerBody>
                <Stack px={2}>
                  <IntroMenu
                    labels={labels}
                    handleClick={handleClick}
                    onClose={onClose}
                  />
                </Stack>
                <Stack px={2} mt={2}>
                  <Button
                    size="sm"
                    colorScheme={'yellow'}
                    onClick={toggleColorMode}
                  >
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                  </Button>
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button size="sm" colorScheme="green" onClick={startGame}>
                  Start Game
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Show>
        <Show above="sm">
          <Flex justify={'space-between'} m={4} wrap={'wrap'} gap={1}>
            <IntroMenu
              labels={labels}
              handleClick={handleClick}
              onClose={onClose}
            />
            <Button
              size="sm"
              colorScheme={toggleButtonColor}
              onClick={toggleColorMode}
              flexGrow={1}
            >
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>

            <Button
              size="sm"
              colorScheme="green"
              onClick={startGame}
              flexGrow={1}
            >
              Start Game
            </Button>
          </Flex>
        </Show>
      </Container>
      {introView === 1 && <Text>MugShot (Coming Soon)</Text>}
      {introView === 2 && (
        <Text>Chatacter Backstory: Inspired by Bio (Coming Soon)</Text>
      )}
      {introView === 3 && <Text>Current Plot Point (Coming Soon)</Text>}
      {introView === 4 && <Text>Buffs and Debuffs (Coming Soon)</Text>}
      {introView === 5 && (
        <CharacterIntroCell id={Number(introScene.characterId)} />
      )}
      {introView === 6 && <Text>First News (Coming Soon)</Text>}
      {introView === 7 && (
        <CurrentRegionCell id={Number(introScene.currentRegionId)} />
      )}
    </div>
  )
}

const IntroMenu = ({ labels, handleClick, onClose }) => {
  const handleButtonClick = (view) => {
    console.log('view', view)
    console.log(onClose())
    handleClick(view)
    onClose()
  }
  return (
    <>
      {labels.map((label, index) => (
        <Button
          key={index}
          size={'sm'}
          flexGrow={1}
          onClick={() => handleButtonClick(index + 1)}
          colorScheme="blue"
        >
          {label}
        </Button>
      ))}
    </>
  )
}
