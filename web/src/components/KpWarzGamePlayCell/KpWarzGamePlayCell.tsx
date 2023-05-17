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
  const [currentView, setCurrentView] = useState(3)

  const updateCurrentView = (view) => {
    setCurrentView(view)
  }
  return (
    <div>
      <CharacterStatusCell id={KPWarzGamePlay.characterId} />
      <CurrentGameView
        currentView={currentView}
        gameId={Number(KPWarzGamePlay.id)}
        regionId={Number(KPWarzGamePlay.currentRegionId)}
        characterId={Number(KPWarzGamePlay.characterId)}
        cityId={Number(KPWarzGamePlay.currentCity.id)}
        merchantId={Number(KPWarzGamePlay.currentCity.merchantId)}
      />
      <GameMenu updateCurrentView={updateCurrentView} />
    </div>
  )
}
