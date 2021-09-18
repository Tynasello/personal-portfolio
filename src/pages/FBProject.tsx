import React from "react";
import { Project } from "../components/Utils/Project";

import FBProject1 from "../assets/images/Projects/FBProject1.png";
import FBProjectVideo from "../assets/video/FBProject.mov";

import { ProjectP } from "../components/Utils/ProjectP";
import { ProjectSubtitle } from "../components/Utils/ProjectSubtitle";
import { HighlightSpan } from "../components/Utils/HighlightSpan";
import { PLink } from "../components/Utils/PLink";

interface FBProjectProps {}

export const FBProject: React.FC<FBProjectProps> = () => (
  <Project headerImg={FBProject1} title="Flappy Bird (Recreation)">
    <ProjectP>
      My Recreation of the popular game Flappy Bird.
      <br />
      <br />
      The code for this project was written in{" "}
      <HighlightSpan>Python</HighlightSpan> 3.6 leveraging the
      <HighlightSpan> Pygame</HighlightSpan> 1.9.6 library. Pygame is a set of
      modules created for the purpose of making video games and multimedia
      programs.
      <br />
      <br />
      The program's game loop is responsible for processing user input and
      updating object states and game display. I created custom game events and
      entity classes using inherited properties and methods from the PyGame
      library's Sprite class.
      <br />
      <br />
      The tutorials on{" "}
      <HighlightSpan>
        <PLink href="https://realpython.com/pygame-a-primer/">
          realpython.com
        </PLink>
      </HighlightSpan>
      , and{" "}
      <HighlightSpan>
        <PLink href="https://pythonprogramming.net/pygame-start-menu-tutorial/">
          pythonprogramming.net{" "}
        </PLink>
      </HighlightSpan>
      assisted me in using PyGame effectively. The video below shows me running
      the project's main.py file and me playing the game. Pressing the space bar
      causes the bird to jump. The goal is to get through as many pipes as
      possible without making contact. As soon as the bird collides with a pipe,
      the game ends. A link to my code for this project can be found{" "}
      <HighlightSpan>
        <PLink href="https://github.com/Tynasello/flappy-bird">here</PLink>
      </HighlightSpan>
      .
    </ProjectP>
    <ProjectSubtitle>Final Product</ProjectSubtitle>
    <video width="100%" height="100%" loop muted controls>
      <source src={FBProjectVideo} type="video/mp4" />
    </video>
  </Project>
);
