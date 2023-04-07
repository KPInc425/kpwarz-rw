import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCharacterMutationVariables,
  FindCharacterById,
} from 'types/graphql'

const DELETE_CHARACTER_MUTATION = gql`
  mutation DeleteCharacterMutation($id: Int!) {
    deleteCharacter(id: $id) {
      id
    }
  }
`

interface Props {
  character: NonNullable<FindCharacterById['character']>
}

const Character = ({ character }: Props) => {
  const [deleteCharacter] = useMutation(DELETE_CHARACTER_MUTATION, {
    onCompleted: () => {
      toast.success('Character deleted')
      navigate(routes.characters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCharacterMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete character ' + id + '?')) {
      deleteCharacter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Character {character.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{character.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{character.name}</td>
            </tr>
            <tr>
              <th>Bio</th>
              <td>{character.bio}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{character.description}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{character.userId}</td>
            </tr>
            <tr>
              <th>Health</th>
              <td>{character.health}</td>
            </tr>
            <tr>
              <th>Max health</th>
              <td>{character.maxHealth}</td>
            </tr>
            <tr>
              <th>Current items</th>
              <td>{character.currentItems}</td>
            </tr>
            <tr>
              <th>Max items</th>
              <td>{character.maxItems}</td>
            </tr>
            <tr>
              <th>Luck</th>
              <td>{character.luck}</td>
            </tr>
            <tr>
              <th>Storage type</th>
              <td>{character.storageType}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(character.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCharacter({ id: character.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(character.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Character
