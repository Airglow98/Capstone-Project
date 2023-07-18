import Header from "../../components/Header/index";
import Gamecard from "../../components/Gamecard/index";
import NavBar from "../../components/NavBar/index";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";

export default function Homepage({
  games,
  onToggleLibraryClick,
  onToggleWishlistClick,
  setGames,
}) {
  const [filterGames, setFilterGames] = useState(games);

  function onHandleFilterGames(filteredGames) {
    setFilterGames(filteredGames);
  }

  return (
    <>
      <Header HeaderText={"Games"} />
      <Searchbar
        games={games}
        setGames={setGames}
        filterGames={filterGames}
        onHandleFilterGames={onHandleFilterGames}
      />
      <Gamecard
        games={games}
        onToggleLibraryClick={onToggleLibraryClick}
        onToggleWishlistClick={onToggleWishlistClick}
        filterGames={filterGames}
      />
      <NavBar />
    </>
  );
}
