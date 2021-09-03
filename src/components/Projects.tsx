import React from "react";
import styled from "styled-components";
import { ProjectTile } from "./Utils/ProjectTile";

import CVProject from "../assets/images/projectTile/CVProject.png";
import APProject from "../assets/images/projectTile/APProject.jpeg";
import CPProject from "../assets/images/projectTile/CPProject.png";
import BFProject from "../assets/images/projectTile/BFProject.png";
import TDProject from "../assets/images/projectTile/TDProject.png";
import ACProject from "../assets/images/projectTile/ACProject.jpg";
import CSProject from "../assets/images/projectTile/CSProject.jpg";
import FBProject from "../assets/images/projectTile/FBProject.jpg";
import WTProject from "../assets/images/projectTile/WTProject.jpeg";

interface ProjectsProps {
  id: string;
  classList: string;
}

export const Projects: React.FC<ProjectsProps> = ({ id, classList }) => {
  return (
    <Container id={id} className={classList}>
      <Header>
        <Title>Projects</Title>
        {/* <Line></Line> */}
      </Header>
      <ProjectsContainer>
        <ProjectTile
          title="CV Builder"
          description="
                      A React web application to create your own CV / resumé.
                      "
          img={CVProject}
          tags={["JavaScript", "React"]}
          color="#4A5366e6"
          url="https://tynasello.github.io/cv-builder/"
          githubLink="https://github.com/Tynasello/cv-builder"
        ></ProjectTile>

        <ProjectTile
          title="Blog API"
          description="
                      A Node/Express REST API for creating personal blogs.
                      "
          img={APProject}
          tags={["NodeJS", "Express", "API", "MongoDB", "JWT", "Heroku"]}
          color="#A2A498e6"
          url="https://github.com/Tynasello/blog-api"
          githubLink="https://github.com/Tynasello/blog-api"
        ></ProjectTile>

        <ProjectTile
          title="Competitive Programming Practice"
          description="
                      Github repository containing solutions to practice programming problems I have solved or am currently working on.
                      "
          img={CPProject}
          tags={["CP", "Python"]}
          color="#7C9A95e6"
          url="https://github.com/Tynasello/cp-practice"
          githubLink="https://github.com/Tynasello/cp-practice"
        ></ProjectTile>

        <ProjectTile
          title="Blog Frontend"
          description="
                      A React TypeScript frontend for a blog project using custom blog API.
                      "
          img={BFProject}
          tags={["TypeScript", "React"]}
          color="#BDABD4e6"
          url="https://tynasello.github.io/blog-frontend/"
          githubLink="https://github.com/Tynasello/blog-frontend"
        ></ProjectTile>

        <ProjectTile
          title="To-do App"
          description="
                      A To-do list app where users can add custom tasks with their own descriptions, due dates, and priority levels.
                      "
          img={TDProject}
          tags={["JavaScript", "HTML/CSS", "Webpack"]}
          color="#4B7088e6"
          url="https://tynasello.github.io/to-do-app/"
          githubLink="https://github.com/Tynasello/to-do-app"
        ></ProjectTile>

        {/*  */}

        <ProjectTile
          title="Arduino Robot Car"
          description="
                        An Arduino Uno controlled Robot car that performs certain maneuvers based on input from a
                        Bluetooth terminal application. Optional autonomous mode utilizing ultrasonic sensor.
                      "
          img={ACProject}
          tags={["C++", "Arduino"]}
          color="#0695B2e6"
          redirect="/ARProject"
          githubLink="https://github.com/Tynasello/arduino-robot"
        ></ProjectTile>

        <ProjectTile
          title="Arduino Color Sorter"
          description="
                        An Arudino Uno controlled robot which sorts red, green, and yellow
                        Skittles with the use of two micro servos
                        and a TCS230 color sensor."
          img={CSProject}
          tags={["C++", "Arduino"]}
          color="#906C73e6"
          redirect="/CSProject"
          githubLink="https://github.com/Tynasello/color-sorter"
        ></ProjectTile>

        <ProjectTile
          title="Flappy Bird (Recreation)"
          description="
                        Recreating the popular game 'Flappy Bird'. I programmed
                        the game in python utilizing the pygame library.
                      "
          img={FBProject}
          tags={["Python", "Pygame"]}
          color="#4E9DA1e6"
          redirect="/FBProject"
          githubLink="https://github.com/Tynasello/flappy-bird"
        ></ProjectTile>

        <ProjectTile
          title="Word Translation GUI"
          description="     
                        I created a GUI (Graphical User Interface) in Python
                        employing the PyQt5 and googletrans libraries. The GUI
                        displays the translation of user inputs in selected languages.
                      "
          img={WTProject}
          tags={["Python", "GUI", "PyQt"]}
          color="#924C77e6"
          redirect="/WTProject"
          githubLink="https://github.com/Tynasello/word-translator"
        ></ProjectTile>
      </ProjectsContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem 0;
  @media (max-width: 1250px) {
    padding: 3rem 0 0 0;
  }
`;
const Header = styled.div`
  padding-bottom: 2rem;
  display: flex;
`;
const Title = styled.h1``;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1.8rem;
  column-gap: 1.8rem;

  > * {
    width: 330px;
  }
`;
