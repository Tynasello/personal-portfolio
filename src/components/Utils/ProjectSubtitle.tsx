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
  font-size: clamp(22px, 1.6vw, 100px);
  padding: 1.5rem 0;
`;
