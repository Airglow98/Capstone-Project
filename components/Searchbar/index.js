import { useState } from "react";
import { StyledForm, StyledInput, StyledSvg } from "./Searchbar.styled";

export default function Searchbar({ games, filterGames, onHandleFilterGames }) {
  const [gamesNotFound, setGamesNotFound] = useState(false);
  const [searchGames, setSearchGames] = useState("");

  function handleOnChange(event) {
    const query = event.target.value;
    setSearchGames(query);

    const filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );

    onHandleFilterGames(filteredGames);

    if (filterGames.length === 0) {
      setGamesNotFound(true);
    } else {
      setGamesNotFound(false);
    }
  }
  return (
    <>
      <StyledForm>
        <label htmlFor="searchbar"></label>
        <StyledInput
          type="text"
          id="searchbar"
          name="searchbar"
          onChange={handleOnChange}
          value={searchGames}
          autoComplete="off"
        />
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
        >
          <path d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65-.71.71-5.65-5.65A6.469 6.469 0 0 1 9.5 17a6.5 6.5 0 1 1 0-13m0 1C6.46 5 4 7.46 4 10.5S6.46 16 9.5 16s5.5-2.46 5.5-5.5S12.54 5 9.5 5Z" />
        </StyledSvg>
      </StyledForm>
      {gamesNotFound && <p>This game could not be found.</p>}
    </>
  );
}
