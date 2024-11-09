import { useState, useEffect } from 'react'
import { providers } from '../data'

export interface Provider {
  id: string
  name: string
  img: string
}

export const useFetchProviders = () => {
  const [providerData, setProviderData] = useState<Provider[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true)
      setTimeout(() => {
        setProviderData(providers)
        setLoading(false)
      }, 0)
    }
    fetchGames()
  }, [])

  return { providerData, loading }
}
