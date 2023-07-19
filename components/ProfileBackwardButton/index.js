import { StyledLink, StyledParagraph } from "./ProfileBackwardButton.styled";

export default function ProfileBackwardButton() {
  return (
    <>
      <StyledLink href={"/profile"}>
        <StyledParagraph>&larr;</StyledParagraph>
      </StyledLink>
    </>
  );
}
