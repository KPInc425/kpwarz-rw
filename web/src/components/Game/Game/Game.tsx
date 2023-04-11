import type { DeleteGameMutationVariables, FindGameById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: Int!) {
    deleteGame(id: $id) {
      id
    }
  }
`

interface Props {
  game: NonNullable<FindGameById['game']>
}

const Game = ({ game }: Props) => {
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game deleted')
      navigate(routes.games())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteGameMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Game {game.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{game.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{game.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{game.description}</td>
            </tr>
            <tr>
              <th>Start location</th>
              <td>{game.startLocation}</td>
            </tr>
            <tr>
              <th>Current Region ID</th>
              <td>{game.currentRegionId}</td>
            </tr>
            <tr>
              <th>Current city</th>
              <td>{game.currentCity}</td>
            </tr>
            <tr>
              <th>Max days</th>
              <td>{game.maxDays}</td>
            </tr>
            <tr>
              <th>Current day</th>
              <td>{game.currentDay}</td>
            </tr>
            <tr>
              <th>Time of day</th>
              <td>{game.timeOfDay}</td>
            </tr>
            <tr>
              <th>Character id</th>
              <td>{game.characterId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{game.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(game.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGame({ id: game.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(game.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Game
