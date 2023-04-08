import type { FindTestStuffs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TestStuffs from 'src/components/TestStuff/TestStuffs'

export const QUERY = gql`
  query FindTestStuffs {
    testStuffs {
      id
      name
      background
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No testStuffs yet. '}
      <Link to={routes.newTestStuff()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ testStuffs }: CellSuccessProps<FindTestStuffs>) => {
  return <TestStuffs testStuffs={testStuffs} />
}
