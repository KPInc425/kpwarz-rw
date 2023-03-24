import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${month} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
}

const Article = ({ article, summary = false }) => {
  console.log(article)
  return (
    <article>
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <div>Posted on: {formattedDate(article.createdAt)}</div>
      {!summary && (
        <div className="mt-8">
          <CommentsCell />
        </div>
      )}
    </article>
  )
}

export default Article
