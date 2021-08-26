import React from "react";
import styled from "styled-components";
import { Project } from "./Utils/Project";

import cvBuilder from "../assets/images/cv-builder.png";
import blogAPI from "../assets/images/blog-api.jpeg";
import blogFrontend from "../assets/images/blog-frontend.png";
import toDoList from "../assets/images/to-do-list.png";
import arduinoCar from "../assets/images/arduino-car.jpg";
import colorSorter from "../assets/images/color-sorter.jpg";
import flappyBird from "../assets/images/flappy-bird.jpg";
import translationGUI from "../assets/images/translation-gui.jpeg";

interface ProjectsProps {
  id: string;
}

export const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Header>
        <Title>Projects</Title>
        {/* <Line></Line> */}
      </Header>
      <ProjectsContainer>
        <Project
          title="CV Builder"
          description="
                      A React web application to create your own CV / resume.
                      "
          img={cvBuilder}
          tags={["JavaScript", "React"]}
          color="#607e78E6"
        ></Project>

        <Project
          title="Blog API"
          description="
                      Blog API created with NodeJS, Express and MongoDB Atlas. API supports 
                      personal blogs with admin-only features, including
                      creating, deleting and editing posts, aswell as deleting comments.
                      JWT's were used to authenticate users, allowing login functionality
                      and access to protected routes.
                      "
          img={blogAPI}
          tags={["NodeJS", "Express", "MongoDB", "Mongoose", "JWT", "Heroku"]}
          color="#ed524cE6"
        ></Project>

        <Project
          title="Blog Frontend"
          description="
                    I previosuly built a REST API for creating custom blogs. This project
                    is an example frontend that shows how the API can be utilized.
                      "
          img={blogFrontend}
          tags={["TypeScript", "React"]}
          color="#12b0bdE6"
        ></Project>

        <Project
          title="To-do App"
          description="
                      Add custom tasks with their own descriptions, due dates, and priority
                      levels. Filter through your tasks via project subfolders, as well as the
                      All Tasks, Today, and This Week subfolders. Subfolders and their tasks
                      are stored locally so user data is not lost when closing or refreshing
                      browser.
                      "
          img={toDoList}
          tags={["JavaScript", "HTML/CSS", "Webpack"]}
          color="#c6b05bE6"
        ></Project>

        {/*  */}

        <Project
          title="Arduino Robot"
          description="
                        The purpose of this project was to create a fully
                        functional robot using an Arduino microcontroller. The
                        robot performs certain maneuvers based on input from a
                        Bluetooth terminal application.
                      "
          img={arduinoCar}
          tags={["Arduino", "C++"]}
          color="#3954a0E6"
          url="/ARProject"
        ></Project>

        <Project
          title="Arduino Color Sorter"
          description="
                        The goal of this project was to create a system designed
                        to sort objects based on color. Red, green, and yellow
                        Skittles were sorted with the use of two micro servos
                        and a TCS230 color sensor."
          img={colorSorter}
          tags={["Arduino", "C++"]}
          color="#d8b83bE6"
          url="/"
        ></Project>

        <Project
          title="Flappy Bird (Recreation)"
          description="
                        I recreated the popular game 'Flappy Bird'. I programmed
                        the game in python utilizing the pygame library.
                      "
          img={flappyBird}
          tags={["Python", "Pygame"]}
          color="#30b783E6"
          url="/"
        ></Project>

        <Project
          title="Word Translation GUI"
          description="     
                        I created a GUI (Graphical User Interface) in Python
                        using the PyQt5 and googletrans libraries. The GUI
                        prompts the user to enter a sentence. It then displays
                        the translation in a variety of different languages
                        based on your selection.
                      "
          img={translationGUI}
          tags={["Python", "GUI"]}
          color="#e88849E6"
          url="/"
        ></Project>
      </ProjectsContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem 0;
`;
const Header = styled.div`
  padding: 2rem 0;
  display: flex;
`;
const Title = styled.h1``;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
`;
