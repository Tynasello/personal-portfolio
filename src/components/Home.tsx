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
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;
const ContentContainer = styled.div`
  & > * {
    padding: 0.5rem 0;
  }
  @media (max-width: 1250px) {
    > * {
      text-align: center;
    }
  }
`;
const Header = styled.h1`
  font-size: clamp(70px, 5vw, 80px);
  @media (max-width: 420px) {
    font-size: 3.5rem;
  }
`;
const Position = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-size: clamp(35px, 2.4vw, 100px);
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
const Description = styled.h3`
  font-size: clamp(25px, 1.6vw, 70px);
  color: ${({ theme }) => theme.colors.light};
  @media (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div``;

const ProfileImage = styled.img`
  width: 35vw;
  min-width: 300px;
  padding-top: 2rem;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;
