import type { EditRegionById, UpdateRegionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RegionForm from 'src/components/Region/RegionForm'

export const QUERY = gql`
  query EditRegionById($id: Int!) {
    region: region(id: $id) {
      id
      name
      description
      control
      gameId
      createdAt
    }
  }
`
const UPDATE_REGION_MUTATION = gql`
  mutation UpdateRegionMutation($id: Int!, $input: UpdateRegionInput!) {
    updateRegion(id: $id, input: $input) {
      id
      name
      description
      control
      gameId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ region }: CellSuccessProps<EditRegionById>) => {
  const [updateRegion, { loading, error }] = useMutation(
    UPDATE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Region updated')
        navigate(routes.regions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRegionInput,
    id: EditRegionById['region']['id']
  ) => {
    updateRegion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Region {region?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RegionForm
          region={region}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
