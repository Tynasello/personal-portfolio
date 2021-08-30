import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

import { HashLink } from "react-router-hash-link";

interface NavProps {
  projectNav?: boolean;
}

export const Nav: React.FC<NavProps> = ({ projectNav }) => {
  if (projectNav) {
    return (
      <NavContainer>
        <LogoLink href="/">
          <Logo src={logo} alt="logo"></Logo>
        </LogoLink>
        <NavUl>
          <NavLi to="/">Home</NavLi>
        </NavUl>
      </NavContainer>
    );
  }

  return (
    <NavContainer>
      <LogoLink href="/">
        <Logo src={logo} alt="logo"></Logo>
      </LogoLink>

      <NavUl>
        <NavLi to="#about">About</NavLi>
        <NavLi to="#projects">Projects</NavLi>
        <NavLi to="#work">Work Experience</NavLi>
      </NavUl>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #25252e;
  border-bottom: 3px solid #383847;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  font-size: 1.2rem;

  @media (max-width: 750px) {
    padding: 1rem 2rem;
    > * > a {
      padding: 0 0.5rem;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 400px) {
    padding: 0.8rem;
    > * > a {
      font-size: 0.8rem;
    }
  }
`;
const LogoLink = styled.a`
  cursor: pointer;
`;
const Logo = styled.img`
  min-width: 50px;
  width: 4vw;
`;

const NavUl = styled.div`
  display: flex;
`;
const NavLi = styled(HashLink)`
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
