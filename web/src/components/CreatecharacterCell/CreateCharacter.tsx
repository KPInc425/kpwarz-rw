import type { CreateCharacterInput } from 'types/graphql'
import type { CreateGameInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import CreateCharacterForm from 'src/components/CreatecharacterCell/CreateCharacterForm/CreateCharacterForm'
import generateNewGame from 'src/lib/generateNewGame'

const CREATE_CHARACTER_MUTATION = gql`
  mutation CreateCharacterMutation($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
      id
    }
  }
`
const CREATE_GAME_MUTATION = gql`
  mutation CreateGameMutation($input: CreateGameInput!) {
    createGame(input: $input) {
      id
      characterId
    }
  }
`

const CreateCharacter = () => {
  const { currentUser } = useAuth()
  const [createGame] = useMutation(CREATE_GAME_MUTATION, {
    onCompleted: (r) => {
      toast.success('Game created')
      console.log(r.createGame.characterId)
      navigate(routes.characterIntro({ id: r.createGame.characterId }))
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message)
    },
  })
  const [createCharacter, { loading, error }] = useMutation(
    CREATE_CHARACTER_MUTATION,
    {
      onCompleted: (r) => {
        // console.log(r)
        toast.success('Character created')
        console.log('Character Created', r.createCharacter.id)
        console.log('Setting Character Id')
        // generateNewGame(r.data.createCharacter.id)
        const characterId = r.createCharacter.id
        const input = generateNewGame(characterId, currentUser.id)
        console.log(input)
        createGame({ variables: { input } })
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCharacterInput) => {
    console.log(input)
    createCharacter({ variables: { input } })
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
