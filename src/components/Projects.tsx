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
          An intuitive React web application to create your own CV/Resumé.
                      "
          img={CVProject}
          tags={["JavaScript", "React.js"]}
          color="#F45B6Fe7"
          url="https://tynasello.github.io/cv-builder/"
          githubLink="https://github.com/Tynasello/cv-builder"
        ></ProjectTile>

        <ProjectTile
          title="Blog REST API"
          description="
          A Node/Express API constructed in RESTful manner, supporting CRUD commands to a MongoDB database.
                      "
          img={APProject}
          tags={["Node.js", "Express.js", "API", "MongoDB", "JWT", "Heroku"]}
          color="#4EA5D9e7"
          url="https://github.com/Tynasello/blog-api"
          githubLink="https://github.com/Tynasello/blog-api"
        ></ProjectTile>

        <ProjectTile
          title="Competitive Programming Practice"
          description="
          Github repository containing solutions to practice programming problems.
                      "
          img={CPProject}
          tags={["Python"]}
          color="#3581B8e7"
          url="https://github.com/Tynasello/cp-practice"
          githubLink="https://github.com/Tynasello/cp-practice"
        ></ProjectTile>

        <ProjectTile
          title="Blog Frontend"
          description="
                      A blog application where users can view and interact with posts. Frontend makes use of custom blog API.
                      "
          img={BFProject}
          tags={["TypeScript", "React.js"]}
          color="#3CBBB1e7"
          url="https://tynasello.github.io/blog-frontend/"
          githubLink="https://github.com/Tynasello/blog-frontend"
        ></ProjectTile>

        <ProjectTile
          title="To-do App"
          description="
                      A To-do list app, delivering a simple and efficient task management interface.
                      "
          img={TDProject}
          tags={["JavaScript", "HTML/CSS", "Webpack"]}
          color="#7880B5e7"
          url="https://tynasello.github.io/to-do-app/"
          githubLink="https://github.com/Tynasello/to-do-app"
        ></ProjectTile>

        <ProjectTile
          title="Flappy Bird (Recreation)"
          description="
                        A recreation of the popular game Flappy Bird. I programmed
                        the game in python using the PyGame library.
                      "
          img={FBProject}
          tags={["Python", "Pygame"]}
          color="#1C77C3e7"
          redirect="/FBProject"
          githubLink="https://github.com/Tynasello/flappy-bird"
        ></ProjectTile>

        <ProjectTile
          title="Word Translation GUI"
          description="     
                        A Python GUI that
                        displays the translation of user inputs in selected languages.
                      "
          img={WTProject}
          tags={["Python", "GUI", "PyQt", "Googletrans"]}
          color="#AAC0AAe7"
          redirect="/WTProject"
          githubLink="https://github.com/Tynasello/word-translator"
        ></ProjectTile>

        <ProjectTile
          title="Arduino Robot Car"
          description="
                    A robot car that performs certain maneuvers based on input from a Bluetooth terminal application.
                      "
          img={ACProject}
          tags={["C++", "Arduino"]}
          color="#74B3CEe7"
          redirect="/ARProject"
          githubLink="https://github.com/Tynasello/arduino-robot"
        ></ProjectTile>

        <ProjectTile
          title="Arduino Color Sorter"
          description="
            Skittle-sorting robot controlled by Arduino Uno with C++ programming"
          img={CSProject}
          tags={["C++", "Arduino"]}
          color="#3F8EFCe7"
          redirect="/CSProject"
          githubLink="https://github.com/Tynasello/color-sorter"
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

  > * {
    width: 330px;
    height: 330px;
    @media (max-width: 450px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 370px) {
      width: 200px;
      height: 200px;
    }
  }
`;
