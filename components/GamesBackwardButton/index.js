import Link from "next/link";

export default function GamesBackwardButton() {
  return (
    <>
      <Link href={"/games"}>
        <p>&larr;</p>
      </Link>
    </>
  );
}
