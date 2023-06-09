import type { DeleteGameMutationVariables, FindGames } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Game/GamesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: Int!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const GamesList = ({ games }: FindGames) => {
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game deleted')
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

  const onDeleteClick = (id: DeleteGameMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start location</th>
            <th>Current location</th>
            <th>Current city</th>
            <th>Max days</th>
            <th>Current day</th>
            <th>Time of day</th>
            <th>Character id</th>
            <th>User id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{truncate(game.id)}</td>
              <td>{truncate(game.name)}</td>
              <td>{truncate(game.description)}</td>
              <td>{truncate(game.startLocation)}</td>
              <td>{truncate(game.currentRegionId)}</td>
              <td>{truncate(game.currentCity.name)}</td>
              <td>{truncate(game.maxDays)}</td>
              <td>{truncate(game.currentDay)}</td>
              <td>{truncate(game.timeOfDay)}</td>
              <td>{truncate(game.characterId)}</td>
              <td>{truncate(game.userId)}</td>
              <td>{timeTag(game.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.game({ id: game.id })}
                    title={'Show game ' + game.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGame({ id: game.id })}
                    title={'Edit game ' + game.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete game ' + game.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(game.id)}
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

export default GamesList
