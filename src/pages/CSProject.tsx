import React from "react";
import { Project } from "../components/Utils/Project";

import CSProject1 from "../assets/images/Projects/CSProject.jpg";
import { ProjectP } from "../components/Utils/ProjectP";
import { ProjectSubtitle } from "../components/Utils/ProjectSubtitle";
import { HighlightSpan } from "../components/Utils/HighlightSpan";
import { PLink } from "../components/Utils/PLink";
import styled from "styled-components";

interface CSProjectProps {}

export const CSProject: React.FC<CSProjectProps> = () => (
  <Project headerImg={CSProject1} title="Arduino Color Sorter">
    <ProjectSubtitle>Purpose</ProjectSubtitle>

    <ProjectP>
      The purpose of this project was to create a fully functional robot using
      an <HighlightSpan>Arduino microcontroller.</HighlightSpan> The robot
      performs certain maneuvers based on input from a Bluetooth terminal
      application.The robot has an optional "autonomous mode" which can be
      activated by typing the character 'a' through a Bluetooth terminal on a
      cellular device. When <HighlightSpan>autonomous</HighlightSpan> mode is
      activated, the robot will drive forward until the ultrasonic sensor on the
      front of the chassis detects that an object is within 10 cm. The robot
      will then redirect its route and continue driving forward until another
      object is encountered.
    </ProjectP>
    <ProjectSubtitle>Micro Controller</ProjectSubtitle>
    <ProjectP>
      The Arduino Uno is a microcontroller that is responsible for commanding
      all parts of the robot. The Arduino has digital input/output pins and
      analog pins that are responsible for sending and receiving data. The
      analog pins of the arduino allow the use of the ultrasonic sensor while
      the digital pins allow the use of the HC-08 bluetooth module. The Arduino
      is powered by a powerbank via the USB port.
    </ProjectP>
    <ProjectSubtitle>Motor Controller</ProjectSubtitle>
    <ProjectP>
      The <HighlightSpan>L293D Motor Controller Shield </HighlightSpan> operates
      the two motors on the chassis, receiving instructions from the Arduino
      Uno. The L293D allows wheel movement at various speeds. Motor wires are
      connected to the M1 (DC Motor 1) and M3 (DC Motor 2) terminal blocks,
      allowing control via the Arduino. The shield attaches directly on top of
      the Arduino and plugs into the input/output pins. Since the shield blocks
      direct access to the arduino's pins, wires were soldered onto the shield
      to allow the use of the pins, which are essential to use of the bluetooth
      module, breadboard and ultrasonic sensor.
    </ProjectP>

    <ProjectSubtitle>Coding</ProjectSubtitle>
    <ProjectP>
      The program to control this robot was written in the{" "}
      <HighlightSpan>
        <PLink href="https://www.arduino.cc/">Arduino IDE</PLink>
      </HighlightSpan>{" "}
      using the programming language C++. The AFMotor.h library was included to
      provide simultaneous speed and directional control for the motors
      alongside the L293D shield. The NewPing.h library was included to
      incorporate ultrasonic sensor functionality. Lastly, the SoftwareSerial.h
      library was included to allow serial communication between a mobile device
      and the Arduino via the HC-08. This allows the robot to move in certain
      directions based on input data received from a device. A link to my code
      for this project can be found below.
    </ProjectP>
  </Project>
);
const PImg = styled.img`
  width: 100%;
  border-radius: 10px;
  padding: 2rem 0;
`;
