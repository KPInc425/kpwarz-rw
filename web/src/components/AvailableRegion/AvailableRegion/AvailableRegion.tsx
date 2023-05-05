import type {
  DeleteAvailableRegionMutationVariables,
  FindAvailableRegionById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_AVAILABLE_REGION_MUTATION = gql`
  mutation DeleteAvailableRegionMutation($id: Int!) {
    deleteAvailableRegion(id: $id) {
      id
    }
  }
`

interface Props {
  availableRegion: NonNullable<FindAvailableRegionById['availableRegion']>
}

const AvailableRegion = ({ availableRegion }: Props) => {
  const [deleteAvailableRegion] = useMutation(
    DELETE_AVAILABLE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableRegion deleted')
        navigate(routes.availableRegions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AvailableRegion {availableRegion.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{availableRegion.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{availableRegion.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{availableRegion.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(availableRegion.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAvailableRegion({ id: availableRegion.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(availableRegion.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AvailableRegion
