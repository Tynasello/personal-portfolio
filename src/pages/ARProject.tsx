import React from "react";
import { Project } from "../components/Utils/Project";

import ARProject1 from "../assets/images/Projects/ARProject1.png";
import ARProject2 from "../assets/images/Projects/ARProject2.jpg";
import ARProjectVideo from "../assets/video/ARProject.mp4";

import { ProjectP } from "../components/Utils/ProjectP";
import { ProjectSubtitle } from "../components/Utils/ProjectSubtitle";
import { HighlightSpan } from "../components/Utils/HighlightSpan";
import { PLink } from "../components/Utils/PLink";
import styled from "styled-components";

interface ARProjectProps {}

export const ARProject: React.FC<ARProjectProps> = () => (
  <Project headerImg={ARProject2} title="Arduino Robot Car">
    <ProjectP>
      The purpose of this project was to create a fully functional robot using
      an{" "}
      <HighlightSpan>
        {" "}
        <PLink href="https://www.arduino.cc/">Arduino</PLink>{" "}
      </HighlightSpan>
      Uno microcontroller. The robot performs certain maneuvers based on input
      from a Bluetooth terminal application. The robot has an optional
      "autonomous mode" which when activated, will cause the robot to drive
      forward, redirecting its route only when the ultrasonic sensor detects an
      object within 10 cm.
    </ProjectP>

    <ProjectSubtitle>Functionality</ProjectSubtitle>
    <ProjectP>
      The Arduino is responsible for commanding all parts of the robot. The
      robots <HighlightSpan>HC-SR04 ultrasonic sensor</HighlightSpan> and{" "}
      <HighlightSpan>HC-08 Bluetooth module</HighlightSpan> are connected to the
      Arduino's analog and digital pins respectively. The Arduino is powered via
      a USB connected powerbank. The{" "}
      <HighlightSpan>L293D Motor Controller Shield </HighlightSpan> plugs into
      the Arudino from the top and operates the motors on the chassis.
      <br />
      <br />
      All actions performed by the robot are due to input from a bluetooth
      terminal application . When specific characters are sent via bluetooth to
      the robot's HC-08 module, corresponding actions are performed.
    </ProjectP>
    <PImg src={ARProject1} alt="ARProject1"></PImg>

    <ProjectSubtitle>Coding</ProjectSubtitle>

    <ProjectP>
      The program to control the robot was written in the{" "}
      <HighlightSpan>
        <PLink href="https://www.arduino.cc/">Arduino IDE</PLink>
      </HighlightSpan>{" "}
      using the programming language C++. The AFMotor.h library provided
      simultaneous speed and directional control for the motors alongside the
      L293D shield. The NewPing.h library delivered ultrasonic sensor
      functionality. Lastly, the SoftwareSerial.h library was included to allow
      serial communication between a bluetooth terminal and the Arduino via the
      HC-08. A link to my code for this project can be found{" "}
      <HighlightSpan>
        <PLink href="https://github.com/Tynasello/arduino-robot">here</PLink>
      </HighlightSpan>
      .
    </ProjectP>

    <ProjectSubtitle>Final Product</ProjectSubtitle>
    <video width="100%" height="100%" loop muted controls>
      <source src={ARProjectVideo} type="video/mp4" />
    </video>
  </Project>
);
const PImg = styled.img`
  width: 100%;
  padding: 2rem 0;
`;
