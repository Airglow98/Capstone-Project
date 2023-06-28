import Image from "next/image";
import styled from "styled-components";

export const StyledGameCard = styled.li`
  text-align: center;
  color: green;
  border: 5px solid black;
  margin-bottom: 5vh;
  margin-right: 10vw;
  list-style: none;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;
