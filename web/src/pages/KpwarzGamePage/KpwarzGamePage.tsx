import { MetaTags } from '@redwoodjs/web'

import KpWarzGamePlayCell from 'src/components/KpWarzGamePlayCell'

const KpwarzGamePage = ({ id, regionId, characterId }) => {
  const testGrid = () => {
    const grid = []
    for (let i = 0; i < 72; i++) {
      grid.push('#')
    }
    return grid
  }
  return (
    <>
      <MetaTags title="KpwarzGame" description="KpwarzGame page" />

      <KpWarzGamePlayCell id={Number(id)} />
    </>
  )
}

export default KpwarzGamePage
