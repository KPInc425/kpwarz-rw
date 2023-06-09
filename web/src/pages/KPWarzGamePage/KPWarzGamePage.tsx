import { MetaTags } from '@redwoodjs/web'

import KPWarzGamePlayCell from 'src/components/KPWarzGamePlayCell'

const KPWarzGamePage = ({ id }) => {
  return (
    <>
      <MetaTags title="KPWarzGame" description="KPWarzGame page" />

      <KPWarzGamePlayCell id={Number(id)} />
    </>
  )
}

export default KPWarzGamePage
