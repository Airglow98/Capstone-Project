import Header from "../../components/Header/index";
import Gamecard from "../../components/Gamecard/index";
import NavBar from "../../components/NavBar/index";
import Searchbar from "../../components/Searchbar";

export default function Homepage({
  games,
  onToggleLibraryClick,
  onToggleWishlistClick,
  setGames,
  data,
}) {
  console.log(games);
  console.log(data);
  return (
    <>
      <Header HeaderText={"Games"} />
      <Searchbar games={games} setGames={setGames} />
      <Gamecard
        games={games}
        onToggleLibraryClick={onToggleLibraryClick}
        onToggleWishlistClick={onToggleWishlistClick}
      />
      <NavBar />
    </>
  );
}
