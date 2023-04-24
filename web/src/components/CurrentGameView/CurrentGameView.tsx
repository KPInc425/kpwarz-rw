import GameBlackMarket from '../GameBlackMarket/GameBlackMarket'
import GameDarkWeb from '../GameDarkWeb/GameDarkWeb'
import LegitimateStores from '../LegitimateStores/LegitimateStores'
import PlayerActions from '../PlayerActions/PlayerActions'
import PlayerFinances from '../PlayerFinances/PlayerFinances'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import PlayerInventory from '../PlayerInventory/PlayerInventory'
import Trader from '../Trader/Trader'
import Travel from '../Travel/Travel'

const CurrentGameView = ({
  currentView,
  gameId,
  regionId,
  characterId,
  cityId,
}) => {
  return (
    <div className="col-span-4 col-start-2 row-[span_7_/_span_7] row-start-2 rounded-md border-2 border-gray-300">
      Current View
      {currentView === 0 && <PlayerInfo id={characterId} />}
      {currentView === 1 && <PlayerInventory />}
      {currentView === 2 && <PlayerActions />}
      {currentView === 3 && <Trader id={cityId} />}
      {currentView === 4 && <Travel id={regionId} />}
      {currentView === 5 && <LegitimateStores />}
      {currentView === 6 && <PlayerFinances />}
      {currentView === 7 && <GameDarkWeb />}
      {currentView === 8 && <GameBlackMarket />}
    </div>
  )
}

export default CurrentGameView
