import { StyledHeader } from "../../../components/Header/Header.styled";
import ProfileBackwardButton from "../../../components/ProfileBackwardButton";
import Searchbar from "../../../components/Searchbar";
import WishlistGames from "../../../components/WishlistGames";

export default function WishlistPage({ games, setGames }) {
  return (
    <>
      <StyledHeader>
        <ProfileBackwardButton />
        <h3>Wishlist</h3>
      </StyledHeader>
      <WishlistGames games={games} />
    </>
  );
}
