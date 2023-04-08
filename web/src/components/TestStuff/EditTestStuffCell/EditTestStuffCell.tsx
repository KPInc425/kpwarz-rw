import type { EditTestStuffById, UpdateTestStuffInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestStuffForm from 'src/components/TestStuff/TestStuffForm'

export const QUERY = gql`
  query EditTestStuffById($id: Int!) {
    testStuff: testStuff(id: $id) {
      id
      name
      background
      createdAt
    }
  }
`
const UPDATE_TEST_STUFF_MUTATION = gql`
  mutation UpdateTestStuffMutation($id: Int!, $input: UpdateTestStuffInput!) {
    updateTestStuff(id: $id, input: $input) {
      id
      name
      background
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ testStuff }: CellSuccessProps<EditTestStuffById>) => {
  const [updateTestStuff, { loading, error }] = useMutation(
    UPDATE_TEST_STUFF_MUTATION,
    {
      onCompleted: () => {
        toast.success('TestStuff updated')
        navigate(routes.testStuffs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTestStuffInput,
    id: EditTestStuffById['testStuff']['id']
  ) => {
    updateTestStuff({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TestStuff {testStuff?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TestStuffForm
          testStuff={testStuff}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
