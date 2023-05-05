import type { CreateCharacterFinancesInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CharacterFinancesForm from 'src/components/CharacterFinances/CharacterFinancesForm'

const CREATE_CHARACTER_FINANCES_MUTATION = gql`
  mutation CreateCharacterFinancesMutation(
    $input: CreateCharacterFinancesInput!
  ) {
    createCharacterFinances(input: $input) {
      id
    }
  }
`

const NewCharacterFinances = () => {
  const [createCharacterFinances, { loading, error }] = useMutation(
    CREATE_CHARACTER_FINANCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('CharacterFinances created')
        navigate(routes.characterFinanceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCharacterFinancesInput) => {
    createCharacterFinances({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New CharacterFinances
        </h2>
      </header>
      <div className="rw-segment-main">
        <CharacterFinancesForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewCharacterFinances
