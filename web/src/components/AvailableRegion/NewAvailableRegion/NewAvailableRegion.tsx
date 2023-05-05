import type { CreateAvailableRegionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableRegionForm from 'src/components/AvailableRegion/AvailableRegionForm'

const CREATE_AVAILABLE_REGION_MUTATION = gql`
  mutation CreateAvailableRegionMutation($input: CreateAvailableRegionInput!) {
    createAvailableRegion(input: $input) {
      id
    }
  }
`

const NewAvailableRegion = () => {
  const [createAvailableRegion, { loading, error }] = useMutation(
    CREATE_AVAILABLE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableRegion created')
        navigate(routes.availableRegions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAvailableRegionInput) => {
    createAvailableRegion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AvailableRegion</h2>
      </header>
      <div className="rw-segment-main">
        <AvailableRegionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAvailableRegion
