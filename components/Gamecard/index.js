import { StyledGameCard } from "./Gamecard.styled";
import { StyledImage } from "./Gamecard.styled";
import Link from "next/link";

export default function Gamecard({ games }) {
  return (
    <>
      <ul>
        {games.map((game) => (
          <Link href={`/games/${game.id}`} key={game.id}>
            <StyledGameCard>
              <h3>{game.title}</h3>
              <StyledImage
                src={game.imgpath}
                alt={"gamecover"}
                width={250}
                height={100}
              />
            </StyledGameCard>
          </Link>
        ))}
      </ul>
    </>
  );
}
{
}
