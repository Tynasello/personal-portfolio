import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

interface ProjectTileProps {
  title: string;
  description: string;
  img?: any;
  tags: any;
  color: string;
  url?: string;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  img,
  tags,
  color,
  url = "/",
}) => {
  const [bgColor, setBgColor] = useState(color);
  useEffect(() => {
    return;
  }, [bgColor]);
  return (
    <Container to={url}>
      <ProjectImg src={img} alt="Project Image"></ProjectImg>

      <ProjectContainer
        style={{ backgroundColor: bgColor }}
        onClick={() => {
          return <Redirect to="/somewhere/else" />;
        }}
        onMouseOverCapture={() => {
          setBgColor("transparent");
        }}
        onMouseOutCapture={() => {
          setBgColor(color);
        }}
      >
        <Header>{title}</Header>
        <TagsContainer>
          {tags.map((tag: string) => {
            return <Tag key={v4()}>{tag}</Tag>;
          })}
        </TagsContainer>
        <Description>{description}</Description>
      </ProjectContainer>
    </Container>
  );
};
const Container = styled(Link)`
  position: relative;
`;
const ProjectImg = styled.img`
  z-index: -1;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  top: 0;
  &:hover {
  }
`;

const ProjectContainer = styled.div`
  padding: 1.5rem;
  border-radius: 5px;
  aspect-ratio: 1;
  overflow: hidden;
  & > * {
    padding: 0.2rem 0;
  }
  transition: all 0.5s;
  &:hover {
    & > * {
      display: none;
    }
  }
`;
const Header = styled.h3`
  font-size: 2em;
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.dark};

  padding: 0.6rem 0.4rem;
  margin: 0.3rem 0.6rem 0.3rem 0;
  border-radius: 8px;
`;
const Description = styled.div``;
