import Header from "../../components/Header/index";
import WishlistLink from "../../components/WishlistButton";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/index";
import LibraryLink from "../../components/LibraryLink";
import ImageUploadForm from "../../components/ImageUploadForm";
import Image from "next/image";

export default function ProfilePage({
  amountOfLibraryGames,
  amountOfWishlistGames,
}) {
  const [imageSrc, setImageSrc] = useState();
  /* 
  function handleFileChange(event) {
    const reader = new FileReader();
    reader.onload = function (event2) {
      const imageSrc = event2.target.result;
      setImageSrc(imageSrc);
    };
    reader.readAsDataURL(event.target.files[0]);
  } */
  return (
    <>
      <Header HeaderText={"My Profile"} />
      <StyledDiv>
        <StyledImage
          src={
            "http://res.cloudinary.com/da0yuort3/image/upload/v1689343619/46dcf2521d59b62f3aab2e700.png"
          }
          alt={"profile image"}
          width={150}
          height={150}
        />
      </StyledDiv>
      <StyledDiv2>
        <p>Owned Games: {amountOfLibraryGames}</p>
        <p> Wishlist: {amountOfWishlistGames}</p>
      </StyledDiv2>
      <StyledFlexBox>
        <LibraryLink />
        <WishlistLink />
      </StyledFlexBox>
      <StyledProfileHeader>
        <StyledUpload>
          <ImageUploadForm />
        </StyledUpload>
      </StyledProfileHeader>
      <NavBar />
    </>
  );
}

const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
`;

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledUpload = styled.div`
  width: 80%;
  padding: 1rem;
  margin-left: 10%;
`;

const StyledDiv = styled.div`
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledDiv2 = styled.div`
  margin-left: 14vw;
  margin-bottom: 5vh;
`;
