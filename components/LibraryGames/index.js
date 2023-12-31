import Link from "next/link";
import { StyledGameCard, StyledImage } from "../Gamecard/Gamecard.styled";

export default function LibraryGames({ games }) {
  const libraryGames = games.filter((game) => game.isLibrary);

  return (
    <ul>
      {libraryGames.map((game) => (
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
  );
}
