import { StyledToggleWishlistStateButton } from "./ToggleWishlistStateButton.styled";

export default function ToggleWishlistStateButton({ onClick, isWishlist }) {
  return (
    <>
      <StyledToggleWishlistStateButton
        isWishlist={isWishlist}
        onClick={onClick}
      >
        Wishlist
      </StyledToggleWishlistStateButton>
    </>
  );
}
