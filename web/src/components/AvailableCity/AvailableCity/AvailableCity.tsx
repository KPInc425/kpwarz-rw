import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteAvailableCityMutationVariables,
  FindAvailableCityById,
} from 'types/graphql'

const DELETE_AVAILABLE_CITY_MUTATION = gql`
  mutation DeleteAvailableCityMutation($id: Int!) {
    deleteAvailableCity(id: $id) {
      id
    }
  }
`

interface Props {
  availableCity: NonNullable<FindAvailableCityById['availableCity']>
}

const AvailableCity = ({ availableCity }: Props) => {
  const [deleteAvailableCity] = useMutation(DELETE_AVAILABLE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('AvailableCity deleted')
      navigate(routes.availableCities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAvailableCityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete availableCity ' + id + '?')) {
      deleteAvailableCity({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AvailableCity {availableCity.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{availableCity.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{availableCity.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{availableCity.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(availableCity.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAvailableCity({ id: availableCity.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(availableCity.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AvailableCity
