import { MetaTags } from '@redwoodjs/web'

import KpWarzGamePlayCell from 'src/components/KpWarzGamePlayCell'

const KpwarzGamePage = ({ id, regionId, characterId }) => {
  return (
    <>
      <MetaTags title="KpwarzGame" description="KpwarzGame page" />

      <KpWarzGamePlayCell id={Number(id)} />
    </>
  )
}

export default KpwarzGamePage
