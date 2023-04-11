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
  Stat,
  StatLabel,
  StatNumber,
  Badge,
} from '@chakra-ui/react'
// Assets
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'
import { MdTimer, MdVideoLibrary } from 'react-icons/md'

// interface StatCardProps {
//   statTitle: string
//   statValue: Int16Array
//   statMax: Int16Array
//   onSave:
// }

const StatCard = ({ statTitle, statData, statInfo }) => {
  return (
    <DarkMode>
      <Flex
        borderRadius="20px"
        bg="white"
        _dark={{ bg: '#111c44' }}
        // h="345px"
        // w={{ base: '315px', md: '345px' }}
        direction="column"
      >
        <Box p="20px">
          <Flex alignItems={'center'} gap={4}>
            <Image src="https://i.ibb.co/ZWxRPRq/Venus-Logo.png" />
            {/* <Button
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
            </Button> */}
            <Box>
              <Stat>
                <StatLabel>
                  <Badge>{statTitle}</Badge>
                </StatLabel>
                <StatNumber>
                  {' '}
                  <Text
                    fontWeight="600"
                    color="gray.800"
                    _dark={{ color: 'white' }}
                    w="100%"
                    fontSize="2xl"
                  >
                    {statData}
                  </Text>
                </StatNumber>
              </Stat>

              {/* <AvatarGroup
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
            </AvatarGroup> */}
            </Box>
          </Flex>
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
            {statInfo}
          </Text>
          {/* <Flex>
            <Flex me="25px">
              <Icon as={MdTimer} w="20px" h="20px" me="6px" color="green.400" />
              <Text
                color="gray.800"
                _dark={{ color: 'white' }}
                fontSize="sm"
                my="auto"
                fontWeight="500"
              >
                85 mins
              </Text>
            </Flex>
            <Flex>
              <Icon
                as={MdVideoLibrary}
                w="20px"
                h="20px"
                me="6px"
                color="red.500"
              />
              <Text
                color="gray.800"
                _dark={{ color: 'white' }}
                fontSize="sm"
                my="auto"
                fontWeight="500"
              >
                Video Format
              </Text>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
    </DarkMode>
  )
}

export default StatCard
