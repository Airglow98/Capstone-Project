import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ToggleLibraryStateButton from "../components/ToggleLibraryStateButton";
import ToggleWishlistStateButton from "../components/ToggleWishlistStateButton";
import lottie from "lottie-web";

export default function Spotlight({
  onToggleLibraryClick,
  onToggleWishlistClick,
  games,
  error,
}) {
  const [randomGameIndex, setRandomGameIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/newbackground.json"),
    });
  }, []);

  useEffect(() => {
    if (games && games.length > 0 && !isLoaded) {
      const randomIndex = Math.floor(Math.random() * games.length);
      setRandomGameIndex(randomIndex);
      setIsLoaded(true);
    }
  }, [games, isLoaded]);

  const randomGame = randomGameIndex !== null ? games[randomGameIndex] : null;

  if (error) {
    return (
      <>
        <Header HeaderText={"Gamer's Haven"} />
        <SpotlightCard>
          <p>Error loading games</p>
        </SpotlightCard>
        <NavBar />
      </>
    );
  }

  return (
    <>
      {randomGame && isLoaded ? (
        <>
          <Header HeaderText={"Gamer's Haven"} />
          <StyledBackground ref={container} />
          <SpotlightCard>
            <StyledText>
              <h3>{randomGame.title}</h3>
            </StyledText>
            <StyledImage
              src={randomGame.imgpath}
              alt={randomGame.title}
              width={250}
              height={100}
            />
            <StyledText>
              <p>Platform: {randomGame.platform}</p>
              <p>Crossplay:{randomGame.crossplay}</p>
              <p>Achievements: {randomGame.achievements}</p>
              <p>Metacritic:{randomGame.metacritic}</p>
            </StyledText>
            <StyledFlexbox>
              <Link href={`/games/${randomGame.id}`}>More Details</Link>
              <ToggleLibraryStateButton
                isLibrary={randomGame.isLibrary}
                onClick={() => onToggleLibraryClick(randomGame.id)}
              />
              <ToggleWishlistStateButton
                isWishlist={randomGame.isWishlist}
                onClick={() => onToggleWishlistClick(randomGame.id)}
              />
            </StyledFlexbox>
          </SpotlightCard>
          <NavBar />
        </>
      ) : (
        <>
          <Header HeaderText={"Spotlight"} />
          <StyledBackground ref={container} />
          <SpotlightCard>
            <p>Loading...</p>
          </SpotlightCard>
          <NavBar />
        </>
      )}
    </>
  );
}

const SpotlightCard = styled.div`
  border: 5px groove #cb67ae;
  height: 75vh;
  width: 80vw;
  margin-top: 15vh;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #d66f98 0%, #ec8c69 100%);
  border-radius: 7%;
`;

const StyledImage = styled(Image)`
  height: auto;
  border-radius: 7%;
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 0.3em;
`;

const StyledText = styled.text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1.5em;
  margin-right: 1.5em;
`;
