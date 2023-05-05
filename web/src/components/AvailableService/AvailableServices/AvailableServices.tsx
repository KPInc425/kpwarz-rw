import type {
  DeleteAvailableServiceMutationVariables,
  FindAvailableServices,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AvailableService/AvailableServicesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_AVAILABLE_SERVICE_MUTATION = gql`
  mutation DeleteAvailableServiceMutation($id: Int!) {
    deleteAvailableService(id: $id) {
      id
    }
  }
`

const AvailableServicesList = ({
  availableServices,
}: FindAvailableServices) => {
  const [deleteAvailableService] = useMutation(
    DELETE_AVAILABLE_SERVICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableService deleted')
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

  const onDeleteClick = (id: DeleteAvailableServiceMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete availableService ' + id + '?')
    ) {
      deleteAvailableService({ variables: { id } })
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
          {availableServices.map((availableService) => (
            <tr key={availableService.id}>
              <td>{truncate(availableService.id)}</td>
              <td>{truncate(availableService.name)}</td>
              <td>{truncate(availableService.description)}</td>
              <td>{timeTag(availableService.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.availableService({ id: availableService.id })}
                    title={
                      'Show availableService ' + availableService.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAvailableService({
                      id: availableService.id,
                    })}
                    title={'Edit availableService ' + availableService.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete availableService ' + availableService.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(availableService.id)}
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

export default AvailableServicesList
