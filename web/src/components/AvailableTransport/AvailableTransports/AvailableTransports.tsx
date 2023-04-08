import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AvailableTransport/AvailableTransportsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteAvailableTransportMutationVariables,
  FindAvailableTransports,
} from 'types/graphql'

const DELETE_AVAILABLE_TRANSPORT_MUTATION = gql`
  mutation DeleteAvailableTransportMutation($id: Int!) {
    deleteAvailableTransport(id: $id) {
      id
    }
  }
`

const AvailableTransportsList = ({
  availableTransports,
}: FindAvailableTransports) => {
  const [deleteAvailableTransport] = useMutation(
    DELETE_AVAILABLE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableTransport deleted')
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
    id: DeleteAvailableTransportMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete availableTransport ' + id + '?')
    ) {
      deleteAvailableTransport({ variables: { id } })
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
            <th>Speed</th>
            <th>Price</th>
            <th>Storage</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {availableTransports.map((availableTransport) => (
            <tr key={availableTransport.id}>
              <td>{truncate(availableTransport.id)}</td>
              <td>{truncate(availableTransport.name)}</td>
              <td>{truncate(availableTransport.description)}</td>
              <td>{truncate(availableTransport.speed)}</td>
              <td>{truncate(availableTransport.price)}</td>
              <td>{truncate(availableTransport.storage)}</td>
              <td>{timeTag(availableTransport.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.availableTransport({
                      id: availableTransport.id,
                    })}
                    title={
                      'Show availableTransport ' +
                      availableTransport.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAvailableTransport({
                      id: availableTransport.id,
                    })}
                    title={'Edit availableTransport ' + availableTransport.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete availableTransport ' + availableTransport.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(availableTransport.id)}
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

export default AvailableTransportsList
