import { Container, Text } from '@chakra-ui/react'
import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { sortById } from 'src/lib/sortById'

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
    <img className="mx-auto block" src="https://i.imgur.com/koKqpPx.gif" />
    Loading...
  </div>
)

export const Empty = () => (
  <Container
    maxW={'container.lg'}
    p={4}
    border={'2px outset rgba(0,0,0,0.25)'}
    borderRadius={'1rem'}
  >
    <Text textAlign={'center'}>
      These are not the droids you are looking for...
    </Text>
  </Container>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  const sortedArticles = [...articles].sort(sortById)
  return (
    <div className="max-h-[60vh] space-y-10 overflow-auto border-2 border-black p-4 shadow-lg">
      {sortedArticles.reverse().map((article) => (
        <Article key={article.id} article={article} summary={true} />
      ))}
    </div>
  )
}
