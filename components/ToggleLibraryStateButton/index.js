import styled from "styled-components";

export default function ToggleLibraryStateButton({ onClick, isLibrary }) {
  return (
    <StyledToggleLibraryStateButton isLibrary={isLibrary} onClick={onClick}>
      Library
    </StyledToggleLibraryStateButton>
  );
}

const StyledToggleLibraryStateButton = styled.button`
  background-color: ${(props) => (props.isLibrary ? "green" : "white")};
  height: 5vh;
  width: 25%;
  border-radius: 25%;
`;
