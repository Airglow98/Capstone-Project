import Link from "next/link";
import styled from "styled-components";

export default function ProfileBackwardButton() {
  return (
    <>
      <StyledBackwardButtonDiv>
        <Link href={"/profile"}>
          <p>&larr;</p>
        </Link>
      </StyledBackwardButtonDiv>
    </>
  );
}

const StyledBackwardButtonDiv = styled.div`
  z-index: 3;
`;
