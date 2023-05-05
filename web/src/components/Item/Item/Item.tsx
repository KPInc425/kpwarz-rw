import type { DeleteItemMutationVariables, FindItemById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`

interface Props {
  item: NonNullable<FindItemById['item']>
}

const Item = ({ item }: Props) => {
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item deleted')
      navigate(routes.items())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete item ' + id + '?')) {
      deleteItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Item {item.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{item.quantity}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{item.price}</td>
            </tr>
            <tr>
              <th>Quality</th>
              <td>{item.quality}</td>
            </tr>
            <tr>
              <th>Ability</th>
              <td>{item.ability}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{item.description}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{item.type}</td>
            </tr>
            <tr>
              <th>Uses</th>
              <td>{item.uses}</td>
            </tr>
            <tr>
              <th>Character id</th>
              <td>{item.characterId}</td>
            </tr>
            <tr>
              <th>Game id</th>
              <td>{item.gameId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(item.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editItem({ id: item.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(item.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Item
