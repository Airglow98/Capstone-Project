import styled from "styled-components";
import Link from "next/link";

export default function SpotlightButton() {
  return (
    <>
      <Link href={`/`}>
        <StyledSpotlightButton>Spotlight</StyledSpotlightButton>
      </Link>
    </>
  );
}

const StyledSpotlightButton = styled.button`
  width: 33vw;
  height: 100%;
  background-color: var(--secondary-color);
`;
