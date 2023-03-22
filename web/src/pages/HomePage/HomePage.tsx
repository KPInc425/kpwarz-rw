import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <p>And this is where the party begins!</p>
      <ArticlesCell />
    </>
  )
}

export default HomePage
