import { useState, useEffect } from 'react'

import { Button, Flex, Icon, Stack } from '@chakra-ui/react'
import { BiStore } from 'react-icons/bi'
import { RiBankFill } from 'react-icons/ri'
import type {
  EditGameById,
  FindCurrentRegionQuery,
  FindCurrentRegionQueryVariables,
  UpdateGameInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CharacterIntroCell from '../CharacterIntroCell'
import LocationCard from '../LocationCard/LocationCard'

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
        currentCity {
          id
          name
          merchantId
          avgPrice
        }
        timeOfDay
        currentDay
        maxDays
        characterId
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
  mutation UpdateGameOnTravelMutation(
    $id: Int!
    $input: UpdateGameOnTravelInput!
  ) {
    updateGameOnTravel(id: $id, input: $input) {
      currentCityId
      currentCity {
        id
        name
      }
      currentDay
      timeOfDay
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

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
  const [currentCity, setCurrentCity] = useState(
    currentRegion.cities.find((c) => c.id === currentRegion.game.currentCity.id)
  )
  const [reRender, setReRender] = useState(false)
  const [updateCurrentCity, { loading, error }] = useMutation(
    UPDATE_GAME_MUTATION,
    {
      onCompleted: (r) => {
        toast.success('Game updated')
        console.log(r)
        console.log('navigating')
        setReRender(true)
        setReRender(false)
        setCurrentCity(
          currentRegion.cities.find((c) => c.id === r.updateGame.currentCity.id)
        )
        console.log(currentCity)
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: [
        { query: QUERY, variables: { id: currentRegion.id } },
        'FindCurrentRegionQuery',
      ],
    }
  )

  const handleClick = (
    input: UpdateGameInput,
    id: EditGameById['game']['id']
  ) => {
    console.log('clicked')
    console.log(input)

    const updatedGameInput = {
      currentCityId: input,
      merchantId: currentRegion.game.currentCity.merchantId,
      avgPrice: currentRegion.game.currentCity.avgPrice,
      // currentDay: currentRegion.game.currentDay + 1,
      // timeOfDay: 'Afternoon',
    }
    console.log(updatedGameInput)
    updateCurrentCity({ variables: { id, input: updatedGameInput } })
  }

  return (
    <Stack>
      {/* <div>{JSON.stringify(currentRegion.cities)}</div> */}
      <Flex alignItems={'center'} justifyContent={'center'} mt={4}>
        <LocationCard
          name={currentRegion.name}
          description={currentRegion.description}
          control={currentRegion.control}
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
        <Stack direction="column" spacing={2} m={4}>
          {currentRegion.cities.map((city) => {
            let color = 'green'
            if (city.name === currentRegion.game.currentCity.name) {
              color = 'blue'
            }
            return (
              <Button
                onClick={() => handleClick(city.id, currentRegion.game.id)}
                key={city.id}
                colorScheme={color}
              >
                {city.name}
              </Button>
            )
          })}
        </Stack>

        <LocationCard
          name={currentCity.name}
          description={currentCity.description}
          control={currentCity.localBoss}
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
      {/* <CharacterIntroCell
        id={currentRegion.game.characterId}
        reRender={reRender}
      /> */}
    </Stack>
  )
}
