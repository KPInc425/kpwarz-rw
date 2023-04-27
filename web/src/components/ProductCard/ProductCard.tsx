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

import { CgDollar } from 'react-icons/Cg'
import { GiHandBag } from 'react-icons/Gi'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

const ProductCard = ({
  props,
  // icon,
}) => {
  return (
    <DarkMode>
      <Flex
        borderRadius="20px"
        bg="white"
        _dark={{ bg: '#111c44' }}
        h="300px"
        w={{ base: '200px', md: '200px' }}
        direction="column"
      >
        <Box p="20px">
          <Flex w="100%" mb="10px">
            <Image
              src="https://i.imgur.com/cCNYIXA.png"
              boxSize="75px"
              me="auto"
            />
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
              {props.name}
            </Text>
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
            {props.description}
          </Text>
          <Flex alignItems={'center'}>
            <Icon as={CgDollar} w="20px" h="20px" color={'green.400'} />
            <Text
              fontSize="sm"
              color="gray.500"
              lineHeight="22px"
              pe="40px"
              fontWeight="500"
              mb="auto"
            >
              {props.price}
            </Text>
            <Icon as={GiHandBag} w="20px" h="20px" color={'blue.400'} me={1} />
            <Text
              fontSize="sm"
              color="gray.500"
              lineHeight="24px"
              pe="40px"
              fontWeight="500"
              mb="auto"
            >
              {props.quantity}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DarkMode>
  )
}

export default ProductCard
