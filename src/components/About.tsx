import React from "react";
import styled from "styled-components";

import resume from "../assets/Ty_Nasello_Resume.pdf";
import { HighlightSpan } from "./Utils/HighlightSpan";
import { PLink } from "./Utils/PLink";

interface AboutProps {
  id: string;
  classList: string;
}

export const About: React.FC<AboutProps> = ({ id, classList }) => {
  return (
    <Container id={id} className={classList}>
      <Header>
        <Title>About Me</Title>
        {/* <Line></Line> */}
      </Header>
      <AboutContainer>
        <ContentSection>
          <ContentP>
            I am a <HighlightSpan>University of Waterloo </HighlightSpan>
            student pursuing a degree in Mechatronics Engineering. I am
            currently seeking Winter 2022 internships.
            <br />
            <br />I am passionate about tackling projects that expose me to new
            and exciting realms and ways of thinking. In my free time, I enjoy
            learning unfamiliar technologies and solving competitive programming
            problems. Feel free to contact me at any time via{" "}
            <HighlightSpan>
              <PLink href="mailto:tynasello@gmail.com" target="_blank">
                email.{}
              </PLink>
            </HighlightSpan>{" "}
            I also encourage you to view my{" "}
            <HighlightSpan>
              <PLink href="https://github.com/tynasello" target="_blank">
                Github
              </PLink>
            </HighlightSpan>
            ,{" "}
            <HighlightSpan>
              <PLink
                href="https://www.linkedin.com/in/ty-nasello/"
                target="_blank"
              >
                Linkedin
              </PLink>
            </HighlightSpan>
            {", and "}
            <HighlightSpan>
              <PLink href={resume} target="_blank">
                resumé.{}
              </PLink>
            </HighlightSpan>
          </ContentP>
        </ContentSection>
        <StackSection>
          <StackHeader>Technologies and Tools</StackHeader>
          <TagsContainer>
            <Tag>Python</Tag>
            <Tag>TypeScript</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Node.js</Tag>
            <Tag>React.js</Tag>
            <Tag>Express.js</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>C++</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Git</Tag>
            <Tag>Java</Tag>
            <Tag>Netlify</Tag>
            <Tag>Heroku</Tag>
            <Tag>Figma</Tag>
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
  @media (max-width: 1250px) {
    padding: 0;
  }
`;
const Header = styled.div`
  padding-bottom: 2rem;
  display: flex;
`;
const Title = styled.h1`
  @media (max-width: 420px) {
    font-size: 2.8rem;
  }
`;
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  font-size: clamp(12px, 1vw, 100px);

  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ContentSection = styled.div`
  padding-right: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 1250px) {
    padding: 0;
  }
`;
const ContentP = styled.p`
  font-size: 1.4em;
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
const StackSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StackHeader = styled.h3`
  font-size: 1.5em;
  padding-bottom: 1rem;
  @media (max-width: 1250px) {
    padding-top: 2rem;
  }
  @media (max-width: 530px) {
    padding-top: 0;
  }
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
    transform: translateY(-4px);
  }
`;
