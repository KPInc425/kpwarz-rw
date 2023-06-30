import { useRef, useState } from 'react'

import {
  Box,
  Button,
  Center,
  Stack,
  Tag,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'

import { useAuth } from 'src/auth'
import AdminMenu from 'src/components/AdminMenu/AdminMenu'

type KPWarzGameLayoutProps = {
  children?: React.ReactNode
}

const KPWarzGameLayout = ({ children }: KPWarzGameLayoutProps) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()
  const [displayMenu, setDisplayMenu] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const handleHover = () => {
    setDisplayMenu(!displayMenu)
  }
  return (
    <>
      {/* <Box
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        opacity={displayMenu ? 1 : 0}
        zIndex={10}
        as="header"
        pos={'fixed'}
        right={4}
        top={4}
      >
        <Stack direction={'row'} justify={'flex-end'}>
          {hasRole(['admin']) && <AdminMenu />}
          <Button colorScheme="blue" onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Stack>
        {isAuthenticated && (
          <Stack direction={'row'} justify={'flex-end'}>
            <Tag>Logged in as {currentUser?.email}</Tag>
          </Stack>
        )}
      </Box> */}

      <main>{children}</main>
    </>
  )
}

export default KPWarzGameLayout
