import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'
import serializeSlateJsonToHtml from 'src/lib/slate-serialize'

import CommentForm from '../CommentForm/CommentForm'

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
  console.log(typeof article.body)

  return (
    <article>
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          <span className="ml-2 font-normal text-gray-400">
            by {article.user.name}
          </span>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? (
          truncate(article.body, 100)
        ) : (
          <>
            <p>{article.body}</p>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: serializeSlateJsonToHtml(article.richBody),
              }}
            ></div>
          </>
        )}
      </div>
      <div>Posted on: {formattedDate(article.createdAt)}</div>
      {!summary && (
        <div className="mt-8">
          <CommentForm postId={article.id} />
          <div className="mt-8">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
