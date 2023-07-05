import Header from "../../components/Header/index";
import Image from "next/image";
import WishlistLink from "../../components/WishlistButton";
import { StyledForm } from "../../components/Searchbar";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/index";
import LibraryLink from "../../components/LibraryLink";

export default function ProfilePage() {
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
        <StyledForm>
          <StyledLabel htmlFor="userUpload">
            Select your Profilepicture
          </StyledLabel>
          <StyledInput
            onChange={handleFileChange}
            type="file"
            id="userUpload"
            name="avatar"
            accept="image/png, image/jpeg"
          ></StyledInput>
          <StyledImage src={imageSrc} alt="user img" width={150} height={150} />
        </StyledForm>
        <StyledParagraph>Nickname</StyledParagraph>
      </StyledProfileHeader>
      <p>Owned Games: 77(hardcoded)</p>
      <p>Perfect Games: 57(hardcoded)</p>
      <p>Achievements: 787(hardcoded)</p>
      <p>Wishlist: 77(hardcoded)</p>

      <StyledDiv>
        <LibraryLink />
        <WishlistLink />
      </StyledDiv>
      <NavBar />
    </>
  );
}

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledParagraph = styled.p`
  font-size: 5vw;
`;

const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
`;

const StyledInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledLabel = styled.label`
  border: black inset 2px;
  background-color: lightgrey;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
