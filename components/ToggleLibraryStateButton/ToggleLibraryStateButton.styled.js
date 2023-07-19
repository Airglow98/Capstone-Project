import styled from "styled-components";

export const StyledToggleLibraryStateButton = styled.button`
  background-color: ${({ isLibrary }) => (isLibrary ? "green" : "white")};
  height: 5vh;
  width: 20vw;
  border-radius: 25%;
`;
