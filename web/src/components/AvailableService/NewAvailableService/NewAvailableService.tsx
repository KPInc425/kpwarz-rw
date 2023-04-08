import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableServiceForm from 'src/components/AvailableService/AvailableServiceForm'

import type { CreateAvailableServiceInput } from 'types/graphql'

const CREATE_AVAILABLE_SERVICE_MUTATION = gql`
  mutation CreateAvailableServiceMutation(
    $input: CreateAvailableServiceInput!
  ) {
    createAvailableService(input: $input) {
      id
    }
  }
`

const NewAvailableService = () => {
  const [createAvailableService, { loading, error }] = useMutation(
    CREATE_AVAILABLE_SERVICE_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableService created')
        navigate(routes.availableServices())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAvailableServiceInput) => {
    createAvailableService({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New AvailableService
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableServiceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAvailableService
