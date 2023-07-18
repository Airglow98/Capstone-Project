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
  background-image: linear-gradient(to right, #dd77a0 0%, #d99177 100%);
`;
