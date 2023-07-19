import styled from "styled-components";

export const StyledToggleWishlistStateButton = styled.button`
  background-color: ${(props) => (props.isWishlist ? "green" : "white")};
  height: 5vh;
  width: 20vw;
  border-radius: 25%;
`;
