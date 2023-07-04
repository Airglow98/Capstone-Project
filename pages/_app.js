import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import { initialGames } from "@/db/games/data";

export default function App({ Component, pageProps }) {
  const [games, setGames] = useState(() => {
    const storedGames = JSON.parse(localStorage.getItem("games"));
    if (storedGames) {
      return storedGames;
    } else {
      return initialGames.map((game) => ({
        ...game,
        isLibrary: false,
        isWishlist: false,
      }));
    }
  });

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        games={games}
        onToggleLibraryClick={toggleIsLibrary}
        onToggleWishlistClick={toggleIsWishlist}
      />
    </>
  );
}
