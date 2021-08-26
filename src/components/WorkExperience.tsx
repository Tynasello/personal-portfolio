import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WorkExperienceInfo } from "./Utils/WorkExperienceInfo";

interface WorkExperienceProps {
  id: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ id }) => {
  const [selectorId, setSelectorId] = useState("zfgroup");
  const [position, setPosition] = useState("Engineering Shadow");
  const [location, setLocation] = useState("ZF-Group");
  const [dates, setDates] = useState("Summer 2021");
  const [description, setDescription] = useState([
    "safety guidelines and procedures are followed during",
    "I ensure that proper safety guidelines and procedures are followed during the preparation and storage of food items.",
    "Responsible for efficiently filling customer orders and guaranteeing customer satisfaction.",
  ]);

  useEffect(() => {
    let active: HTMLElement | null = document.getElementById(
      "timhortons-selector"
    );
    if (selectorId === "timhortons") {
      active = document.getElementById("timhortons-selector");
      setPosition("Service Employee");
      setLocation("Tim Hortons");
      setDates("July 2018 - Present");
      setDescription([
        "Responsible for efficiently filling customer orders and guaranteeing customer satisfaction.",
        "I ensure that proper safety guidelines and procedures are followed during the preparation and storage of food items.",
        "I actively work with a team of co-workers to ensure group goals are met.",
      ]);
      document.getElementById("zfgroup-selector")!.classList.remove("active");
    } else if (selectorId === "zfgroup") {
      active = document.getElementById("zfgroup-selector");

      setPosition("Engineer Shadow");
      setLocation("ZF Group");
      setDates("Summer 2021");
      setDescription([
        "safety guidelines and procedures are followed during",
        "I ensure that proper safety guidelines and procedures are followed during the preparation and storage of food items.",
        "Responsible for efficiently filling customer orders and guaranteeing customer satisfaction.",
      ]);
      document
        .getElementById("timhortons-selector")!
        .classList.remove("active");
    }
    if (active !== null) {
      active.classList.add("active");
    }
  }, [selectorId]);

  return (
    <Container id={id}>
      <Header>
        <Title>Work Experience</Title>
        <Line></Line>
      </Header>
      <WorkInfoSection>
        <WorkLocationsSection>
          <LocationsList>
            <LocationItem
              id="zfgroup-selector"
              onClick={() => {
                setSelectorId("zfgroup");
              }}
            >
              ZF Group
            </LocationItem>
            <LocationItem
              id="timhortons-selector"
              onClick={() => {
                setSelectorId("timhortons");
              }}
            >
              Tim Hortons
            </LocationItem>
          </LocationsList>
        </WorkLocationsSection>
        <WorkExperienceInfo
          selectorId={selectorId}
          position={position}
          location={location}
          dates={dates}
          description={description}
        ></WorkExperienceInfo>
      </WorkInfoSection>
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem;
`;

const Header = styled.div`
  padding: 2rem 0;
  display: flex;
`;
const Title = styled.h1``;
const Line = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; ;
`;
const WorkInfoSection = styled.div`
  display: flex;
`;

const WorkLocationsSection = styled.div`
  width: 30%;
`;
const LocationsList = styled.div`
  display: flex;
  flex-direction: column;
`;
const LocationItem = styled.p`
  padding: 1rem 0.5rem;
  padding-left: 1rem;
  font-size: 1.4em;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  margin-left: -3px;
  transition: background-color 0.8s;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
  }
`;
