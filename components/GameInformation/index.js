import styled from "styled-components";

export default function GameInformation({ game }) {
  return (
    <>
      <StyledList>
        <li>Release: {game.release}</li>
        <li>Publisher: {game.publisher}</li>
        <li>Developer: {game.developer}</li>
        <li>Platforms: {game.platform}</li>
        <li>Crossplay: {game.crossplay}</li>
        <li>Category: {game.category}</li>
        <li>Metacritic: {game.metacritic}</li>
        <li>Achievements: {game.achievements}</li>
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    padding-top: 1.5em;
    list-style: none;
  }
`;
