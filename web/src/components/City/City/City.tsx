import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteCityMutationVariables, FindCityById } from 'types/graphql'

const DELETE_CITY_MUTATION = gql`
  mutation DeleteCityMutation($id: Int!) {
    deleteCity(id: $id) {
      id
    }
  }
`

interface Props {
  city: NonNullable<FindCityById['city']>
}

const City = ({ city }: Props) => {
  const [deleteCity] = useMutation(DELETE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City deleted')
      navigate(routes.cities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete city ' + id + '?')) {
      deleteCity({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            City {city.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{city.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{city.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{city.description}</td>
            </tr>
            <tr>
              <th>Avg quality</th>
              <td>{city.avgQuality}</td>
            </tr>
            <tr>
              <th>Avg price</th>
              <td>{city.avgPrice}</td>
            </tr>
            <tr>
              <th>Min quantity</th>
              <td>{city.minQuantity}</td>
            </tr>
            <tr>
              <th>Max quantity</th>
              <td>{city.maxQuantity}</td>
            </tr>
            <tr>
              <th>Authority presence</th>
              <td>{city.authorityPresence}</td>
            </tr>
            <tr>
              <th>Region id</th>
              <td>{city.regionId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(city.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCity({ id: city.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(city.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default City
