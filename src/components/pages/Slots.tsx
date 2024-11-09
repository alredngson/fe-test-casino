import React, { type ReactElement } from 'react'

import {
  BottomNav,
  CarouselBanner,
  MidNav,
  NotifText,
  TopNav,
  GameList,
  GameListSkeleton
} from '../partials'

import { useFetchGames } from '../../utils/hooks/useFetchGames'

const Slots = (): ReactElement => {
  const { gameData, loading } = useFetchGames('slots')

  return (
    <>
      <div id="app" className="d-flex flex-column min-vh-100 p-1">
        <div className="row row-cols-1">
          <div className="col py-1">
            <TopNav />
          </div>
          <div className="col py-1">
            <CarouselBanner />
          </div>
          <div className="col py-1">
            <NotifText />
          </div>
          <div className="col">
            <MidNav />
          </div>
          <div className="col">
            {loading ? <GameListSkeleton /> : <GameList gameData={gameData} />}
          </div>
        </div>
        <div className="mt-auto">
          <BottomNav />
        </div>
      </div>
    </>
  )
}

export default Slots
