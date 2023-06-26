import styled from "styled-components";
import {initialGames} from "../../../db/games/data"
import Image from "next/image";

export default function Gamecard() {
  return <>
  <ul>
{initialGames.map((game) => (
    <StyledGameCard key={game.id}>{game.imgpath} {game.title}</StyledGameCard>
))}

  </ul>
  </>;
}

const StyledGameCard = styled.li`
  color: blue;
  &:first-child {
    margin-top: 15vh;
  }
`;