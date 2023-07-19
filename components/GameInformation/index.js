import { StyledList } from "./GameInformaton.styled";

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
