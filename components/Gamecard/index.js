import { StyledGameCard } from "./Gamecard.styled";
import { StyledImage } from "./Gamecard.styled";
import Link from "next/link";
import ToggleLibraryStateButton from "../ToggleLibraryStateButton";
import ToggleWishlistStateButton from "../ToggleWishlistStateButton";
import DetailsPageLink from "../DetailsPageLink";
import { StyledDiv } from "./Gamecard.styled";

export default function Gamecard({
  onToggleLibraryClick,
  onToggleWishlistClick,
  filterGames,
}) {
  console.log(filterGames);
  return (
    <>
      <ul>
        {filterGames.map((game) => (
          <StyledGameCard key={game.id}>
            <Link href={`/games/${game.id}`}>
              <h3>{game.title}</h3>
              <StyledImage
                src={game.imgpath}
                alt={game.title}
                width={250}
                height={100}
              />
            </Link>
            <StyledDiv>
              <DetailsPageLink game={game} />
              <ToggleLibraryStateButton
                isLibrary={game.isLibrary}
                onClick={() => onToggleLibraryClick(game.id)}
              />
              <ToggleWishlistStateButton
                isWishlist={game.isWishlist}
                onClick={() => onToggleWishlistClick(game.id)}
              />
            </StyledDiv>
          </StyledGameCard>
        ))}
      </ul>
    </>
  );
}
