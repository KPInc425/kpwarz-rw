import type {
  EditAvailableTransportById,
  UpdateAvailableTransportInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableTransportForm from 'src/components/AvailableTransport/AvailableTransportForm'

export const QUERY = gql`
  query EditAvailableTransportById($id: Int!) {
    availableTransport: availableTransport(id: $id) {
      id
      name
      description
      speed
      price
      storage
      createdAt
    }
  }
`
const UPDATE_AVAILABLE_TRANSPORT_MUTATION = gql`
  mutation UpdateAvailableTransportMutation(
    $id: Int!
    $input: UpdateAvailableTransportInput!
  ) {
    updateAvailableTransport(id: $id, input: $input) {
      id
      name
      description
      speed
      price
      storage
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableTransport,
}: CellSuccessProps<EditAvailableTransportById>) => {
  const [updateAvailableTransport, { loading, error }] = useMutation(
    UPDATE_AVAILABLE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableTransport updated')
        navigate(routes.availableTransports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAvailableTransportInput,
    id: EditAvailableTransportById['availableTransport']['id']
  ) => {
    updateAvailableTransport({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AvailableTransport {availableTransport?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableTransportForm
          availableTransport={availableTransport}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
