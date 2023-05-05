import type {
  DeleteCharacterFinancesMutationVariables,
  FindCharacterFinancesById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_CHARACTER_FINANCES_MUTATION = gql`
  mutation DeleteCharacterFinancesMutation($id: Int!) {
    deleteCharacterFinances(id: $id) {
      id
    }
  }
`

interface Props {
  characterFinances: NonNullable<FindCharacterFinancesById['characterFinances']>
}

const CharacterFinances = ({ characterFinances }: Props) => {
  const [deleteCharacterFinances] = useMutation(
    DELETE_CHARACTER_FINANCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('CharacterFinances deleted')
        navigate(routes.characterFinanceses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteCharacterFinancesMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete characterFinances ' + id + '?')
    ) {
      deleteCharacterFinances({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CharacterFinances {characterFinances.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{characterFinances.id}</td>
            </tr>
            <tr>
              <th>Character id</th>
              <td>{characterFinances.characterId}</td>
            </tr>
            <tr>
              <th>Cash on hand</th>
              <td>{characterFinances.cashOnHand}</td>
            </tr>
            <tr>
              <th>Bank account</th>
              <td>{characterFinances.bankAccount}</td>
            </tr>
            <tr>
              <th>Debt</th>
              <td>{characterFinances.debt}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(characterFinances.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCharacterFinances({ id: characterFinances.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(characterFinances.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CharacterFinances
