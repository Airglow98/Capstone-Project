import Link from "next/link";
import { StyledImage } from "../Gamecard/Gamecard.styled";
import styled from "styled-components";
import { StyledDiv } from "../../pages/games/[id]";

export default function LibraryGames({ games }) {
  const libraryGames = games.filter((game) => game.isLibrary);

  return (
    <>
      <StyledDiv>
        {libraryGames.map((game) => (
          <StyledLibraryGameCard key={game.id}>
            <Link href={`/games/${game.id}`}>
              <h3>{game.title}</h3>
              <StyledImage
                src={game.imgpath}
                alt={game.title}
                width={250}
                height={100}
              />
            </Link>
          </StyledLibraryGameCard>
        ))}
      </StyledDiv>
    </>
  );
}

const StyledLibraryGameCard = styled.li`
  text-align: center;
  border: 5px groove orange;
  border-radius: 5%;
  background-color: #e4aa5f;
  margin-bottom: 5vh;
  margin-left: 10vw;
  width: 80vw;
  list-style: none;
`;
