import Link from "next/link";

export default function WishlistButton() {
  return (
      <Link href={`/profile/wishlist`}>
  <button>Wishlist</button> 
  </Link>
      )
}