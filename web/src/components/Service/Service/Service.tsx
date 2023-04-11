import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteServiceMutationVariables,
  FindServiceById,
} from 'types/graphql'

const DELETE_SERVICE_MUTATION = gql`
  mutation DeleteServiceMutation($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`

interface Props {
  service: NonNullable<FindServiceById['service']>
}

const Service = ({ service }: Props) => {
  const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service deleted')
      navigate(routes.services())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteServiceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete service ' + id + '?')) {
      deleteService({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Service {service.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{service.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{service.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{service.description}</td>
            </tr>
            <tr>
              <th>City id</th>
              <td>{service.cityId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(service.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editService({ id: service.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(service.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Service
