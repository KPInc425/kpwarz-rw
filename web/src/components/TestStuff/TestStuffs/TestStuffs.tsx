import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TestStuff/TestStuffsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteTestStuffMutationVariables,
  FindTestStuffs,
} from 'types/graphql'

const DELETE_TEST_STUFF_MUTATION = gql`
  mutation DeleteTestStuffMutation($id: Int!) {
    deleteTestStuff(id: $id) {
      id
    }
  }
`

const TestStuffsList = ({ testStuffs }: FindTestStuffs) => {
  const [deleteTestStuff] = useMutation(DELETE_TEST_STUFF_MUTATION, {
    onCompleted: () => {
      toast.success('TestStuff deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTestStuffMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete testStuff ' + id + '?')) {
      deleteTestStuff({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Background</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {testStuffs.map((testStuff) => (
            <tr key={testStuff.id}>
              <td>{truncate(testStuff.id)}</td>
              <td>{truncate(testStuff.name)}</td>
              <td>{formatEnum(testStuff.background)}</td>
              <td>{timeTag(testStuff.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.testStuff({ id: testStuff.id })}
                    title={'Show testStuff ' + testStuff.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTestStuff({ id: testStuff.id })}
                    title={'Edit testStuff ' + testStuff.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete testStuff ' + testStuff.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(testStuff.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TestStuffsList
