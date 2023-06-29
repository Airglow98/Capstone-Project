import Header from "@/components/Header";
import Image from "next/image";
import GamesButton from "@/components/GamesButton";
import WishlistButton from "../../components/WishlistButton/index"
import { StyledDiv } from "../games/[id]";
import { StyledForm } from "../games";
import { useState } from "react";


export default function ProfilePage(){
    const [imageSrc, setImageSrc]= useState()

function handleFileChange(event){
const reader = new FileReader()
reader.onload = function (event2){
 const imageSrc = event2.target.result
 setImageSrc(imageSrc)
}
reader.readAsDataURL(event.target.files[0]);
}
    return(
        <>
        <Header HeaderText={"My Profile"}/>
        <StyledDiv>
         <StyledForm>
          <label htmlFor="userUpload"></label>
          <input onChange={handleFileChange} type="file" id="userUpload" name="avatar"  accept="image/png, image/jpeg"></input>
         <Image src={imageSrc} alt="user img" width={200} height={200}/>
         </StyledForm>
        <p>Nickname(hardcoded)</p>
        <p>Owned Games: 77(hardcoded)</p>
        <p>Perfect Games: 57(hardcoded)</p>
        <p>Achievements: 787(hardcoded)</p>
        <p>Wishlist: 77(hardcoded)</p>
        <GamesButton/>
        <WishlistButton/>
        </StyledDiv>
        </>
    )
}