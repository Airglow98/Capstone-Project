import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { initialGames } from "@/db/games/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ToggleLibraryStateButton from "@/components/ToggleLibraryStateButton";
import ToggleWishlistStateButton from "@/components/ToggleWishlistStateButton";

export default function Spotlight({ games, toggleIsLibrary }) {
  const [randomGame, setRandomGame] = useState(null);

  useEffect(() => {
    if (initialGames.length > 0) {
      const randomIndex = Math.floor(Math.random() * initialGames.length);
      const selectedGame = initialGames[randomIndex];
      setRandomGame(selectedGame);
    }
  }, []);

  return (
    <>
      {randomGame ? (
        <>
          <Header HeaderText={"Spotlight"} />
          <SpotlightCard>
            <h3>{randomGame.title}</h3>
            <StyledImage
              src={randomGame.imgpath}
              alt={randomGame.title}
              width={250}
              height={100}
            />
            <p>Platform:{randomGame.platform}</p>
            <p>Achievements: {randomGame.achievements}</p>
            <p>Playtime:</p>
            <p>Diffuculty:</p>
            <StyledButtonFlexBox>
              <Link href={`/games/${randomGame.id}`}>More Details</Link>
              <ToggleLibraryStateButton />
              <ToggleWishlistStateButton />
            </StyledButtonFlexBox>
          </SpotlightCard>
          <NavBar />
        </>
      ) : (
        <>
          <Header HeaderText={"Spotlight"} />
          <SpotlightCard>
            <p>This game could not be found</p>
          </SpotlightCard>
          <NavBar />
        </>
      )}
    </>
  );
}

const SpotlightCard = styled.div`
  border: 3px solid black;
  height: 70vh;
  width: 80vw;
  margin-top: 15vh;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  height: auto;
`;

const StyledButtonFlexBox = styled.div`
  /*   display: flex;
  justify-content: space-between; */
`;
