import { useState, useEffect } from 'react'
import { games } from '../data'
import type { Game } from './useFetchGames'

export const useSearchGames = (query: string) => {
  const [gameData, setGameData] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const searchGames = async () => {
    setLoading(true)
    const searchResults = await new Promise<Game[]>((resolve) => {
      setTimeout(() => {
        const lowerQuery = query.toLowerCase()
        const filteredGames = games.filter((game) =>
          Object.values(game).some((property) =>
            typeof property === 'string'
              ? property.toLowerCase().includes(lowerQuery)
              : property.some((tag) => tag.toLowerCase().includes(lowerQuery))
          )
        )
        resolve(filteredGames)
      }, 3000)
    })
    setGameData(searchResults)
    setLoading(false)
  }

  useEffect(() => {
    if (query) {
      searchGames()
    } else {
      setGameData([])
    }
  }, [query])

  return { gameData, loading }
}
