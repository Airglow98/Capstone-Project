import { StyledHeader } from "../../../components/Header/Header.styled";
import ProfileBackwardButton from "../../../components/ProfileBackwardButton";
import LibraryGames from "../../../components/LibraryGames";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";

export default function LibraryPage({ games }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/newbackground.json"),
    });
  }, []);

  return (
    <>
      <StyledBackground ref={container} />
      <StyledHeader>
        <ProfileBackwardButton />
        <h3>Library</h3>
      </StyledHeader>
      <StyledDiv>
        <LibraryGames games={games} />
      </StyledDiv>
    </>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const StyledDiv = styled.div`
  margin-top: 15vh;
`;
