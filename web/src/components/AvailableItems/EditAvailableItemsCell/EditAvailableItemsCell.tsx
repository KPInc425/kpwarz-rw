import type {
  EditAvailableItemsById,
  UpdateAvailableItemsInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableItemsForm from 'src/components/AvailableItems/AvailableItemsForm'

export const QUERY = gql`
  query EditAvailableItemsById($id: Int!) {
    availableItems: availableItems(id: $id) {
      id
      name
      description
      type
      ability
      basePrice
      chance
      createdAt
    }
  }
`
const UPDATE_AVAILABLE_ITEMS_MUTATION = gql`
  mutation UpdateAvailableItemsMutation(
    $id: Int!
    $input: UpdateAvailableItemsInput!
  ) {
    updateAvailableItems(id: $id, input: $input) {
      id
      name
      description
      type
      ability
      basePrice
      chance
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  availableItems,
}: CellSuccessProps<EditAvailableItemsById>) => {
  const [updateAvailableItems, { loading, error }] = useMutation(
    UPDATE_AVAILABLE_ITEMS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableItems updated')
        navigate(routes.availableItemses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAvailableItemsInput,
    id: EditAvailableItemsById['availableItems']['id']
  ) => {
    updateAvailableItems({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AvailableItems {availableItems?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AvailableItemsForm
          availableItems={availableItems}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
