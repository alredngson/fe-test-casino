import { useState, useEffect } from "react";
import { providers } from "../../utils/data";

interface Provider {
  id: string;
  name: string;
  img: string;
}

const useFetchProviders = () => {
  const [providerData, setProviderData] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setTimeout(() => {
        setProviderData(providers);
        setLoading(false);
      }, 3000);
    };
    fetchGames();
  }, []);

  return { providerData, loading };
};

export default useFetchProviders;
