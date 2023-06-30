import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import type { CreateCharacterAndGameInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import CreateCharacterForm from 'src/components/CreatecharacterCell/CreateCharacterForm/CreateCharacterForm'

const CREATE_CHARACTER_AND_GAME_MUTATION = gql`
  mutation CreateCharacterAndGameMutation(
    $input: CreateCharacterAndGameInput!
  ) {
    createCharacterAndGame(input: $input) {
      character {
        id
      }
      game {
        id
        characterId
      }
      region {
        id
      }
      cities {
        id
      }
    }
  }
`

const CreateCharacter = () => {
  const headerBackgroundColor = useColorModeValue(
    'rgba(99,179,96,0.8)',
    'rgba(9,79,0,0.8)'
  )
  const [createCharacterAndGame, { loading, error }] = useMutation(
    CREATE_CHARACTER_AND_GAME_MUTATION,
    {
      onCompleted: (r) => {
        // Access created entities from the response
        const { character, game, region, cities } = r.createCharacterAndGame
        toast.success('Character, Game, and Region created')
        console.log('Character Created', character.id)
        console.log('Setting Character Id')
        console.log(game)
        console.log(region)
        console.log(cities)
        console.log(character)
        navigate(
          routes.characterIntro({
            id: game.id,
          })
        )
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCharacterAndGameInput) => {
    console.log(input)
    createCharacterAndGame({ variables: { input } })
  }

  return (
    <Container>
      <Card p={0} mt={4}>
        <CardHeader
          backgroundColor={headerBackgroundColor}
          borderRadius={'0.5rem 0.5rem 0 0'}
        >
          <Heading>New Character</Heading>
        </CardHeader>
        <CardBody>
          <CreateCharacterForm
            onSave={onSave}
            loading={loading}
            error={error}
          />
        </CardBody>
      </Card>
    </Container>
  )
}

export default CreateCharacter
