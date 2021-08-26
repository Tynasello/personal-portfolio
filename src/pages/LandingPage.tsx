import React from "react";
import styled from "styled-components";

import { About } from "../components/About";
import { ContactLinks } from "../components/ContactLinks";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <Container>
      <Nav />
      <ContactLinks></ContactLinks>
      <ContentContainer>
        <Home></Home>
        <About id="about"></About>
        <Projects id="projects"></Projects>
        <WorkExperience id="work"></WorkExperience>
      </ContentContainer>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div``;
const ContentContainer = styled.div`
  width: 60vw;
  margin: 2rem auto;
`;
