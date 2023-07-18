import Image from "next/image";
import styled from "styled-components";

export const StyledGameCard = styled.li`
  text-align: center;
  border: 5px groove #cb67ae;
  border-radius: 5%;
  background-image: linear-gradient(to bottom, #d66f98 0%, #ec8c69 100%);
  margin-bottom: 5vh;
  margin-right: 10vw;
  width: 80vw;
  list-style: none;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
