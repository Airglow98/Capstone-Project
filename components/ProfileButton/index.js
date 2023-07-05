import styled from "styled-components";
import Link from "next/link";

export default function ProfileButton() {
  return (
    <Link href={`/profile`}>
      <StyledProfileButton>Profile</StyledProfileButton>
    </Link>
  );
}

const StyledProfileButton = styled.button`
  width: 34vw;
  height: 100%;
  background-color: var(--secondary-color);
`;
