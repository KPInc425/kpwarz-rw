import { useState } from 'react'

import type {
  FindKPWarzGamePlayQuery,
  FindKPWarzGamePlayQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CurrentGameView from 'src/components/CurrentGameView/CurrentGameView'
import GameMenu from 'src/components/GameMenu/GameMenu'

import CharacterStatusCell from '../CharacterStatusCell/CharacterStatusCell'

export const QUERY = gql`
  query FindKPWarzGamePlayQuery($id: Int!) {
    KPWarzGamePlay: getGameInfo(id: $id) {
      id
      name
      description
      currentRegionId
      currentCity {
        id
        name
        merchantId
      }
      currentDay
      timeOfDay
      maxDays
      characterId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>These are not the droids you are looking for...</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindKPWarzGamePlayQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  KPWarzGamePlay,
}: CellSuccessProps<
  FindKPWarzGamePlayQuery,
  FindKPWarzGamePlayQueryVariables
>) => {
  const [currentView, setCurrentView] = useState(0)

  const updateCurrentView = (view) => {
    setCurrentView(view)
  }
  return (
    <div className="grid h-screen grid-cols-6 grid-rows-[repeat(12,minmax(0,1fr))] gap-4">
      <div className="col-span-1 row-span-2">
        <div className="mx-auto h-full w-1/2 rounded-md border-2 border-gray-300">
          Game Logo
        </div>
      </div>
      <div className="col-span-4 col-start-2 row-span-1 rounded-md border-2 border-gray-300">
        <CharacterStatusCell id={KPWarzGamePlay.characterId} />
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
        gameId={Number(KPWarzGamePlay.id)}
        regionId={Number(KPWarzGamePlay.currentRegionId)}
        characterId={Number(KPWarzGamePlay.characterId)}
        cityId={Number(KPWarzGamePlay.currentCity.id)}
        merchantId={Number(KPWarzGamePlay.currentCity.merchantId)}
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
  )
}
