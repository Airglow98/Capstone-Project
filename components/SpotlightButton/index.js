import { StyledSpotlightButton } from "./SpotlightButton.styled";
import Link from "next/link";

export default function SpotlightButton() {
  return (
    <>
      <Link href={`/`}>
        <StyledSpotlightButton>Spotlight</StyledSpotlightButton>
      </Link>
    </>
  );
}
