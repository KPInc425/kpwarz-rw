import type { CreateCharacterInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CreateCharacterForm from 'src/components/CreatecharacterCell/CreateCharacterForm/CreateCharacterForm'

const CREATE_CHARACTER_MUTATION = gql`
  mutation CreateCharacterMutation($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
      id
    }
  }
`

const CreateCharacter = () => {
  const [createCharacter, { loading, error }] = useMutation(
    CREATE_CHARACTER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Character created')
        navigate(routes.characterIntro())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCharacterInput) => {
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
