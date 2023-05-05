import type {
  DeleteAvailableItemsMutationVariables,
  FindAvailableItemsById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_AVAILABLE_ITEMS_MUTATION = gql`
  mutation DeleteAvailableItemsMutation($id: Int!) {
    deleteAvailableItems(id: $id) {
      id
    }
  }
`

interface Props {
  availableItems: NonNullable<FindAvailableItemsById['availableItems']>
}

const AvailableItems = ({ availableItems }: Props) => {
  const [deleteAvailableItems] = useMutation(DELETE_AVAILABLE_ITEMS_MUTATION, {
    onCompleted: () => {
      toast.success('AvailableItems deleted')
      navigate(routes.availableItemses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAvailableItemsMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete availableItems ' + id + '?')) {
      deleteAvailableItems({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AvailableItems {availableItems.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{availableItems.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{availableItems.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{availableItems.description}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{formatEnum(availableItems.type)}</td>
            </tr>
            <tr>
              <th>Ability</th>
              <td>{availableItems.ability}</td>
            </tr>
            <tr>
              <th>Base price</th>
              <td>{availableItems.basePrice}</td>
            </tr>
            <tr>
              <th>Chance</th>
              <td>{availableItems.chance}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(availableItems.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAvailableItems({ id: availableItems.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(availableItems.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AvailableItems
