type KPWarzLayoutProps = {
  children?: React.ReactNode
}
import { useRef } from 'react'

import {
  Box,
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
  Stack,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import AdminMenu from 'src/components/AdminMenu/AdminMenu'

const KPWarzLayout = ({ children }: KPWarzLayoutProps) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const linkColor = useColorModeValue('black', 'white')
  // console.log(currentUser?.email)
  const userRoutes = [
    {
      route: routes.home(),
      name: 'Home',
    },
    {
      route: routes.about(),
      name: 'About',
    },
    {
      route: routes.contact(),
      name: 'Contact',
    },
  ]

  return (
    <>
      <Toaster />
      <header>
        <Stack
          position={'sticky'}
          top={0}
          alignItems={'center'}
          bg={'green.900'}
          p={4}
          direction={['column', 'row']}
          justify={'space-between'}
        >
          <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 transition duration-100 hover:text-blue-100 dark:text-green-400 dark:hover:text-green-100"
              to={routes.home()}
            >
              {' '}
              KPWarz'
            </Link>
          </h1>

          <Stack direction={'row'}>
            {hasRole(['admin']) && <AdminMenu />}
            <Button colorScheme="blue" onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open Nav
            </Button>
          </Stack>
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent color={linkColor}>
            <DrawerCloseButton />
            <DrawerHeader>
              Nav Menu
              {isAuthenticated && <Tag>Logged in as {currentUser?.email}</Tag>}
            </DrawerHeader>

            <DrawerBody>
              <nav>
                <ul>
                  {userRoutes.map((userRoute, index) => {
                    return (
                      <li key={index}>
                        <Button
                          as={Link}
                          to={userRoute.route}
                          variant={'ghost'}
                          onClick={onClose}
                          color={linkColor}
                        >
                          {userRoute.name}
                        </Button>
                      </li>
                    )
                  })}
                  <li>
                    {isAuthenticated && (
                      <Button
                        as={Link}
                        type="button"
                        to={routes.KPWarzLoadGame()}
                        variant={'ghost'}
                        onClick={onClose}
                        color={linkColor}
                      >
                        <Text>Games</Text>
                      </Button>
                    )}
                  </li>
                </ul>
              </nav>
            </DrawerBody>
            <DrawerFooter>
              <Button colorScheme="blue" onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
              {isAuthenticated && (
                <Button variant="outline" mr={3} onClick={logOut}>
                  Logout
                </Button>
              )}
              {!isAuthenticated && (
                <Button as={Link} variant="outline" mr={3} to={routes.login()}>
                  Login
                </Button>
              )}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </header>
      <main>
        <Container maxW={'container.lg'} p={4}>
          {children}
        </Container>
      </main>
    </>
  )
}

export default KPWarzLayout
