import Header from "../../components/Header/index";
import Gamecard from "../../components/Gamecard/index";
import NavBar from "../../components/NavBar/index";
import Searchbar from "../../components/Searchbar";
import { useState, useRef } from "react";
import lottie from "lottie-web";
import { useEffect } from "react";
import styled from "styled-components";

export default function Homepage({
  games,
  onToggleLibraryClick,
  onToggleWishlistClick,
  setGames,
}) {
  const [filterGames, setFilterGames] = useState(games);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/newbackground.json"),
      preserveAspectRatio: "none",
    });
  }, []);

  function onHandleFilterGames(filteredGames) {
    setFilterGames(filteredGames);
  }

  return (
    <>
      <Header HeaderText={"Games"} />
      <StyledBackground ref={container} />
      <Searchbar
        games={games}
        setGames={setGames}
        filterGames={filterGames}
        onHandleFilterGames={onHandleFilterGames}
      />
      <Gamecard
        games={games}
        onToggleLibraryClick={onToggleLibraryClick}
        onToggleWishlistClick={onToggleWishlistClick}
        filterGames={filterGames}
      />
      <NavBar />
    </>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
