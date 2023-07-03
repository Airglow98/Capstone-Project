import Link from "next/link";
import { StyledLibraryButton } from "./StyledLibraryButton";

export default function LibraryButton() {
  return (
    <StyledLibraryButton>
      <Link href={`/profile/library`}>My Library</Link>
    </StyledLibraryButton>
  );
}
