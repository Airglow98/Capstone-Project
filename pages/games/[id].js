import { useRouter } from "next/router";
import { initialGames } from "@/db/games/data";
import { StyledHeader } from "@/components/Header/Header.styled";
import { StyledImage } from "@/components/Gamecard/Gamecard.styled";
import GamesBackwardButton from "@/components/GamesBackwardButton";
import GameInformation from "@/components/GameInformation";
import styled from "styled-components";

export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const game = initialGames.find((game) => game.id.toString() === id);

  return (
    <>
      {game ? (
        <>
          <StyledDiv>
            <StyledHeader>
              <GamesBackwardButton />
              {game.title}
            </StyledHeader>
            <StyledImage
              src={game.imgpath}
              alt={"gamecover"}
              width={250}
              height={100}
            />
            <GameInformation game={game} />
          </StyledDiv>
        </>
      ) : (
        <p>Cannot find this game</p>
      )}
    </>
  );
}

export const StyledDiv = styled.div`
  margin-top: 15vh;
`;
