import React from "react";
import styled from "styled-components";

import resume from "../assets/Resume.pdf";
import { HighlightSpan } from "./Utils/HighlightSpan";
import { PLink } from "./Utils/PLink";

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Header>
        <Title>About Me</Title>
        {/* <Line></Line> */}
      </Header>
      <AboutContainer>
        <ContentSection>
          <ContentP>
            In the Fall of 2021, I will be attending the{" "}
            <HighlightSpan>University of Waterloo {}</HighlightSpan>
            to pursue a degree in mechatronics engineering. I will soon be
            seeking Winter 2022 internships. In my free time I enjoy exercising,
            working on projects, and playing sports. I enjoy working with
            computers and solving complex problems. I am frequently learning new
            programming concepts and algorithms which I apply when solving
            complex coding challenges. This repository on my github, showcases
            many of the problems and algorithms I have been working on. Feel
            free to contact me at any time via{" "}
            <HighlightSpan>
              <PLink href="mailto:tynasello@gmail.com" target="_blank">
                email.{}
              </PLink>
            </HighlightSpan>{" "}
            I also encourage you to view my{" "}
            <HighlightSpan>
              <PLink href="https://github.com/tynasello" target="_blank">
                github.{}
              </PLink>
            </HighlightSpan>{" "}
            account and{" "}
            <HighlightSpan>
              <PLink href={resume} target="_blank">
                resume.{}
              </PLink>
            </HighlightSpan>
          </ContentP>
        </ContentSection>
        <StackSection>
          <StackHeader>Technologies and Tools</StackHeader>
          <TagsContainer>
            <Tag>Python</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>NodeJS</Tag>
            <Tag>Express</Tag>
            <Tag>React</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>C++</Tag>
            <Tag>Java</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Git</Tag>
            <Tag>Webpack</Tag>
            <Tag>Heroku</Tag>
          </TagsContainer>
        </StackSection>
      </AboutContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0;
`;
const Header = styled.div`
  padding: 2rem 0;
  display: flex;
`;
const Title = styled.h1``;
const AboutContainer = styled.div`
  display: flex;
`;

const ContentSection = styled.div`
  padding-right: 2rem;
  width: 150%;
`;
const ContentP = styled.p`
  font-size: 1.4em;
`;
const StackSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StackHeader = styled.h3`
  font-size: 1.5em;
  padding-bottom: 1rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.p`
  font-size: 1em;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  padding: 0.6rem;
  margin: 0.6rem 1.2rem 0.6rem 0;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid transparent;
    transform: scale(1.05);
  }
`;
