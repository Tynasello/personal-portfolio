import React, { useState } from "react";
import styled from "styled-components";
import { ContactLinks } from "../ContactLinks";
import { Footer } from "../Footer";
import { Nav } from "../Nav";

interface ProjectProps {
  headerImg?: string;
  title: string;
  children?: any;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  children,
  headerImg,
}) => {
  useState(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Nav projectNav={true}></Nav>
      <ContactLinks></ContactLinks>
      <ProjectContainer>
        <HeaderImg src={headerImg}></HeaderImg>
        <Header>{title}</Header>
        {children}
      </ProjectContainer>
      <Footer></Footer>
    </Container>
  );
};
const Container = styled.div``;
const ProjectContainer = styled.div`
  margin: 6rem auto;
  width: 40vw;
`;
const HeaderImg = styled.img`
  width: 100%;
  transition: all 0.5s;
`;
const Header = styled.h3`
  font-size: 3.4em;
  font-weight: 500;
  margin: 1.2rem 0;
  padding: 0.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`;
