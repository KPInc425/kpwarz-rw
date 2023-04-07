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
    <article className="box-shadow-inset rounded-lg border-2 border-black p-8 shadow-2xl drop-shadow">
      <header>
        <h2 className="text-3xl font-semibold text-blue-700 hover:text-blue-400 dark:text-green-700 dark:hover:text-green-400">
          <Link to={routes.article({ id: article.id })}>
            {article.title}
            <sub>
              {' '}
              <span className="text-xs font-normal text-gray-400 dark:text-slate-300">
                by {article.user.name}
              </span>
            </sub>
          </Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900 dark:text-slate-200">
        {summary ? (
          truncate(article.body, 100)
        ) : (
          <>
            <p className="text-base font-thin italic">{article.body}</p>
            <br />
            <div
              className="text-base font-semibold"
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
