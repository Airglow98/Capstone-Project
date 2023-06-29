import Spotlight from "@/pages";
import GamesButton from "../GamesButton";
import ProfileButton from "../ProfileButton";
import styled from "styled-components";
import SpotlightButton from "../SpotlightButton";


export default function NavBar(){
    return(
        <StyledNav>
        <SpotlightButton/>
        <GamesButton/>
        <ProfileButton/>
        </StyledNav>
    )
}

const StyledNav= styled.nav`
position: fixed;
bottom: 0;
z-index: 2;
width: 100vw;
height: 5vh;
`