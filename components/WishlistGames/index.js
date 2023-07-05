import { StyledGameCard } from "../Gamecard/Gamecard.styled";
import Link from "next/link";
import { StyledImage } from "../Gamecard/Gamecard.styled";
import { StyledDiv } from "../../pages/games/[id]";

export default function WishlistGames({ games }) {
  const wishlistGames = games.filter((game) => game.isWishlist);

  return (
    <>
      <StyledDiv>
        <ul>
          {wishlistGames.map((game) => (
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
            </StyledGameCard>
          ))}
        </ul>
      </StyledDiv>
    </>
  );
}
