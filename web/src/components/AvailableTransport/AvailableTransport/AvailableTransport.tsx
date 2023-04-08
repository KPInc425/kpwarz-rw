import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteAvailableTransportMutationVariables,
  FindAvailableTransportById,
} from 'types/graphql'

const DELETE_AVAILABLE_TRANSPORT_MUTATION = gql`
  mutation DeleteAvailableTransportMutation($id: Int!) {
    deleteAvailableTransport(id: $id) {
      id
    }
  }
`

interface Props {
  availableTransport: NonNullable<
    FindAvailableTransportById['availableTransport']
  >
}

const AvailableTransport = ({ availableTransport }: Props) => {
  const [deleteAvailableTransport] = useMutation(
    DELETE_AVAILABLE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableTransport deleted')
        navigate(routes.availableTransports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteAvailableTransportMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete availableTransport ' + id + '?')
    ) {
      deleteAvailableTransport({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AvailableTransport {availableTransport.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{availableTransport.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{availableTransport.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{availableTransport.description}</td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>{availableTransport.speed}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{availableTransport.price}</td>
            </tr>
            <tr>
              <th>Storage</th>
              <td>{availableTransport.storage}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(availableTransport.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAvailableTransport({ id: availableTransport.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(availableTransport.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AvailableTransport
