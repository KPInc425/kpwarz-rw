import type {
  EditAvailableCityById,
  UpdateAvailableCityInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableCityForm from 'src/components/AvailableCity/AvailableCityForm'

export const QUERY = gql`
  query EditAvailableCityById($id: Int!) {
    availableCity: availableCity(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`
const UPDATE_AVAILABLE_CITY_MUTATION = gql`
  mutation UpdateAvailableCityMutation(
    $id: Int!
    $input: UpdateAvailableCityInput!
  ) {
    updateAvailableCity(id: $id, input: $input) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableCity,
}: CellSuccessProps<EditAvailableCityById>) => {
  const [updateAvailableCity, { loading, error }] = useMutation(
    UPDATE_AVAILABLE_CITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableCity updated')
        navigate(routes.availableCities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAvailableCityInput,
    id: EditAvailableCityById['availableCity']['id']
  ) => {
    updateAvailableCity({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AvailableCity {availableCity?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableCityForm
          availableCity={availableCity}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
