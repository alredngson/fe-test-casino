import { useState, useEffect } from 'react'
import localforage from 'localforage'
import { type Game } from './useFetchGames'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Game[]>([])

  const initializeFavorites = async () => {
    try {
      const storedFavorites = await localforage.getItem<Game[]>('favorites')
      if (storedFavorites != null) {
        setFavorites(storedFavorites)
      }
    } catch (error) {
      console.error('Failed to load favorites:', error)
    }
  }

  useEffect(() => {
    initializeFavorites()
  }, [])

  const toggleFavorite = async (game: Game) => {
    const updatedFavorites = favorites.some((fav) => fav.id === game.id)
      ? favorites.filter((fav) => fav.id !== game.id)
      : [...favorites, game]

    setFavorites(updatedFavorites)

    try {
      await localforage.setItem('favorites', updatedFavorites)
    } catch (error) {
      console.error('Failed to save favorites:', error)
    }
  }

  const isFavorite = (gameId: string) =>
    favorites.some((game) => game.id === gameId)

  return { favorites, toggleFavorite, isFavorite, initializeFavorites }
}
