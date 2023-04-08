import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AvailableCity/AvailableCitiesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteAvailableCityMutationVariables,
  FindAvailableCities,
} from 'types/graphql'

const DELETE_AVAILABLE_CITY_MUTATION = gql`
  mutation DeleteAvailableCityMutation($id: Int!) {
    deleteAvailableCity(id: $id) {
      id
    }
  }
`

const AvailableCitiesList = ({ availableCities }: FindAvailableCities) => {
  const [deleteAvailableCity] = useMutation(DELETE_AVAILABLE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('AvailableCity deleted')
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

  const onDeleteClick = (id: DeleteAvailableCityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete availableCity ' + id + '?')) {
      deleteAvailableCity({ variables: { id } })
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
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {availableCities.map((availableCity) => (
            <tr key={availableCity.id}>
              <td>{truncate(availableCity.id)}</td>
              <td>{truncate(availableCity.name)}</td>
              <td>{truncate(availableCity.description)}</td>
              <td>{timeTag(availableCity.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.availableCity({ id: availableCity.id })}
                    title={'Show availableCity ' + availableCity.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAvailableCity({ id: availableCity.id })}
                    title={'Edit availableCity ' + availableCity.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete availableCity ' + availableCity.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(availableCity.id)}
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

export default AvailableCitiesList
