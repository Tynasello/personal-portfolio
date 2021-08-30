import React from "react";
import styled from "styled-components";

interface ProjectPProps {
  children: any;
}

export const ProjectP: React.FC<ProjectPProps> = ({ children }) => {
  return <P>{children}</P>;
};
const P = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(18px, 1.4vw, 100px);
  font-weight: 100;
  line-height: 1.3em;
`;
