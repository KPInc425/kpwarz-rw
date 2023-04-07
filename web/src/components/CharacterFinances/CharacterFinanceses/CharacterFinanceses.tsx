import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CharacterFinances/CharacterFinancesesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCharacterFinancesMutationVariables,
  FindCharacterFinanceses,
} from 'types/graphql'

const DELETE_CHARACTER_FINANCES_MUTATION = gql`
  mutation DeleteCharacterFinancesMutation($id: Int!) {
    deleteCharacterFinances(id: $id) {
      id
    }
  }
`

const CharacterFinancesesList = ({
  characterFinanceses,
}: FindCharacterFinanceses) => {
  const [deleteCharacterFinances] = useMutation(
    DELETE_CHARACTER_FINANCES_MUTATION,
    {
      onCompleted: () => {
        toast.success('CharacterFinances deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Character id</th>
            <th>Cash on hand</th>
            <th>Bank account</th>
            <th>Debt</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {characterFinanceses.map((characterFinances) => (
            <tr key={characterFinances.id}>
              <td>{truncate(characterFinances.id)}</td>
              <td>{truncate(characterFinances.characterId)}</td>
              <td>{truncate(characterFinances.cashOnHand)}</td>
              <td>{truncate(characterFinances.bankAccount)}</td>
              <td>{truncate(characterFinances.debt)}</td>
              <td>{timeTag(characterFinances.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.characterFinances({ id: characterFinances.id })}
                    title={
                      'Show characterFinances ' +
                      characterFinances.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCharacterFinances({
                      id: characterFinances.id,
                    })}
                    title={'Edit characterFinances ' + characterFinances.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete characterFinances ' + characterFinances.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(characterFinances.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CharacterFinancesesList
