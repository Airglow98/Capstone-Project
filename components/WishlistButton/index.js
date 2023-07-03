import Link from "next/link";
import { StyledWishlistButton } from "./WishlistButton";

export default function WishlistButton() {
  return (
    <StyledWishlistButton>
      <Link href={`/profile/wishlist`}>My Wishlist</Link>
    </StyledWishlistButton>
  );
}
