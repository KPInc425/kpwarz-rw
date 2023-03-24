type KPWarzLayoutProps = {
  children?: React.ReactNode
}
import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const KPWarzLayout = ({ children }: KPWarzLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // console.log(currentUser.email)

  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <div className="flex-between">
          <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 hover:text-blue-100 transition duration-100"
              to={routes.home()}
            >
              {' '}
              KPWarz'
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.home()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  {/* <span>Logged in as {currentUser.email}</span>{' '} */}
                  <button type="button" className="py-2 px-4" onClick={logOut}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link className="py-2 px-4" to={routes.login()}>
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              Logged in as {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default KPWarzLayout
