import type {
  DeleteAvailableServiceMutationVariables,
  FindAvailableServiceById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_AVAILABLE_SERVICE_MUTATION = gql`
  mutation DeleteAvailableServiceMutation($id: Int!) {
    deleteAvailableService(id: $id) {
      id
    }
  }
`

interface Props {
  availableService: NonNullable<FindAvailableServiceById['availableService']>
}

const AvailableService = ({ availableService }: Props) => {
  const [deleteAvailableService] = useMutation(
    DELETE_AVAILABLE_SERVICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableService deleted')
        navigate(routes.availableServices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteAvailableServiceMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete availableService ' + id + '?')
    ) {
      deleteAvailableService({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AvailableService {availableService.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{availableService.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{availableService.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{availableService.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(availableService.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAvailableService({ id: availableService.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(availableService.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AvailableService
