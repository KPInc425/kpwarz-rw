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
} from '@chakra-ui/react'
// Assets

import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

const LocationCard = ({
  productTitle,
  productDescription,
  productControl,
  services,
}) => {
  return (
    <DarkMode>
      <Flex
        borderRadius="20px"
        bg="white"
        _dark={{ bg: '#111c44' }}
        h="345px"
        w={{ base: '315px', md: '345px' }}
        direction="column"
      >
        <Box p="20px">
          <Flex w="100%" mb="10px">
            <Image src="https://i.ibb.co/ZWxRPRq/Venus-Logo.png" me="auto" />
            <Button
              w="38px"
              h="38px"
              align="center"
              justify="center"
              borderRadius="12px"
              me="12px"
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
            </Button>
          </Flex>
          <Box>
            <Text
              fontWeight="600"
              color="gray.800"
              _dark={{ color: 'white' }}
              w="100%"
              fontSize="2xl"
            >
              {productTitle}
            </Text>
            <AvatarGroup
              size="sm"
              max={4}
              color="brand.200"
              _dark={{ color: 'white' }}
              fontSize="9px"
              fontWeight="700"
            >
              <Avatar src="https://i.ibb.co/CmxNdhQ/avatar1.png" />
              <Avatar src="https://i.ibb.co/cFWc59B/avatar2.png" />
              <Avatar src="https://i.ibb.co/vLQJVFy/avatar3.png" />
              <Avatar src="https://i.ibb.co/8mcrvQk/avatar4.png" />
              <Avatar src="https://i.ibb.co/CmxNdhQ/avatar1.png" />
              <Avatar src="https://i.ibb.co/cFWc59B/avatar2.png" />
              <Avatar src="https://i.ibb.co/vLQJVFy/avatar3.png" />
              <Avatar src="https://i.ibb.co/8mcrvQk/avatar4.png" />
            </AvatarGroup>
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
            Description: {productDescription}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            Control: {productControl}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            Services
          </Text>
          <Flex>
            {services.map((service, index) => {
              // console.log(service)
              return (
                <Flex key={index} me="25px">
                  {service.serviceIcon}
                  <Text
                    color="gray.800"
                    _dark={{ color: 'white' }}
                    fontSize="sm"
                    my="auto"
                    fontWeight="500"
                  >
                    {service.name}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </DarkMode>
  )
}

export default LocationCard
