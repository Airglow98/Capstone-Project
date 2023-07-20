import styled from "styled-components";
import Link from "next/link";

export const StyledParagraph = styled.p`
  text-align: center;
  color: black;
  border: black solid 3px;
  border-radius: 50%;
  height: 1.2em;
  width: 1.2em;
  margin-right: 0.5em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
