import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteRegionMutationVariables,
  FindRegionById,
} from 'types/graphql'

const DELETE_REGION_MUTATION = gql`
  mutation DeleteRegionMutation($id: Int!) {
    deleteRegion(id: $id) {
      id
    }
  }
`

interface Props {
  region: NonNullable<FindRegionById['region']>
}

const Region = ({ region }: Props) => {
  const [deleteRegion] = useMutation(DELETE_REGION_MUTATION, {
    onCompleted: () => {
      toast.success('Region deleted')
      navigate(routes.regions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRegionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete region ' + id + '?')) {
      deleteRegion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Region {region.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{region.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{region.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{region.description}</td>
            </tr>
            <tr>
              <th>Control</th>
              <td>{region.control}</td>
            </tr>
            <tr>
              <th>Game id</th>
              <td>{region.gameId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(region.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRegion({ id: region.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(region.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Region
