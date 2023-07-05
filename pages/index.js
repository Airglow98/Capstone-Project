import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ToggleLibraryStateButton from "../components/ToggleLibraryStateButton";
import ToggleWishlistStateButton from "../components/ToggleWishlistStateButton";
import useLocalStorageState from "use-local-storage-state";

export default function Spotlight({ games }) {
  const [randomGameIndex, setRandomGameIndex] = useState(null);
  const [gameList, setGameList] = useLocalStorageState("games", games);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (gameList && gameList.length > 0 && !isLoaded) {
      const randomIndex = Math.floor(Math.random() * gameList.length);
      setRandomGameIndex(randomIndex);
      setIsLoaded(true);
    }
  }, [gameList, isLoaded]);

  function updateLibraryStateRandomGame(gameId) {
    const updatedGames = gameList.map((game) => {
      if (game.id === gameId) {
        return {
          ...game,
          isLibrary: !game.isLibrary,
        };
      }
      return game;
    });
    setGameList(updatedGames);
  }

  function updateWishlistStateRandomGame(gameId) {
    const updatedGames = gameList.map((game) => {
      if (game.id === gameId) {
        return {
          ...game,
          isWishlist: !game.isWishlist,
        };
      }
      return game;
    });
    setGameList(updatedGames);
  }

  const randomGame =
    randomGameIndex !== null ? gameList[randomGameIndex] : null;
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
            <div>
              <Link href={`/games/${randomGame.id}`}>More Details</Link>
              <ToggleLibraryStateButton
                isLibrary={randomGame.isLibrary}
                onClick={() => updateLibraryStateRandomGame(randomGame.id)}
              />
              <ToggleWishlistStateButton
                isWishlist={randomGame.isWishlist}
                onClick={() => updateWishlistStateRandomGame(randomGame.id)}
              />
            </div>
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
  background-color: var(--quaternary-color);
`;

const StyledImage = styled(Image)`
  height: auto;
`;
