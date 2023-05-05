import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import KPWarzLoadGameCell from 'src/components/KPWarzLoadGameCell/'

const KPWarzLoadGamePage = () => {
  return (
    <>
      <MetaTags title="KPWarzLoadGame" description="KPWarzLoadGame page" />

      <KPWarzLoadGameCell />
    </>
  )
}

export default KPWarzLoadGamePage
