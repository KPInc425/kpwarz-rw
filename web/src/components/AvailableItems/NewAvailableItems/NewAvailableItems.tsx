import type { CreateAvailableItemsInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AvailableItemsForm from 'src/components/AvailableItems/AvailableItemsForm'

const CREATE_AVAILABLE_ITEMS_MUTATION = gql`
  mutation CreateAvailableItemsMutation($input: CreateAvailableItemsInput!) {
    createAvailableItems(input: $input) {
      id
    }
  }
`

const NewAvailableItems = () => {
  const [createAvailableItems, { loading, error }] = useMutation(
    CREATE_AVAILABLE_ITEMS_MUTATION,
    {
      onCompleted: () => {
        toast.success('AvailableItems created')
        navigate(routes.availableItemses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAvailableItemsInput) => {
    createAvailableItems({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AvailableItems</h2>
      </header>
      <div className="rw-segment-main">
        <AvailableItemsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAvailableItems
