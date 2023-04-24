import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AvailableItems/AvailableItemsesCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteAvailableItemsMutationVariables,
  FindAvailableItemses,
} from 'types/graphql'

const DELETE_AVAILABLE_ITEMS_MUTATION = gql`
  mutation DeleteAvailableItemsMutation($id: Int!) {
    deleteAvailableItems(id: $id) {
      id
    }
  }
`

const AvailableItemsesList = ({ availableItemses }: FindAvailableItemses) => {
  const [deleteAvailableItems] = useMutation(DELETE_AVAILABLE_ITEMS_MUTATION, {
    onCompleted: () => {
      toast.success('AvailableItems deleted')
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

  const onDeleteClick = (id: DeleteAvailableItemsMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete availableItems ' + id + '?')) {
      deleteAvailableItems({ variables: { id } })
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
            <th>Type</th>
            <th>Ability</th>
            <th>Base price</th>
            <th>Chance</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {availableItemses.map((availableItems) => (
            <tr key={availableItems.id}>
              <td>{truncate(availableItems.id)}</td>
              <td>{truncate(availableItems.name)}</td>
              <td>{truncate(availableItems.description)}</td>
              <td>{formatEnum(availableItems.type)}</td>
              <td>{truncate(availableItems.ability)}</td>
              <td>{truncate(availableItems.basePrice)}</td>
              <td>{truncate(availableItems.chance)}</td>
              <td>{timeTag(availableItems.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.availableItems({ id: availableItems.id })}
                    title={
                      'Show availableItems ' + availableItems.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAvailableItems({ id: availableItems.id })}
                    title={'Edit availableItems ' + availableItems.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete availableItems ' + availableItems.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(availableItems.id)}
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

export default AvailableItemsesList
