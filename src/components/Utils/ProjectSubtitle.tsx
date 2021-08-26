import React from "react";
import styled from "styled-components";

interface ProjectSubtitleProps {
  children?: string;
}

export const ProjectSubtitle: React.FC<ProjectSubtitleProps> = ({
  children,
}) => {
  return <Header>{children}</Header>;
};
const Header = styled.h3`
  font-size: 1.7em;
  padding: 1.5rem 0;
`;
