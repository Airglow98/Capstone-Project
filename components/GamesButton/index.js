import styled from "styled-components";
import Link from "next/link";

export default function GamesButton() {
  return (
    <Link href={`/games`}>
      <StyledGamesButton>Games</StyledGamesButton>
    </Link>
  );
}

const StyledGamesButton = styled.button`
  width: 33vw;
  height: 100%;
`;
