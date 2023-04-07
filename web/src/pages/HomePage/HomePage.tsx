import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>And this is where the party begins!</p>
      <h3 className="box-shadow-inset mb-2 border-2 border-black p-6 text-center text-3xl [text-shadow:_0_3px_3px_rgb(0_255_0_/_65%)]">
        KPWarz News!
      </h3>
      <ArticlesCell />
    </>
  )
}

export default HomePage
