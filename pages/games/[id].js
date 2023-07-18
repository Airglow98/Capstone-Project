import { useRouter } from "next/router";
import { StyledHeader } from "../../components/Header/Header.styled";
import { StyledImage } from "../../components/Gamecard/Gamecard.styled";
import GamesBackwardButton from "../../components/GamesBackwardButton";
import GameInformation from "../../components/GameInformation";
import styled from "styled-components";
import { useRef } from "react";
import lottie from "lottie-web";
import { useEffect } from "react";

export default function GameDetailPage({ games }) {
  const router = useRouter();
  const { id } = router.query;
  const game = games.find((game) => game.id.toString() === id);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/newbackground.json"),
    });
  }, []);

  return (
    <>
      {game ? (
        <>
          <StyledBackground2 ref={container} />
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

const StyledBackground2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;
