import { StyledHeader } from "./Header.styled";

export default function Header({ HeaderText }) {
  return (
    <>
      <StyledHeader>{HeaderText}</StyledHeader>
    </>
  );
}
