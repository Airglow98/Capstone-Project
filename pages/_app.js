import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, mutate } = useSWR("/api/games", fetcher);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (data) {
      setGames(
        data.map((game) => ({
          ...game,
          /*  isLibrary: false,
          isWishlist: false, in der Datenbank hinzugeügte keys*/
        }))
      );
    }
  }, [data]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  async function toggleIsLibrary(id) {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          const updatedGame = { ...game, isLibrary: !game.isLibrary };
          updateGameInBackend(id, updatedGame);
          return updatedGame;
        } else {
          return game;
        }
      })
    );
  }
  async function updateGameInBackend(id, updatedGame) {
    try {
      const response = await fetch(`/api/games/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGame),
      });

      if (response.ok) {
        mutate();
      }
    } catch (error) {
      console.error("Fehler beim Speichern im Backend", error);
    }
  }

  function toggleIsWishlist(id) {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          const updatedGame = { ...game, isWishlist: !game.isWishlist };
          updateGameInBackend(id, updatedGame);
          return updatedGame;
        } else return game;
      })
    );
    async function updateGameInBackend(id, updatedGame) {
      try {
        const response = await fetch(`/api/games/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedGame),
        });

        if (response.ok) {
          mutate();
        }
      } catch (error) {
        console.error("Fehler beim Speichern im Backend", error);
      }
    }
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
