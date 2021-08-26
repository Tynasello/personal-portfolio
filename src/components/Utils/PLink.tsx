import React from "react";
import styled from "styled-components";

interface PLinkProps {
  href?: string;
  target?: string;
  children: any;
}

export const PLink: React.FC<PLinkProps> = ({
  href,
  target = "_blank",
  children,
}) => {
  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  );
};
const Link = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
