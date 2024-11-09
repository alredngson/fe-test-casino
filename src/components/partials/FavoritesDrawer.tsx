import React, { type FC, useEffect } from 'react'
import { useFavorites } from '../../utils/hooks/useFavorites'

const FavoritesDrawer: FC = () => {
  const { favorites, initializeFavorites } = useFavorites()

  useEffect(() => {
    const drawer = document.getElementById('favoritesDrawer')

    const handleOpen = async () => {
      await initializeFavorites()
    }
    drawer?.addEventListener('shown.bs.offcanvas', handleOpen)

    return () => {
      drawer?.removeEventListener('shown.bs.offcanvas', handleOpen)
    }
  }, [initializeFavorites])

  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex={-1}
      id="favoritesDrawer"
      aria-labelledby="favoritesDrawerLabel"
      style={{ height: '75vh' }}
    >
      <div
        className="offcanvas-header"
        style={{ backgroundColor: '#00A6FF', color: 'white' }}
      >
        <h5 className="offcanvas-title" id="favoritesDrawerLabel">
          Favorite Games
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="row row-cols-2 g-2">
          {favorites.map((game) => (
            <div key={game.id} className="col">
              <div className="card p-2 shadow-sm h-100 rounded-3 border d-flex justify-content-center align-items-center">
                <img
                  src={game.img}
                  alt={`${game.name} icon`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesDrawer
