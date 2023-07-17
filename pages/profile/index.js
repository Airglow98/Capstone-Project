import Header from "../../components/Header/index";
import WishlistLink from "../../components/WishlistButton";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/index";
import LibraryLink from "../../components/LibraryLink";
import ImageUploadForm from "../../components/ImageUploadForm";

export default function ProfilePage({
  amountOfLibraryGames,
  amountOfWishlistGames,
}) {
  const [imageSrc, setImageSrc] = useState();

  function handleFileChange(event) {
    const reader = new FileReader();
    reader.onload = function (event2) {
      const imageSrc = event2.target.result;
      setImageSrc(imageSrc);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  return (
    <>
      <Header HeaderText={"My Profile"} />
      <StyledProfileHeader>
        <StyledUpload>
          <ImageUploadForm />
        </StyledUpload>
      </StyledProfileHeader>
      <p>Owned Games: {amountOfLibraryGames}</p>
      <p>Wishlist: {amountOfWishlistGames}</p>
      <StyledDiv>
        <LibraryLink />
        <WishlistLink />
      </StyledDiv>
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledUpload = styled.div`
  width: 80%;
  padding: 1rem;
  margin-left: 10%;
`;
