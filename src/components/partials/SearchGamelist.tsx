import React, { type ReactElement, useState, useEffect } from 'react'
import { useSearchGames } from '../../utils/hooks/useSearchGames'
import { useFetchProviders } from '../../utils/hooks/useFetchProviders'
import GameList from './GameList'
import GameListSkeleton from './GameListSkeleton'
import ProviderDrawer from './ProviderDrawer'

const SearchGameList = (): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
  const { gameData, loading } = useSearchGames(debouncedQuery)
  const { providerData } = useFetchProviders()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleProviderClick = (providerName: string) => {
    setQuery(providerName)
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
      <div className="search-bar my-3 d-flex">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="form-control"
          placeholder="Search games..."
        />
        <button
          className="btn btn-outline-primary ms-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#providerDrawer"
          aria-controls="providerDrawer"
        >
          Providers
        </button>
      </div>
      {loading ? <GameListSkeleton /> : <GameList gameData={gameData} />}
      <ProviderDrawer
        providerData={providerData}
        onProviderClick={handleProviderClick}
      />
    </>
  )
}

export default SearchGameList
