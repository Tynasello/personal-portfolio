import React from "react";
import { Project } from "../components/Utils/Project";

import CSProject1 from "../assets/images/Projects/CSProject.jpg";
import CSProjectVideo from "../assets/video/CSProject.mp4";

import { ProjectP } from "../components/Utils/ProjectP";
import { ProjectSubtitle } from "../components/Utils/ProjectSubtitle";
import { HighlightSpan } from "../components/Utils/HighlightSpan";
import { PLink } from "../components/Utils/PLink";

interface CSProjectProps {}

export const CSProject: React.FC<CSProjectProps> = () => (
  <Project headerImg={CSProject1} title="Arduino Color Sorter">
    <ProjectP>
      The purpose of this project was to create a system that would sort
      Skittles based on color. Two micro servo motors were used in the project;
      one to pick up the Skittles, and one to drop them into designated cups. A
      <HighlightSpan> TCS230 color sensor</HighlightSpan> was used to
      differentiate between red, green, and yellow skittles.
    </ProjectP>

    <ProjectSubtitle>Color Sensor Functionality</ProjectSubtitle>
    <ProjectP>
      The color sensor contains 64 evenly distributed red, green, blue and clear
      photodiodes which are responsible for color readings. The TCS230's
      readings are converted from current to frequency, allowing the Arduino to
      discern skittle color. A website that assisted my understanding of the
      TCS230 can be found{" "}
      <HighlightSpan>
        <PLink href="https://howtomechatronics.com/tutorials/arduino/arduino-color-sensing-tutorial-tcs230-tcs3200-color-sensor/">
          here
        </PLink>
      </HighlightSpan>
      .
    </ProjectP>

    <ProjectSubtitle>Coding</ProjectSubtitle>

    <ProjectP>
      The program to control the robot was written in the{" "}
      <HighlightSpan>
        <PLink href="https://www.arduino.cc/">Arduino IDE</PLink>
      </HighlightSpan>{" "}
      using the programming language C++. The Servo.h library allowed the
      control of the two micro servos. The micro servos were controlled using
      the write() function that would turn the servos based on an inputted
      degree amount. The TCS230 color sensor was utilized by using the pulseIn()
      function that would read the output frequency detected by the sensor.
      These values were then inserted into three different 'if statements' (one
      for red, green and yellow) that would determine Skittle color based on
      pre-determined frequency numbers that corresponded to each color. A link
      to my code for this project can be found{" "}
      <HighlightSpan>
        <PLink href="https://github.com/Tynasello/color-sorter">here</PLink>
      </HighlightSpan>
    </ProjectP>
    <ProjectSubtitle>Final Product</ProjectSubtitle>
    <video width="100%" height="100%" loop muted controls>
      <source src={CSProjectVideo} type="video/mp4" />
    </video>
  </Project>
);
