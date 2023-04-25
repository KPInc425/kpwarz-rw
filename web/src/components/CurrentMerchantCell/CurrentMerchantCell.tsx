import { Button, Flex, Icon, Stack } from '@chakra-ui/react'
import { BiStore } from 'react-icons/bi'
import { RiBankFill } from 'react-icons/ri'
import type {
  FindCurrentMerchantQuery,
  FindCurrentMerchantQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import temperamentToString from 'src/lib/temperamentToString'

import LocationCard from '../LocationCard/LocationCard'
import ProductCard from '../ProductCard/ProductCard'
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
        region {
          id
          game {
            id
            characterId
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
  return (
    <div>
      {/* {JSON.stringify(currentMerchant)} */}
      <Flex>
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
        {currentMerchant.items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
              quality={item.quality}
              ability={item.ability}
              type={item.type}
              uses={item.uses}
            />
          )
        })}
      </Flex>
    </div>
  )
}