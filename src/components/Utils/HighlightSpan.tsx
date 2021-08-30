import React from "react";
import styled from "styled-components";

interface HighlightSpanProps {
  style?: any;
  children: any;
}

export const HighlightSpan: React.FC<HighlightSpanProps> = ({
  style,
  children,
}) => {
  return (
    <HighlightSpanContainer style={style}>{children}</HighlightSpanContainer>
  );
};
const HighlightSpanContainer = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
`;
