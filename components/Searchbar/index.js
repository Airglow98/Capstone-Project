import { useState } from "react";
import styled from "styled-components";

export default function Searchbar({ games, filterGames, setFilterGames }) {
  const [gamesNotFound, setGamesNotFound] = useState(false);
  const [searchGames, setSearchGames] = useState("");

  function handleOnChange(event) {
    const query = event.target.value;
    setSearchGames(query);

    setFilterGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase())
      )
    );
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

export const StyledForm = styled.form`
  margin-top: 15vh;
  margin-left: 10vw;
  margin-bottom: 5vh;
`;

const StyledInput = styled.input`
  width: 80vw;
  position: relative;
`;

const StyledSvg = styled.svg`
  position: absolute;
  border: solid grey 1px;
  border-radius: 10%;
`;
