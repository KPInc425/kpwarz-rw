import type { DeleteCityMutationVariables, FindCities } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/City/CitiesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_CITY_MUTATION = gql`
  mutation DeleteCityMutation($id: Int!) {
    deleteCity(id: $id) {
      id
    }
  }
`

const CitiesList = ({ cities }: FindCities) => {
  const [deleteCity] = useMutation(DELETE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City deleted')
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

  const onDeleteClick = (id: DeleteCityMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete city ' + id + '?')) {
      deleteCity({ variables: { id } })
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
            <th>Avg quality</th>
            <th>Avg price</th>
            <th>Min quantity</th>
            <th>Max quantity</th>
            <th>Authority presence</th>
            <th>Region id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{truncate(city.id)}</td>
              <td>{truncate(city.name)}</td>
              <td>{truncate(city.description)}</td>
              <td>{truncate(city.avgQuality)}</td>
              <td>{truncate(city.avgPrice)}</td>
              <td>{truncate(city.minQuantity)}</td>
              <td>{truncate(city.maxQuantity)}</td>
              <td>{truncate(city.authorityPresence)}</td>
              <td>{truncate(city.regionId)}</td>
              <td>{timeTag(city.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.city({ id: city.id })}
                    title={'Show city ' + city.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCity({ id: city.id })}
                    title={'Edit city ' + city.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete city ' + city.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(city.id)}
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

export default CitiesList
