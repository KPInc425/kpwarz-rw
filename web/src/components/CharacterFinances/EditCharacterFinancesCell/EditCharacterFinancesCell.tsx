import type {
  EditCharacterFinancesById,
  UpdateCharacterFinancesInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CharacterFinancesForm from 'src/components/CharacterFinances/CharacterFinancesForm'

export const QUERY = gql`
  query EditCharacterFinancesById($id: Int!) {
    characterFinances: characterFinances(id: $id) {
      id
      characterId
      cashOnHand
      bankAccount
      debt
      createdAt
    }
  }
`
const UPDATE_CHARACTER_FINANCES_MUTATION = gql`
  mutation UpdateCharacterFinancesMutation(
    $id: Int!
    $input: UpdateCharacterFinancesInput!
  ) {
    updateCharacterFinances(id: $id, input: $input) {
      id
      characterId
      cashOnHand
      bankAccount
      debt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  characterFinances,
}: CellSuccessProps<EditCharacterFinancesById>) => {
  const [updateCharacterFinances, { loading, error }] = useMutation(
    UPDATE_CHARACTER_FINANCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('CharacterFinances updated')
        navigate(routes.characterFinanceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCharacterFinancesInput,
    id: EditCharacterFinancesById['characterFinances']['id']
  ) => {
    updateCharacterFinances({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CharacterFinances {characterFinances?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CharacterFinancesForm
          characterFinances={characterFinances}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
