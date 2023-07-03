import GlobalStyle from "../styles";
import { useState } from "react";
import { initialGames } from "@/db/games/data";

export default function App({ Component, pageProps }) {
  const [games, setGames] = useState(
    initialGames.map((game) => ({
      ...game,
      isLibrary: false,
      isWishlist: false,
    }))
  );

  function toggleIsLibrary(id) {
    console.log("test");
    setGames(
      games.map((game) => {
        if (game.id === id) {
          return { ...game, isLibrary: !game.isLibrary };
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
        toggleIsLibrary={toggleIsLibrary}
      />
    </>
  );
}
