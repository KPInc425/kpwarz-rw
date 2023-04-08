import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestStuffForm from 'src/components/TestStuff/TestStuffForm'

import type { CreateTestStuffInput } from 'types/graphql'

const CREATE_TEST_STUFF_MUTATION = gql`
  mutation CreateTestStuffMutation($input: CreateTestStuffInput!) {
    createTestStuff(input: $input) {
      id
    }
  }
`

const NewTestStuff = () => {
  const [createTestStuff, { loading, error }] = useMutation(
    CREATE_TEST_STUFF_MUTATION,
    {
      onCompleted: () => {
        toast.success('TestStuff created')
        navigate(routes.testStuffs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTestStuffInput) => {
    createTestStuff({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TestStuff</h2>
      </header>
      <div className="rw-segment-main">
        <TestStuffForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTestStuff
