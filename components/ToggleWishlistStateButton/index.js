import styled from "styled-components"

export default function ToggleWishlistStateButton({onClick, isWishlist}){
    return(
        <>
        <StyledToggleWishlistStateButton isWishlist={isWishlist} onClick={onClick}>Wishlist</StyledToggleWishlistStateButton>
        </>
    )
}

const StyledToggleWishlistStateButton = styled.button`
background-color: ${(props)=>props.isWishlist?"green":"white"};
height: 5vh;
width: 25%;
border-radius: 25%;
`