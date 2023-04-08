import type { FindTestStuffById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TestStuff from 'src/components/TestStuff/TestStuff'

export const QUERY = gql`
  query FindTestStuffById($id: Int!) {
    testStuff: testStuff(id: $id) {
      id
      name
      background
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TestStuff not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ testStuff }: CellSuccessProps<FindTestStuffById>) => {
  return <TestStuff testStuff={testStuff} />
}
