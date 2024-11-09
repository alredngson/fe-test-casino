import { useState, useEffect } from "react";
import { games } from "../../utils/data";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  tags: string[];
}

const useFetchGames = () => {
  const [gameData, setGameData] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setTimeout(() => {
        setGameData(games);
        setLoading(false);
      }, 3000);
    };
    fetchGames();
  }, []);

  return { gameData, loading };
};

export default useFetchGames;
