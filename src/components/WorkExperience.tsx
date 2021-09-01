import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WorkExperienceInfo } from "./Utils/WorkExperienceInfo";

interface WorkExperienceProps {
  id: string;
  classList: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  id,
  classList,
}) => {
  const [selectorId, setSelectorId] = useState("zfgroup");
  const [position, setPosition] = useState("Engineering Shadow");
  const [location, setLocation] = useState("ZF-Group");
  const [dates, setDates] = useState("Summer 2021");
  const [description, setDescription] = useState([
    "Shadowed a team of engineers at an automobile assembly plant.",
    "Worked on distance sensor installation which fixed an existing issue of incorrect operator installation of a part.",
    "Observed engineers solving real time module issues on the plant floor.",
    "Worked on DRM (Disaster Recovery Mode) project which supplied lines with backup systems in case of tool/module failures.",
    "My roles included data entry, cross referencing parts, and printing labeled instructions.",
  ]);

  useEffect(() => {
    let active: HTMLElement | null = document.getElementById("zf-selector");
    if (selectorId === "timhortons") {
      active = document.getElementById("timhortons-selector");
      setPosition("Service Employee");
      setLocation("Tim Hortons");
      setDates("July 2018 - September 2021");
      setDescription([
        "Responsible for efficiently filling customer orders and guaranteeing customer satisfaction.",
        "Ensured that proper safety guidelines and procedures were followed during the preparation and storage of food items.",
        "Actively worked with a team of co-workers to ensure group goals were met.",
      ]);
      document.getElementById("chc-selector")!.classList.remove("active");
      document.getElementById("zfgroup-selector")!.classList.remove("active");
    } else if (selectorId === "zfgroup") {
      active = document.getElementById("zfgroup-selector");

      setPosition("Engineering Shadow");
      setLocation("ZF Group");
      setDates("Summer 2021");
      setDescription([
        "Shadowed a team of engineers at an automobile assembly plant.",
        "Worked on distance sensor installation which fixed an existing issue of incorrect operator installation of a part.",
        "Observed engineers solving real time module issues on the plant floor.",
        "Worked on DRM (Disaster Recovery Mode) project which supplied lines with backup systems in case of tool/module failures.",
        "My roles included data entry, cross referencing parts, and printing labeled instructions.",
      ]);
      document
        .getElementById("timhortons-selector")!
        .classList.remove("active");
      document.getElementById("chc-selector")!.classList.remove("active");
    } else if (selectorId === "chc") {
      active = document.getElementById("chc-selector");

      setPosition("Introduction to BAS and HMS");
      setLocation("Windsor Essex Community Housing Corporation");
      setDates("Summer 2021");
      setDescription([
        "Introduced to various building automation system and heat management system drawings/blueprints for a local apartment complex.",
      ]);
      document
        .getElementById("timhortons-selector")!
        .classList.remove("active");
      document.getElementById("zfgroup-selector")!.classList.remove("active");
    }
    if (active !== null) {
      active.classList.add("active");
    }
  }, [selectorId]);

  return (
    <Container id={id} className={classList}>
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
            <LocationItem
              id="chc-selector"
              onClick={() => {
                setSelectorId("chc");
              }}
            >
              Windsor Essex CHC
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
  padding-bottom: 20rem;
  @media (max-width: 1250px) {
    padding: 0;
  }
`;

const Header = styled.div`
  padding: 2rem 0;
  display: flex;
`;
const Title = styled.h1`
  font-size: clamp(40px, 3.5vw, 100px);
`;
const Line = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; ;
`;
const WorkInfoSection = styled.div`
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const WorkLocationsSection = styled.div`
  min-width: 24%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const LocationsList = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
    > * {
      margin: 0.2rem 0;
    }
  }
`;
const LocationItem = styled.p`
  padding: 1rem 0.5rem;
  padding-left: 1rem;
  font-size: clamp(18px, 1.4vw, 100px);
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  margin-left: -3px;
  transition: background-color 0.8s;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    border-left: none;
    padding: 0.7rem 1rem;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; */
    margin-bottom: -3px;
    margin-left: 0;
  }
`;
