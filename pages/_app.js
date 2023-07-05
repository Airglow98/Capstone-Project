import GlobalStyle from "../styles";
import { useState } from "react";
import { initialGames } from "@/db/games/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [games, setGames] = useLocalStorageState("games", {
    defaultValue: initialGames.map((game) => ({
      ...game,
      isLibrary: false,
      isWishlist: false,
    })),
  });

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
        setGames={setGames}
      />
    </>
  );
}
