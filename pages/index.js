import Link from "next/link";

export default function Spotlight() {
  return (
    <Link href={`/games`}>
      <p>Ich bin ein Link</p>
    </Link>
  );
}
