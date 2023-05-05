import type { CreateAvailableTransportInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableTransportForm from 'src/components/AvailableTransport/AvailableTransportForm'

const CREATE_AVAILABLE_TRANSPORT_MUTATION = gql`
  mutation CreateAvailableTransportMutation(
    $input: CreateAvailableTransportInput!
  ) {
    createAvailableTransport(input: $input) {
      id
    }
  }
`

const NewAvailableTransport = () => {
  const [createAvailableTransport, { loading, error }] = useMutation(
    CREATE_AVAILABLE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableTransport created')
        navigate(routes.availableTransports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAvailableTransportInput) => {
    createAvailableTransport({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New AvailableTransport
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableTransportForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewAvailableTransport
