import type {
  EditAvailableServiceById,
  UpdateAvailableServiceInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableServiceForm from 'src/components/AvailableService/AvailableServiceForm'

export const QUERY = gql`
  query EditAvailableServiceById($id: Int!) {
    availableService: availableService(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`
const UPDATE_AVAILABLE_SERVICE_MUTATION = gql`
  mutation UpdateAvailableServiceMutation(
    $id: Int!
    $input: UpdateAvailableServiceInput!
  ) {
    updateAvailableService(id: $id, input: $input) {
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
  availableService,
}: CellSuccessProps<EditAvailableServiceById>) => {
  const [updateAvailableService, { loading, error }] = useMutation(
    UPDATE_AVAILABLE_SERVICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableService updated')
        navigate(routes.availableServices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAvailableServiceInput,
    id: EditAvailableServiceById['availableService']['id']
  ) => {
    updateAvailableService({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AvailableService {availableService?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableServiceForm
          availableService={availableService}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
