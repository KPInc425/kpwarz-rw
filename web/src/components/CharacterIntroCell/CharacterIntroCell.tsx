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

import FinancialStatement from '../FinancialStatement/FinancialStatement'
import IDCard from '../IDCard/IDCard'
import Inventory from '../Inventory/Inventory'
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
      items {
        id
        name
        description
        imgURL
        quantity
        quality
        ability
        type
        uses
        price
      }
      finances {
        id
        cashOnHand
        bankAccount
        debt
        loanDays
      }
      game {
        name
        description
        startLocation
        currentCity {
          id
          name
          merchantId
          merchant {
            id
            name
            items {
              id
              name
              quantity
            }
          }
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

  console.log('merchantInventory: ', characterIntro.game)

  return (
    <div>
      <Box>
        <Flex gap={4} wrap={'wrap'} justifyContent={'center'}>
          <IDCard characterInfo={characterIntro} />
        </Flex>
        <FinancialStatement characterInfo={characterIntro} />
        <Inventory
          mainInventory={characterIntro.items}
          // secondaryInventory={characterIntro.game.currentCity.merchant.items}
          owner={characterIntro.name}
          characterId={characterIntro.id}
          merchantId={characterIntro.game.currentCity.merchantId}
        />
      </Box>
    </div>
  )
}
