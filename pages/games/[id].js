import { useRouter } from "next/router";
import { StyledHeader } from "../../components/Header/Header.styled";
import { StyledImage } from "../../components/Gamecard/Gamecard.styled";
import GamesBackwardButton from "../../components/GamesBackwardButton";
import GameInformation from "../../components/GameInformation";
import styled from "styled-components";

export default function GameDetailPage({ games }) {
  const router = useRouter();
  const { id } = router.query;

  const game = games.find((game) => game.id.toString() === id);

  return (
    <>
      {game ? (
        <>
          <StyledBackground>
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
          </StyledBackground>
        </>
      ) : (
        <p>Cannot find this game</p>
      )}
    </>
  );
}

export const StyledBackground = styled.div`
  margin-top: 15vh;
  height: 100vh;
`;
