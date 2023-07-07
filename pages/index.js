import { useEffect, useState } from "react";
import useSWR from "swr";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ToggleLibraryStateButton from "../components/ToggleLibraryStateButton";
import ToggleWishlistStateButton from "../components/ToggleWishlistStateButton";

export default function Spotlight() {
  const { data: games, error } = useSWR("/api/games");
  const [randomGameIndex, setRandomGameIndex] = useState(null);
  const [gameList, setGameList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (games && games.length > 0 && !isLoaded) {
      const randomIndex = Math.floor(Math.random() * games.length);
      setGameList(games);
      setRandomGameIndex(randomIndex);
      setIsLoaded(true);
    }
  }, [games, isLoaded]);

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

  if (error) {
    return (
      <>
        <Header HeaderText={"Spotlight"} />
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
          <Header HeaderText={"Spotlight"} />
          <SpotlightCard>
            <h3>{randomGame.title}</h3>
            <StyledImage
              src={randomGame.imgpath}
              alt={randomGame.title}
              width={250}
              height={100}
            />
            <p>Platform: {randomGame.platform}</p>
            <p>Achievements: {randomGame.achievements}</p>
            <p>Playtime:</p>
            <p>Difficulty:</p>
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
            <p>Loading...</p>
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
