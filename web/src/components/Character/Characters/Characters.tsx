import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Character/CharactersCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCharacterMutationVariables,
  FindCharacters,
} from 'types/graphql'

const DELETE_CHARACTER_MUTATION = gql`
  mutation DeleteCharacterMutation($id: Int!) {
    deleteCharacter(id: $id) {
      id
    }
  }
`

const CharactersList = ({ characters }: FindCharacters) => {
  const [deleteCharacter] = useMutation(DELETE_CHARACTER_MUTATION, {
    onCompleted: () => {
      toast.success('Character deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCharacterMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete character ' + id + '?')) {
      deleteCharacter({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Bio</th>
            <th>Description</th>
            <th>User id</th>
            <th>Health</th>
            <th>Max health</th>
            <th>Current items</th>
            <th>Max items</th>
            <th>Luck</th>
            <th>Storage type</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{truncate(character.id)}</td>
              <td>{truncate(character.name)}</td>
              <td>{truncate(character.bio)}</td>
              <td>{truncate(character.description)}</td>
              <td>{truncate(character.userId)}</td>
              <td>{truncate(character.health)}</td>
              <td>{truncate(character.maxHealth)}</td>
              <td>{truncate(character.currentItems)}</td>
              <td>{truncate(character.maxItems)}</td>
              <td>{truncate(character.luck)}</td>
              <td>{truncate(character.storageType)}</td>
              <td>{timeTag(character.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.character({ id: character.id })}
                    title={'Show character ' + character.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCharacter({ id: character.id })}
                    title={'Edit character ' + character.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete character ' + character.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(character.id)}
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

export default CharactersList
