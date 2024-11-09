import React, { type FC } from 'react'

import useFetchGames from '../../utils/hooks/useFetchGames'

interface ContentSectionSectionProps {
  category: string
}

const ContentSection: FC<ContentSectionSectionProps> = ({
  category
}: ContentSectionSectionProps) => {
  const { gameData, loading } = useFetchGames(category)

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-4">
          {[...Array(12)].map((index) => (
            <div key={index} className="col p-1">
              <div className="placeholder-glow">
                <div
                  className="placeholder col-12 rounded"
                  style={{ height: '75px' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <div className="row row-cols-4">
        {gameData.map((game) => (
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

export default ContentSection
