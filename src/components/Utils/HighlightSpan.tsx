import React from "react";
import styled from "styled-components";

interface HighlightSpanProps {
  children: any;
}

export const HighlightSpan: React.FC<HighlightSpanProps> = ({ children }) => {
  return <HighlightSpanContainer>{children}</HighlightSpanContainer>;
};
const HighlightSpanContainer = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
`;
