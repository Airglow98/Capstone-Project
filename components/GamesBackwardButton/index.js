import { StyledLink, StyledParagraph } from "./GamesBackwardButton.styled";

export default function GamesBackwardButton() {
  return (
    <>
      <StyledLink href={"/games"}>
        <StyledParagraph>&larr;</StyledParagraph>
      </StyledLink>
    </>
  );
}
