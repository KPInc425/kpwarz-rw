import type {
  FindCreatecharacterQuery,
  FindCreatecharacterQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCreatecharacterQuery($id: Int!) {
    createcharacter: createcharacter(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindCreatecharacterQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  createcharacter,
}: CellSuccessProps<
  FindCreatecharacterQuery,
  FindCreatecharacterQueryVariables
>) => {
  return <div>{JSON.stringify(createcharacter)}</div>
}
