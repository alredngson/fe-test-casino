import React, { type ReactElement, useState, useEffect } from 'react'
import { useSearchGames } from '../../utils/hooks/useSearchGames'
import GameList from './GameList'
import GameListSkeleton from './GameListSkeleton'

const SearchGameList = (): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
  const { gameData, loading } = useSearchGames(debouncedQuery)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  return (
    <>
      <div className="search-bar my-3">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="form-control"
          placeholder="Search games..."
        />
      </div>
      {loading ? <GameListSkeleton /> : <GameList gameData={gameData} />}
    </>
  )
}

export default SearchGameList
