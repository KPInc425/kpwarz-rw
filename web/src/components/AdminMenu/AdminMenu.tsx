import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Portal,
} from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'

const AdminMenu = () => {
  const adminGameRoutes = [
    {
      route: routes.characters(),
      name: 'Characters',
    },
    {
      route: routes.games(),
      name: 'Games',
    },
    {
      route: routes.transports(),
      name: 'Transports',
    },
    {
      route: routes.characterFinanceses(),
      name: 'Finances',
    },
    {
      route: routes.items(),
      name: 'Items',
    },
    {
      route: routes.availableItemses(),
      name: 'Available Items',
    },
    {
      route: routes.availableRegions(),
      name: 'Available Regions',
    },
    {
      route: routes.availableCities(),
      name: 'Available Cities',
    },
    {
      route: routes.availableServices(),
      name: 'Available Services',
    },
    {
      route: routes.availableTransports(),
      name: 'Available Transports',
    },
  ]

  const adminBlogRoutes = [
    {
      route: routes.posts(),
      name: 'Posts',
    },
    {
      route: routes.users(),
      name: 'Users',
    },
  ]

  return (
    <Menu>
      <MenuButton
        colorScheme="green"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Actions
      </MenuButton>
      <Portal>
        <MenuList bg="green" color="white" opacity={1}>
          <MenuGroup title="KPWarz">
            {adminGameRoutes.map((adminGameRoute, index) => {
              return (
                <MenuItem key={index} as="a" href={adminGameRoute.route}>
                  {adminGameRoute.name}
                </MenuItem>
              )
            })}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Blogz">
            {adminBlogRoutes.map((adminBlogRoute, index) => {
              return (
                <MenuItem key={index} as="a" href={adminBlogRoute.route}>
                  {adminBlogRoute.name}
                </MenuItem>
              )
            })}
          </MenuGroup>
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default AdminMenu
