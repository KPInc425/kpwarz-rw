import type {
  DeleteTestStuffMutationVariables,
  FindTestStuffById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

const DELETE_TEST_STUFF_MUTATION = gql`
  mutation DeleteTestStuffMutation($id: Int!) {
    deleteTestStuff(id: $id) {
      id
    }
  }
`

interface Props {
  testStuff: NonNullable<FindTestStuffById['testStuff']>
}

const TestStuff = ({ testStuff }: Props) => {
  const [deleteTestStuff] = useMutation(DELETE_TEST_STUFF_MUTATION, {
    onCompleted: () => {
      toast.success('TestStuff deleted')
      navigate(routes.testStuffs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTestStuffMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete testStuff ' + id + '?')) {
      deleteTestStuff({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TestStuff {testStuff.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{testStuff.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{testStuff.name}</td>
            </tr>
            <tr>
              <th>Background</th>
              <td>{formatEnum(testStuff.background)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(testStuff.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTestStuff({ id: testStuff.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(testStuff.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TestStuff
