import Link from "next/link";

export default function BackwardButton() {
  return (
    <>
      <Link href={"/games"}>
        <p>&larr;</p>
      </Link>
    </>
  );
}
