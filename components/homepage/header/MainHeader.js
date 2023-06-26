import styled from "styled-components";

export default function MainHeader() {
  return (
    <>
      <StyledMainHeader>Games</StyledMainHeader>
    </>
  );
}

const StyledMainHeader = styled.h1`
  border: 5px solid black;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  margin-top: 0;
  width: 100vw;
  height: 10vh;
`;
