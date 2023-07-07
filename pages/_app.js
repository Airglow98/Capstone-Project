import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR("/api/games");
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (data) {
      setGames(
        data.map((game) => ({
          ...game,
          isLibrary: false,
          isWishlist: false,
        }))
      );
    }
  }, [data]);

  console.log(data);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  function toggleIsLibrary(id) {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          return { ...game, isLibrary: !game.isLibrary };
        } else return game;
      })
    );
  }

  function toggleIsWishlist(id) {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          return { ...game, isWishlist: !game.isWishlist };
        } else return game;
      })
    );
  }
  const amountOfLibraryGames = games.filter((game) => game.isLibrary).length;
  const amountOfWishlistGames = games.filter((game) => game.isWishlist).length;

  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          games={games}
          onToggleLibraryClick={toggleIsLibrary}
          onToggleWishlistClick={toggleIsWishlist}
          setGames={setGames}
          amountOfLibraryGames={amountOfLibraryGames}
          amountOfWishlistGames={amountOfWishlistGames}
          data={data}
        />
      </SWRConfig>
    </>
  );
}
