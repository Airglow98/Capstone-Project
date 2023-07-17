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
  data,
}) {
  const [filterGames, setFilterGames] = useState(data);
  console.log(data);
  console.log(filterGames);
  return (
    <>
      <Header HeaderText={"Games"} />
      <Searchbar
        games={games}
        setGames={setGames}
        filterGames={filterGames}
        setFilterGames={setFilterGames}
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
