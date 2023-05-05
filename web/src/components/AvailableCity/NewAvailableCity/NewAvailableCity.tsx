import type { CreateAvailableCityInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableCityForm from 'src/components/AvailableCity/AvailableCityForm'

const CREATE_AVAILABLE_CITY_MUTATION = gql`
  mutation CreateAvailableCityMutation($input: CreateAvailableCityInput!) {
    createAvailableCity(input: $input) {
      id
    }
  }
`

const NewAvailableCity = () => {
  const [createAvailableCity, { loading, error }] = useMutation(
    CREATE_AVAILABLE_CITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableCity created')
        navigate(routes.availableCities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAvailableCityInput) => {
    createAvailableCity({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AvailableCity</h2>
      </header>
      <div className="rw-segment-main">
        <AvailableCityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAvailableCity
