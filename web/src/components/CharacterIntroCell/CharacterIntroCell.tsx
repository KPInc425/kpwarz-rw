import {
  Box,
  Grid,
  GridItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Badge,
  SimpleGrid,
  Flex,
  Card,
  CardHeader,
  Divider,
  CardBody,
  Image,
  Icon,
} from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import type {
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StatCard from '../StatCard/StatCard'

export const QUERY = gql`
  query FindCharacterIntroQuery($id: Int!) {
    characterIntro: getCharacterIntro(id: $id) {
      id
      name
      bio
      background
      description
      userId
      health
      maxHealth
      currentItems
      maxItems
      luck
      storageType
      createdAt
      finances {
        id
        cashOnHand
        bankAccount
        debt
      }
      game {
        name
        description
        startLocation
        currentCity {
          id
          name
          region {
            name
          }
        }
        currentRegionId
        maxDays
        currentDay
        timeOfDay
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindCharacterIntroQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  characterIntro,
  reRender,
  queryResult: { refetch },
}: CellSuccessProps<
  FindCharacterIntroQuery,
  FindCharacterIntroQueryVariables
>) => {
  if (reRender === true) {
    refetch()
  }

  const getRandomDate = () => {
    const maxDate = Date.now()
    const timeStamp = Math.floor(Math.random() * maxDate)
    return new Date(timeStamp)
  }

  return (
    <div>
      <Box>
        <Flex gap={4} wrap={'wrap'} justifyContent={'center'}>
          {/* <div>
            {'Character ID: '}
            {characterIntro.id}
          </div> */}
          <Card variant="outline" width={{ base: '90vw', sm: '50vw' }}>
            <CardHeader px={0}>
              <Flex
                justifyContent={'space-between'}
                position={'relative'}
                wrap={'wrap'}
                px={20}
                zIndex={1}
              >
                <Flex>
                  <Stack spacing={-2} justifyContent={'center'}>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color={'green'}
                      alignSelf={'flex-end'}
                    >
                      {characterIntro.game.currentCity.region.name.slice(0, 1)}
                      {characterIntro.game.currentCity.region.name
                        .slice(1, 2)
                        .toUpperCase()}
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" color={'green'}>
                      {'USA'}
                    </Text>
                  </Stack>
                  <Text
                    fontSize="2rem"
                    fontWeight="bold"
                    alignSelf={'center'}
                    color={'green'}
                  >
                    {characterIntro.game.currentCity.region.name}
                  </Text>
                </Flex>
                <Text fontSize="xl" alignSelf={'center'}>
                  {'Identification Card'}
                </Text>
              </Flex>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                color={'rgba(221, 221, 221, 0.158)'}
                position={'absolute'}
                textAlign={'center'}
                sx={{ top: 0, letterSpacing: '2rem', width: '100%' }}
              >
                {characterIntro.game.currentCity.region.name.toUpperCase()}
              </Text>
              <Divider />
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={3} gap={2}>
                <Stack maxW={{ base: '100%' }}>
                  <Image
                    objectFit="cover"
                    src="https://i.imgur.com/H54NsMT.png"
                  />
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign={'center'}
                    as={'i'}
                    fontFamily={'cursive'}
                  >
                    {characterIntro.name}
                  </Text>
                </Stack>
                <Stack>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'4d LIC# '}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {Math.floor(
                        Math.random() * (99999999 - 10000000) + 10000000
                      ) +
                        characterIntro.name
                          .split(' ')[0]
                          .slice(0, 1)
                          .toUpperCase() +
                        characterIntro.name
                          .split(' ')[1]
                          .slice(0, 1)
                          .toUpperCase()}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'1'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.name.split(' ')[1]}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'2'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.name.split(' ')[0]}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'} pt={4}>
                    <Text fontSize="xs" pr={1}>
                      {'3 DOB:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {getRandomDate().toLocaleDateString()}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'5 INFLUENCE:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.background}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'6 CITY:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.game.startLocation}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'} pt={4}>
                    <Text fontSize="xs" pr={1}>
                      {'7 HEALTH:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {[characterIntro.health, '/', characterIntro.maxHealth]}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'8 DAYS:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {[
                        characterIntro.game.currentDay,
                        '/',
                        characterIntro.game.maxDays,
                      ]}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'9 TOD:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.game.timeOfDay}
                    </Text>
                  </Flex>
                </Stack>
                <Stack>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'10 CLASS:'}
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      mb={'-2px'}
                      color={'red'}
                    >
                      {'DONOR '}
                      <Icon as={AiFillHeart} color={'red'} mb={'-1px'} />
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'11 STORAGE:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.storageType}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'}>
                    <Text fontSize="xs" pr={1}>
                      {'12 ITEMS:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {[
                        characterIntro.currentItems,
                        '/',
                        characterIntro.maxItems,
                      ]}
                    </Text>
                  </Flex>
                  <Flex alignItems={'flex-end'} alignSelf={'center'}>
                    <Text fontSize="xs" pr={1}>
                      {'13 BANK:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.bankAccount || 0}
                    </Text>
                    <Text fontSize="xs" pl={4} pr={1}>
                      {'14 CASH:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.finances.cashOnHand}
                    </Text>
                    <Text fontSize="xs" pl={4} pr={1}>
                      {'15 DEBT:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.finances.debt}
                    </Text>
                  </Flex>
                  <Image
                    // position={'absolute'}
                    objectFit="cover"
                    opacity={0.5}
                    src="https://i.imgur.com/H54NsMT.png"
                    pl={20}
                    pt={10}
                    w={'70%'}
                  />
                  <Flex alignItems={'flex-end'} alignSelf={'center'}>
                    <Text fontSize="xs" pr={1}>
                      {'16 LUCK:'}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={'-2px'}>
                      {characterIntro.luck}
                    </Text>
                  </Flex>
                </Stack>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </div>
  )
}
