type KpWarzLayoutProps = {
  children?: React.ReactNode
}
import { Link, routes } from '@redwoodjs/router'

const KpWarzLayout = ({ children }: KpWarzLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}> KPWarz'</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default KpWarzLayout
