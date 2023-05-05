import { MetaTags } from '@redwoodjs/web'

import KpWarzGamePlayCell from 'src/components/KpWarzGamePlayCell'

const KpwarzGamePage = ({ id }) => {
  return (
    <>
      <MetaTags title="KPWarzGame" description="KPWarzGame page" />

      <KpWarzGamePlayCell id={Number(id)} />
    </>
  )
}

export default KpwarzGamePage
