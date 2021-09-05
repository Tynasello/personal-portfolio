import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

import { VscGithub } from "react-icons/vsc";

interface ProjectTileProps {
  title: string;
  description: string;
  img?: any;
  tags: any;
  color: string;
  redirect?: string;
  url?: string;
  githubLink?: string;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  img,
  tags,
  color,
  redirect = "/",
  url,
  githubLink,
}) => {
  const [bgColor, setBgColor] = useState(color);
  useEffect(() => {
    return;
  }, [bgColor]);
  const handleProjectClick = (e: SyntheticEvent) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  const handleGithubLink = (e: SyntheticEvent) => {
    e.preventDefault();

    window.open(githubLink, "_blank");
    e.stopPropagation();
  };
  return (
    <Container
      to={redirect}
      onClick={(e) => {
        handleProjectClick(e);
      }}
    >
      <ProjectImg src={img} alt="Project Image"></ProjectImg>

      <ProjectContainer
        style={{ backgroundColor: bgColor }}
        onClick={(e) => {
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
      <GithubLink
        href={url}
        onClick={(e) => {
          handleGithubLink(e);
        }}
      >
        <VscGithub />
      </GithubLink>
    </Container>
  );
};
const Container = styled(Link)`
  position: relative;
  margin: 0.8rem;
`;
const ProjectImg = styled.img`
  z-index: -1;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  top: 0;
`;

const ProjectContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  aspect-ratio: 1;
  height: 298px;
  overflow: hidden;
  transition: all 0.5s;

  &:hover {
    & > * {
      display: none;
    }
  }
  @media (max-width: 450px) {
    padding: 0.8rem;
  }
`;
const Header = styled.h3`
  font-size: 2em;
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6rem 0;
  @media (max-width: 450px) {
    margin: 0.4rem 0;
  }
`;
const Tag = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.dark};

  padding: 0.4rem;
  margin: 0.2rem 0.6rem 0.2rem 0;
  border-radius: 8px;
  @media (max-width: 450px) {
    font-size: 0.8rem;
    margin: 0.1rem 0.5rem 0.1rem 0;
    padding: 0.3rem;
  }
`;
const Description = styled.div`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const GithubLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  font-size: 1.5em;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;
