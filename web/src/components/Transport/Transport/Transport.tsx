import type {
  DeleteTransportMutationVariables,
  FindTransportById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_TRANSPORT_MUTATION = gql`
  mutation DeleteTransportMutation($id: Int!) {
    deleteTransport(id: $id) {
      id
    }
  }
`

interface Props {
  transport: NonNullable<FindTransportById['transport']>
}

const Transport = ({ transport }: Props) => {
  const [deleteTransport] = useMutation(DELETE_TRANSPORT_MUTATION, {
    onCompleted: () => {
      toast.success('Transport deleted')
      navigate(routes.transports())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTransportMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete transport ' + id + '?')) {
      deleteTransport({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Transport {transport.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{transport.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{transport.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{transport.description}</td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>{transport.speed}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{transport.price}</td>
            </tr>
            <tr>
              <th>Storage</th>
              <td>{transport.storage}</td>
            </tr>
            <tr>
              <th>Character id</th>
              <td>{transport.characterId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(transport.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTransport({ id: transport.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(transport.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Transport
