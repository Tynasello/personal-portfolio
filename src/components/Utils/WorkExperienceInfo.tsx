import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import { GiStrikingArrows } from "react-icons/gi";

interface WorkExperienceInfoProps {
  selectorId: string;
  position: string;
  location: string;
  dates: string;
  description: any;
  children?: any;
}

export const WorkExperienceInfo: React.FC<WorkExperienceInfoProps> = ({
  selectorId,
  position,
  location,
  dates,
  description,
  children,
}) => {
  return (
    <InfoContainer id={selectorId}>
      <Header>
        <Position>{position} at</Position>
        <Location> {location}</Location>
      </Header>
      <Dates>{dates}</Dates>
      <PointsSection>
        {description.map((point: string) => {
          return (
            <Point key={v4()}>
              <PointContainer>
                <Icon>
                  <GiStrikingArrows />
                </Icon>
                <PointP>{point}</PointP>
              </PointContainer>
            </Point>
          );
        })}
      </PointsSection>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;

  & > * {
    padding: 0.3rem 0;
  }
`;
const Header = styled.div`
  display: flex;
`;
const Position = styled.h1`
  font-size: 2.2em;
`;
const Location = styled.h1`
  padding-left: 0.6rem;
  font-size: 2.2em;
  color: ${({ theme }) => theme.colors.secondary};
`;
const Dates = styled.h3`
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.light};
`;
const PointsSection = styled.div`
  color: ${({ theme }) => theme.colors.light};
`;
const Point = styled.div`
  padding: 0.3rem 0;
`;
const PointContainer = styled.div`
  display: flex;
  font-size: 1em;
`;
const Icon = styled.i`
  font-size: 1.2em;
  padding-right: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PointP = styled.p`
  font-size: 1.2em;
`;
