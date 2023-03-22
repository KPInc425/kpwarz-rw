import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <h1>About Page</h1>
      <p>
        This site was created to build a Drug Dealer Trade Simlulator, get ready
        to become infamous....again!
      </p>
      <Link to={routes.home()}>Return Home</Link>
    </>
  )
}

export default AboutPage
