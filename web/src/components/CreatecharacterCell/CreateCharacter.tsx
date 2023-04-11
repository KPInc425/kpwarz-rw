import type { CreateCharacterInput } from 'types/graphql'
import type { CreateGameInput } from 'types/graphql'
import type { CreateCharacterAndGameInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import CreateCharacterForm from 'src/components/CreatecharacterCell/CreateCharacterForm/CreateCharacterForm'
import generateNewFinances from 'src/lib/generateNewFinances'
import generateNewGame from 'src/lib/generateNewGame'

// const CREATE_CHARACTER_MUTATION = gql`
//   mutation CreateCharacterMutation($input: CreateCharacterInput!) {
//     createCharacter(input: $input) {
//       id
//     }
//   }
// `
// const CREATE_GAME_MUTATION = gql`
//   mutation CreateGameMutation($input: CreateGameInput!) {
//     createGame(input: $input) {
//       id
//       characterId
//     }
//   }
// `
// const CREATE_CHARACTER_FINANCES_MUTATION = gql`
//   mutation createCharacterFinances($input: CreateCharacterFinancesInput!) {
//     createGame(input: $input) {
//       id
//     }
//   }
// `
// const CREATE_REGION_MUTATION = gql`
//   mutation createrRegion($input: CreateRegionInput!) {
//     createRegion(input: $input) {
//       id
//     }
//   }
// `

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
  const { currentUser } = useAuth()
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
        navigate(routes.characterIntro({ id: game.characterId }))
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  // const onSave = (input: CreateCharacterInput) => {
  //   console.log(input)
  //   createCharacter({ variables: { input } })
  // }

  const onSave = (input: CreateCharacterAndGameInput) => {
    console.log(input)
    createCharacterAndGame({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Character</h2>
      </header>
      <div className="rw-segment-main">
        <CreateCharacterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default CreateCharacter
