import type {
  DeleteAvailableRegionMutationVariables,
  FindAvailableRegions,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AvailableRegion/AvailableRegionsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_AVAILABLE_REGION_MUTATION = gql`
  mutation DeleteAvailableRegionMutation($id: Int!) {
    deleteAvailableRegion(id: $id) {
      id
    }
  }
`

const AvailableRegionsList = ({ availableRegions }: FindAvailableRegions) => {
  const [deleteAvailableRegion] = useMutation(
    DELETE_AVAILABLE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableRegion deleted')
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

  const onDeleteClick = (id: DeleteAvailableRegionMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete availableRegion ' + id + '?')
    ) {
      deleteAvailableRegion({ variables: { id } })
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
          {availableRegions.map((availableRegion) => (
            <tr key={availableRegion.id}>
              <td>{truncate(availableRegion.id)}</td>
              <td>{truncate(availableRegion.name)}</td>
              <td>{truncate(availableRegion.description)}</td>
              <td>{timeTag(availableRegion.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.availableRegion({ id: availableRegion.id })}
                    title={
                      'Show availableRegion ' + availableRegion.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAvailableRegion({ id: availableRegion.id })}
                    title={'Edit availableRegion ' + availableRegion.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete availableRegion ' + availableRegion.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(availableRegion.id)}
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

export default AvailableRegionsList
