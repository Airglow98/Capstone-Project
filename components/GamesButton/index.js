import { StyledGamesButton } from "./GamesButton.styled";
import Link from "next/link";

export default function GamesButton() {
  return (
    <Link href={`/games`}>
      <StyledGamesButton>Games</StyledGamesButton>
    </Link>
  );
}
