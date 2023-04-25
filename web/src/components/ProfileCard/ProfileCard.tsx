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
  DarkMode,
} from '@chakra-ui/react'
// Assets

import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

const ProfileCard = ({ profileName, profileDescription, profileBio, misc }) => {
  return (
    <DarkMode>
      <Flex
        borderRadius="20px"
        bg="white"
        _dark={{ bg: '#111c44' }}
        h="fit-content"
        w={{ base: '315px', md: '345px' }}
        direction="column"
      >
        <Box p="20px">
          <Flex w="100%" mb="10px">
            <Image
              src="https://i.imgur.com/H54NsMT.png"
              boxSize="100px"
              borderRadius="full"
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
              {profileName}
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
            Description: {profileDescription}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            Bio: {profileBio}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            lineHeight="24px"
            pe="40px"
            fontWeight="500"
            mb="auto"
          >
            {misc}
          </Text>
        </Flex>
      </Flex>
    </DarkMode>
  )
}

export default ProfileCard
