import styled from "styled-components";
import {initialGames} from "../../../db/games/data"
import Image from "next/image";

export default function Gamecard() {
  return <>
  <ul>
{initialGames.map((game) => (
    <StyledGameCard key={game.id}>
    <h2>{game.title}</h2>
    <StyledImage src={game.imgpath} alt={"gamecover"} width={250} height={100} />
    </StyledGameCard>
))}

  </ul>
  </>;
}

const StyledGameCard = styled.li`
text-align: center;
  color: purple;
  border: 5px solid black;
  margin: 0, 10vw, 5vh, 10vw;
  list-style: none;
  &:first-child {
    margin-top: 15vh;
  }
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`; 