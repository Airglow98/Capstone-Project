import { StyledHeader } from "../../../components/Header/Header.styled";
import ProfileBackwardButton from "../../../components/ProfileBackwardButton";
import LibraryGames from "../../../components/LibraryGames";

export default function LibraryPage({ games }) {
  return (
    <>
      <StyledHeader>
        <ProfileBackwardButton />
        <h3>Library</h3>
      </StyledHeader>
      <LibraryGames games={games} />
    </>
  );
}
