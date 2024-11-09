import { useState, useEffect } from "react";
import { games } from "../../utils/data";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  tags: string[];
}

const useFetchGames = (filterTag?: string) => {
  const [gameData, setGameData] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGames = async () => {
    setLoading(true);
    const filteredGames = await new Promise<Game[]>((resolve) => {
      setTimeout(() => {
        let filtered = games;
        if (filterTag) {
          filtered = games.filter((game) => game.tags.includes(filterTag));
        }
        resolve(filtered);
      }, 3000);
    });
    setGameData(filteredGames);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { gameData, loading };
};

export default useFetchGames;
