import Link from "next/link";

export default function DetailsPageButton({ game }) {
  return (
    <>
      <Link href={`/games/${game.id}`}>More Details</Link>
    </>
  );
}
