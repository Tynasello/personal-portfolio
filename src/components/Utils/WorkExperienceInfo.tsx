import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import { GiStrikingArrows } from "react-icons/gi";
import { HighlightSpan } from "./HighlightSpan";

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
        {position}
        <HighlightSpan
          style={{
            paddingLeft: ".1rem",
            color: "#7f5bf0",
          }}
        >
          {" "}
          @ {location}
        </HighlightSpan>
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
  @media (max-width: 1300px) {
    padding: 1rem 0;
  }
`;
const Header = styled.div`
  font-size: clamp(20px, 2vw, 100px);
`;

const Dates = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  font-size: clamp(18px, 1.4vw, 100px);
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
  padding-right: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(18px, 1vw, 100px);
`;

const PointP = styled.p`
  font-size: clamp(16px, 1.2vw, 100px);
`;
