import React, { type FC } from 'react'

import { type Game } from '../../utils/hooks/useFetchGames'

interface GameListProps {
  gameData?: Game[]
}

const GameList: FC<GameListProps> = ({ gameData }: GameListProps) => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-4">
        {gameData?.map((game) => (
          <div key={game.id} className="col p-1">
            <img
              src={game.img}
              className="card-img-top"
              alt={`${game.name} Icon`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameList
