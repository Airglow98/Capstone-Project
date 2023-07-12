import styled from "styled-components";

export default function ToggleLibraryStateButton({ onClick, isLibrary }) {
  return (
    <StyledToggleLibraryStateButton isLibrary={isLibrary} onClick={onClick}>
      Library
    </StyledToggleLibraryStateButton>
  );
}

const StyledToggleLibraryStateButton = styled.button`
  background-color: ${({ isLibrary }) => (isLibrary ? "green" : "white")};
  height: 5vh;
  width: 20vw;
  border-radius: 25%;
`;
