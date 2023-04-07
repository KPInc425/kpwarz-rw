import type { EditTransportById, UpdateTransportInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TransportForm from 'src/components/Transport/TransportForm'

export const QUERY = gql`
  query EditTransportById($id: Int!) {
    transport: transport(id: $id) {
      id
      name
      description
      speed
      price
      storage
      characterId
      createdAt
    }
  }
`
const UPDATE_TRANSPORT_MUTATION = gql`
  mutation UpdateTransportMutation($id: Int!, $input: UpdateTransportInput!) {
    updateTransport(id: $id, input: $input) {
      id
      name
      description
      speed
      price
      storage
      characterId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ transport }: CellSuccessProps<EditTransportById>) => {
  const [updateTransport, { loading, error }] = useMutation(
    UPDATE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Transport updated')
        navigate(routes.transports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTransportInput,
    id: EditTransportById['transport']['id']
  ) => {
    updateTransport({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Transport {transport?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TransportForm
          transport={transport}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
