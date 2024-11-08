import React, { type ReactElement, useState, useEffect } from "react";

import { games, providers } from "../../utils/data";

interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  tags: string[];
}
interface Provider {
  id: string;
  name: string;
  img: string;
}

const ContentSection = (): ReactElement => {
  const [game, setGame] = useState<Game[]>([]);
  const [provider, setProvider] = useState<Provider[]>([]);

  const fetchGames = async () => {
    const gameData: Game[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 3000);
    });
    setGame(gameData);
  };

  const fetchProviders = async () => {
    const providerData: Provider[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(providers);
      }, 3000);
    });
    setProvider(providerData);
  };

  useEffect(() => {
    fetchGames();
    fetchProviders();
  }, []);

  console.log("game state: ", game);
  console.log("provider state: ", provider);

  return (
    <div className="container-fluid">
      <div className="row row-cols-4">
        {games.map((game) => (
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
  );
};

export default ContentSection;
