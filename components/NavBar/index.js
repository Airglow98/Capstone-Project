import GamesButton from "../GamesButton";
import ProfileButton from "../ProfileButton";
import SpotlightButton from "../SpotlightButton";
import { StyledNav } from "./NavBar.styled";

export default function NavBar() {
  return (
    <StyledNav>
      <SpotlightButton />
      <GamesButton />
      <ProfileButton />
    </StyledNav>
  );
}
