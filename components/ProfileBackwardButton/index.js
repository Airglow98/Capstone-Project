import Link from "next/link";
import styled from "styled-components";

export default function ProfileBackwardButton() {
  return (
    <>
      <StyledLink href={"/profile"}>
        <StyledParagraph>&larr;</StyledParagraph>
      </StyledLink>
    </>
  );
}

const StyledParagraph = styled.p`
  color: black;
  border: black solid 3px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
