import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { StyledDiv } from "./games/[id]";

export default function Spotlight() {
  return (
    <>
      <Header HeaderText={"Spotlight"} />
      <StyledDiv />
      <p>Please choose one of the buttons at the bottom.</p>
      <NavBar />
    </>
  );
}
