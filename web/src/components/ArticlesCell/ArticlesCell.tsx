import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      richBody
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => (
  <div>
    <img src="https://i.imgur.com/koKqpPx.gif" />
    Loading...
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <div className="space-y-10">
      {articles
        .slice(0)
        .reverse()
        .map((article) => (
          <Article key={article.id} article={article} summary={true} />
        ))}
    </div>
  )
}
