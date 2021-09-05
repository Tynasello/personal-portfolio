import React, { useEffect } from "react";
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
  const options = {
    rootMargin: "100px",
    threshold: 0.0,
  };
  const showItem = (fadeIns: any) => {
    fadeIns.forEach((fadeIn: any) => {
      if (fadeIn.isIntersecting) {
        fadeIn.target.classList.add("fadeInActive");
      }
    });
  };
  const observer = new IntersectionObserver(showItem, options);

  useEffect(() => {
    const fadeInComponents = document.querySelectorAll(".fadein");
    fadeInComponents.forEach((fadeIn) => {
      observer.observe(fadeIn);
    });
  });

  return (
    <Container>
      <Nav />
      <ContactLinks></ContactLinks>
      <ContentContainer>
        <Home></Home>
        <About id="about" classList="fadein"></About>
        <Projects id="projects" classList=""></Projects>
        <WorkExperience id="work" classList="fadein"></WorkExperience>
      </ContentContainer>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div``;
const ContentContainer = styled.div`
  width: 60vw;
  margin: 2rem auto;
  @media (max-width: 870px) {
    width: 75vw;
  }
`;
