import styled from "styled-components";

export const StyledToggleWishlistStateButton = styled.button`
  background-color: ${(props) => (props.isWishlist ? "#c459e2" : "white")};
  height: 5vh;
  width: 20vw;
  border-radius: 25%;
`;
