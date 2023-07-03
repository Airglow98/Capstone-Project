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
  padding: 10px 0;
  width: 25%;
  border-radius: 25%;
`;
