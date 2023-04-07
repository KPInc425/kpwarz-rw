type KPWarzLayoutProps = {
  children?: React.ReactNode
}
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

const KPWarzLayout = ({ children }: KPWarzLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // console.log(currentUser?.email)
  const userRoutes = [
    {
      route: routes.home(),
      name: 'Home',
    },
    {
      route: routes.about(),
      name: 'About',
    },
    {
      route: routes.contact(),
      name: 'Contact',
    },
  ]

  return (
    <>
      <Toaster />
      <header className="relative flex items-center justify-between bg-blue-700 py-4 px-8 text-white dark:bg-green-900">
        <div className="flex-between">
          <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-blue-400 transition duration-100 hover:text-blue-100 dark:text-green-400 dark:hover:text-green-100"
              to={routes.home()}
            >
              {' '}
              KPWarz'
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="relative flex items-center font-light">
            {userRoutes.map((userRoute, index) => {
              return (
                <li key={index}>
                  <Link
                    className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600 dark:hover:bg-green-600"
                    to={userRoute.route}
                  >
                    {userRoute.name}
                  </Link>
                </li>
              )
            })}
            <li>
              {isAuthenticated ? (
                <div>
                  {/* <span>Logged in as {currentUser.email}</span>{' '} */}
                  <button
                    type="button"
                    className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600 dark:hover:bg-green-600"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  className="rounded py-2 px-4 transition duration-100 hover:bg-blue-600 dark:hover:bg-green-600"
                  to={routes.login()}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300 dark:text-green-300">
              Logged in as {currentUser?.email}
            </div>
          )}
        </nav>
      </header>
      <main className="bg-white-400 mx-auto mt-4 max-w-4xl rounded-xl p-12 text-slate-900 shadow dark:bg-slate-800 dark:text-slate-200">
        {children}
      </main>
    </>
  )
}

export default KPWarzLayout
