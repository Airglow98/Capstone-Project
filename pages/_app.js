import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

async function fetcher(...args) {
  try {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR("/api/games", fetcher);
  const [games, setGames] = useState([]);
  const container = useRef(null);

  useEffect(() => {
    if (data) {
      setGames(
        data.map((game) => ({
          ...game,
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/loading.json"),
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <div ref={container}></div>
      </>
    );
  }

  function toggleIsLibrary(id) {
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

  const amountOfLibraryGames = games.filter((game) => game.isLibrary).length;
  const amountOfWishlistGames = games.filter((game) => game.isWishlist).length;

  return (
    <>
      <SWRConfig value={{ fetcher }}>
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
          error={error}
        />
      </SWRConfig>
    </>
  );
}
