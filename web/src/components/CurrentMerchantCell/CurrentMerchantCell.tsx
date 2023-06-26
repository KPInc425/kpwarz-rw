import { Button, Flex, Icon, Stack } from '@chakra-ui/react'
import { BiStore } from 'react-icons/bi'
import { RiBankFill } from 'react-icons/ri'
import type {
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import temperamentToString from 'src/lib/temperamentToString'

import Inventory from '../Inventory/Inventory2'
import LocationCard from '../LocationCard/LocationCard'
import PlayerInventoryCell from '../PlayerInventoryCell'
import ProfileCard from '../ProfileCard/ProfileCard'

export const QUERY = gql`
  query FindCurrentMerchantQuery($id: Int!) {
    currentMerchant: merchant(id: $id) {
      id
      name
      bio
      description
      currentItems
      maxItems
      temperament
      location {
        id
        name
        description
        avgQuality
        avgPrice
        minQuantity
        maxQuantity
        localBoss
        authorityPresence
        # game {
        #   id
        #   name
        #   description
        # }
        region {
          id
          name
          game {
            character {
              id
              items {
                id
                name
                description
                quantity
                price
              }
            }
          }
        }
        services {
          id
          name
        }
      }
      items {
        id
        name
        description
        quantity
        price
        quality
        ability
        type
        uses
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
}: CellFailureProps<FindCurrentMerchantQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  currentMerchant,
}: CellSuccessProps<
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables
>) => {
  console.log('currentMerchant: ', currentMerchant.location)
  return (
    <div>
      {/* {JSON.stringify(currentMerchant.location.region.game.character.items)} */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        sx={{ overflowX: 'auto' }}
        justifyContent={'center'}
        alignItems={'center'}
        gap={4}
      >
        <ProfileCard
          profileName={currentMerchant.name}
          profileDescription={currentMerchant.description}
          profileBio={currentMerchant.bio}
          misc={`${currentMerchant.name}'s temperament is ${temperamentToString(
            currentMerchant.temperament
          )}`}
        />
        <LocationCard
          name={currentMerchant.location.name}
          description={currentMerchant.location.description}
          control={currentMerchant.location.localBoss}
          services={[
            {
              name: 'Bank',
              description: 'Banking services',
              serviceIcon: (
                <Icon
                  as={RiBankFill}
                  w="20px"
                  h="20px"
                  me="6px"
                  color={'green.400'}
                />
              ),
            },
            {
              name: 'Store',
              description: 'Market services',
              serviceIcon: (
                <Icon
                  as={BiStore}
                  w="20px"
                  h="20px"
                  me="6px"
                  color={'blue.400'}
                />
              ),
            },
          ]}
        />
      </Flex>
      <Flex justify={'center'} gap={8}>
        <Inventory
          mainInventory={currentMerchant.items}
          secondaryInventory={
            currentMerchant.location.region.game.character.items
          }
          owner={currentMerchant.name}
          characterId={currentMerchant.location.region.game.character.id}
          merchantId={currentMerchant.id}
          isShop={true}
        />
      </Flex>
    </div>
  )
}
