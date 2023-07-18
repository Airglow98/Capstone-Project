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
  background-image: linear-gradient(to right, #d66f98 0%, #dd82a6 100%);
`;
