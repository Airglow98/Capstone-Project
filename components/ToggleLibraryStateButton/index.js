import { StyledToggleLibraryStateButton } from "./ToggleLibraryStateButton.styled";

export default function ToggleLibraryStateButton({ onClick, isLibrary }) {
  return (
    <StyledToggleLibraryStateButton isLibrary={isLibrary} onClick={onClick}>
      Library
    </StyledToggleLibraryStateButton>
  );
}
