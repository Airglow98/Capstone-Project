import { StyledHeader } from "@/components/Header/Header.styled";
import ProfileBackwardButton from "@/components/ProfileBackwardButton";

export default function LibraryPage() {
  return (
    <>
      <StyledHeader>
        <ProfileBackwardButton />
        <h3>Library</h3>
      </StyledHeader>
    </>
  );
}
