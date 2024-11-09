import React, { type FC } from 'react'
import { type Game } from '../../utils/hooks/useFetchGames'
import { useFavorites } from '../../utils/hooks/useFavorites'
import { FaStar } from 'react-icons/fa'

interface GameListProps {
  gameData?: Game[]
}

const GameList: FC<GameListProps> = ({ gameData }: GameListProps) => {
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="container-fluid">
      <div className="row row-cols-4">
        {gameData?.map((game) => (
          <div key={game.id} className="col p-1 position-relative">
            <img
              src={game.img}
              className="card-img-top"
              alt={`${game.name} Icon`}
            />
            <FaStar
              className={`position-absolute top-0 end-0 m-1 ${
                isFavorite(game.id) ? 'text-warning' : 'text-muted'
              }`}
              onClick={async () => { await toggleFavorite(game) }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameList
