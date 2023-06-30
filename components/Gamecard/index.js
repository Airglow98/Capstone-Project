import { StyledGameCard } from "./Gamecard.styled";
import { StyledImage } from "./Gamecard.styled";
import Link from "next/link";
import ToggleLibraryStateButton from "../ToggleLibraryStateButton";
import ToggleWishlistStateButton from "../ToggleWishlistStateButton";
import DetailsPageButton from "../DetailsPageButton";
import { useState } from "react";

export default function Gamecard({ games }) {
  const[isInLibrary, setIsInLibrary] = useState(false)

  function handleLibraryState(){
    console.log("test")
    console.log(isInLibrary)
      /* setIsInLibrary(!isInLibrary) */
  }

  return (
    <>
      <ul>
        {games.map((game) => (
          <StyledGameCard key={game.id}>
              <Link href={`/games/${game.id}`} >
              <h3>{game.title}</h3>
              <StyledImage
                src={game.imgpath}
                alt={"gamecover"}
                width={250}
                height={100}
                />
                </Link>
              <DetailsPageButton game={game}/>
              <ToggleLibraryStateButton onClick={handleLibraryState}/>
              <ToggleWishlistStateButton/>
            </StyledGameCard>
        ))}
      </ul>
    </>
  );
}
{
}
