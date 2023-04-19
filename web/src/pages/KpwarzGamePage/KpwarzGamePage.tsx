import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import CurrentGameView from 'src/components/CurrentGameView/CurrentGameView'
import GameMenu from 'src/components/GameMenu/GameMenu'

const KpwarzGamePage = ({ id, regionId, characterId }) => {
  const [currentView, setCurrentView] = useState(0)

  const updateCurrentView = (view) => {
    setCurrentView(view)
  }

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

      <div className="grid h-screen grid-cols-6 grid-rows-[repeat(12,minmax(0,1fr))] gap-4">
        <div className="col-span-1 row-span-2">
          <div className="mx-auto h-full w-1/2 rounded-md border-2 border-gray-300">
            Game Logo
          </div>
        </div>
        <div className="col-span-4 col-start-2 row-span-1 rounded-md border-2 border-gray-300">
          Current Status
        </div>
        <div className="col-span-1 col-start-6 row-span-6 rounded-md border-2 border-gray-300">
          News Ticker
        </div>
        <div className="col-span-1 col-start-6 row-span-6 row-start-7 rounded-md border-2 border-gray-300">
          Social Media Ticker
        </div>
        <GameMenu updateCurrentView={updateCurrentView} />
        <div className="row-start-10 col-span-1 col-start-1 row-span-3 rounded-md border-2 border-gray-300">
          Settings/Extra
        </div>
        <CurrentGameView
          currentView={currentView}
          gameId={Number(id)}
          regionId={Number(regionId)}
          characterId={Number(characterId)}
        />
        <div className="col-span-2 col-start-2 row-span-2 row-start-[9] rounded-md border-2 border-gray-300">
          Current Story Plot
        </div>
        <div className="col-span-2 col-start-4 row-span-2 row-start-[9] rounded-md border-2 border-gray-300">
          Current Imagery
        </div>
        <div className="col-span-4 col-start-2 row-span-2 row-start-[11] rounded-md border-2 border-gray-300">
          Current News Update: Some Random Shit! Just went down...
        </div>
      </div>
    </>
  )
}

export default KpwarzGamePage

// {testGrid().map((item, index) => {
//   return (
//     <div key={index} className="rounded-md border-2 border-gray-300">
//       {item}
//     </div>
//   )
// })}
