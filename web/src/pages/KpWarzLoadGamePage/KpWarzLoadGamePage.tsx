import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import KpWarzLoadGameCell from 'src/components/KpWarzLoadGameCell/'

const KpWarzLoadGamePage = () => {
  return (
    <>
      <MetaTags title="KpWarzLoadGame" description="KpWarzLoadGame page" />

      <KpWarzLoadGameCell />
    </>
  )
}

export default KpWarzLoadGamePage
