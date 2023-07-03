import Link from "next/link";
import { StyledButton } from "./DetailsPageButton.styled";

export default function DetailsPageButton({ game }) {
  return (
    <>
      <StyledButton>
        {" "}
        <Link href={`/games/${game.id}`}>More Details</Link>
      </StyledButton>
    </>
  );
}
