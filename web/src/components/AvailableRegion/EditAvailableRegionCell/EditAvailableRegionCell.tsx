import type {
  EditAvailableRegionById,
  UpdateAvailableRegionInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableRegionForm from 'src/components/AvailableRegion/AvailableRegionForm'

export const QUERY = gql`
  query EditAvailableRegionById($id: Int!) {
    availableRegion: availableRegion(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`
const UPDATE_AVAILABLE_REGION_MUTATION = gql`
  mutation UpdateAvailableRegionMutation(
    $id: Int!
    $input: UpdateAvailableRegionInput!
  ) {
    updateAvailableRegion(id: $id, input: $input) {
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
  availableRegion,
}: CellSuccessProps<EditAvailableRegionById>) => {
  const [updateAvailableRegion, { loading, error }] = useMutation(
    UPDATE_AVAILABLE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableRegion updated')
        navigate(routes.availableRegions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAvailableRegionInput,
    id: EditAvailableRegionById['availableRegion']['id']
  ) => {
    updateAvailableRegion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AvailableRegion {availableRegion?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableRegionForm
          availableRegion={availableRegion}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
