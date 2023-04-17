import { Button, Flex, Icon, Stack } from '@chakra-ui/react'
import { BiStore } from 'react-icons/bi'
import { RiBankFill } from 'react-icons/ri'
import type {
  FindCurrentRegionQuery,
  FindCurrentRegionQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProductCard from '../ProductCard/ProductCard'

export const QUERY = gql`
  query FindCurrentRegionQuery($id: Int!) {
    currentRegion: region(id: $id) {
      id
      name
      description
      control
      cities {
        id
        name
        description
        avgQuality
        avgPrice
        minQuantity
        maxQuantity
        authorityPresence
        localBoss
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCurrentRegionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  currentRegion,
}: CellSuccessProps<
  FindCurrentRegionQuery,
  FindCurrentRegionQueryVariables
>) => {
  return (
    <Flex alignItems={'center'}>
      <ProductCard
        productTitle={currentRegion.name}
        productDescription={currentRegion.description}
        productControl={currentRegion.control}
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
      <Stack direction="column" spacing={2} ml={4}>
        {currentRegion.cities.map((city) => (
          <Button key={city.id} colorScheme="green">
            {city.name}
          </Button>
        ))}
      </Stack>
    </Flex>
  )
}
