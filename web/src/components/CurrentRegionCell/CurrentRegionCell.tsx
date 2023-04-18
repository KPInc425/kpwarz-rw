import { Button, Flex, Icon, Stack } from '@chakra-ui/react'
import { BiStore } from 'react-icons/bi'
import { RiBankFill } from 'react-icons/ri'
import type {
  EditGameById,
  FindCurrentRegionQuery,
  FindCurrentRegionQueryVariables,
  UpdateGameInput,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductCard from '../ProductCard/ProductCard'

export const QUERY = gql`
  query FindCurrentRegionQuery($id: Int!) {
    currentRegion: region(id: $id) {
      id
      name
      description
      control
      game {
        id
        name
        currentCity
        timeOfDay
        currentDay
        maxDays
      }
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
const UPDATE_GAME_MUTATION = gql`
  mutation UpdateGameMutation($id: Int!, $input: UpdateGameInput!) {
    updateGame(id: $id, input: $input) {
      currentCity
      currentDay
      timeOfDay
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
  const [updateCurrentCity, { loading, error }] = useMutation(
    UPDATE_GAME_MUTATION,
    {
      onCompleted: () => {
        toast.success('Game updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const handleClick = (
    input: UpdateGameInput,
    id: EditGameById['game']['id']
  ) => {
    console.log('clicked')
    console.log(input.currentCity)

    const newGameInput = {
      currentCity: input.currentCity,
      currentDay: currentRegion.game.currentDay + 1,
      timeOfDay: 'Afternoon',
    }
    console.log(newGameInput)
    // updateCurrentCity({ variables: { id, input: newGameInput } })
  }

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
        {currentRegion.cities.map((city) => {
          let color = 'green'
          if (city.name === currentRegion.game.currentCity) {
            color = 'blue'
          }
          return (
            <Button
              onClick={() => handleClick(city.name, currentRegion.game.id)}
              key={city.id}
              colorScheme={color}
            >
              {city.name}
            </Button>
          )
        })}
      </Stack>
    </Flex>
  )
}
