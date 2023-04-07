import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TransportForm from 'src/components/Transport/TransportForm'

import type { CreateTransportInput } from 'types/graphql'

const CREATE_TRANSPORT_MUTATION = gql`
  mutation CreateTransportMutation($input: CreateTransportInput!) {
    createTransport(input: $input) {
      id
    }
  }
`

const NewTransport = () => {
  const [createTransport, { loading, error }] = useMutation(
    CREATE_TRANSPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Transport created')
        navigate(routes.transports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTransportInput) => {
    createTransport({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Transport</h2>
      </header>
      <div className="rw-segment-main">
        <TransportForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTransport
