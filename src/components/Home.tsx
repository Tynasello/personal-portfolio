import React from "react";
import styled from "styled-components";
import profileImg from "../assets/images/sebastian.png";
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <Header>Ty Nasello</Header>
        <Position>University of Waterloo</Position>
        <Description>
          Candidate for BASc Mechatronics Engineering, 2026.
        </Description>
      </ContentContainer>
      <ImageContainer>
        <ProfileImage src={profileImg} alt="profile image"></ProfileImage>
      </ImageContainer>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;
const ContentContainer = styled.div`
  padding-right: 5rem;
  & > * {
    padding: 0.5rem 0;
  }
`;
const Header = styled.h1`
  font-size: 5em;
`;
const Position = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.5em;
`;
const Description = styled.h3`
  font-size: 1.6em;
  color: ${({ theme }) => theme.colors.light};
`;

const ImageContainer = styled.div``;

const ProfileImage = styled.img`
  width: 35vw;
`;
