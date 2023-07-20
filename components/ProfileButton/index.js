import { StyledProfileButton } from "./ProfileButton.styled";
import Link from "next/link";

export default function ProfileButton() {
  return (
    <Link href={`/profile`}>
      <StyledProfileButton>Profile</StyledProfileButton>
    </Link>
  );
}
