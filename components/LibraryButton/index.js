import Link from "next/link";

export default function LibraryButton() {
  return (
      <Link href={`/profile/library`}>
  <button>Library</button>
  </Link>
      )
}
