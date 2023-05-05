import type {
  DeleteTransportMutationVariables,
  FindTransports,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Transport/TransportsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_TRANSPORT_MUTATION = gql`
  mutation DeleteTransportMutation($id: Int!) {
    deleteTransport(id: $id) {
      id
    }
  }
`

const TransportsList = ({ transports }: FindTransports) => {
  const [deleteTransport] = useMutation(DELETE_TRANSPORT_MUTATION, {
    onCompleted: () => {
      toast.success('Transport deleted')
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

  const onDeleteClick = (id: DeleteTransportMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete transport ' + id + '?')) {
      deleteTransport({ variables: { id } })
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
            <th>Character id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {transports.map((transport) => (
            <tr key={transport.id}>
              <td>{truncate(transport.id)}</td>
              <td>{truncate(transport.name)}</td>
              <td>{truncate(transport.description)}</td>
              <td>{truncate(transport.speed)}</td>
              <td>{truncate(transport.price)}</td>
              <td>{truncate(transport.storage)}</td>
              <td>{truncate(transport.characterId)}</td>
              <td>{timeTag(transport.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.transport({ id: transport.id })}
                    title={'Show transport ' + transport.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTransport({ id: transport.id })}
                    title={'Edit transport ' + transport.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete transport ' + transport.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(transport.id)}
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

export default TransportsList
