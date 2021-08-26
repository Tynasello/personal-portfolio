import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="logo"></Logo>
      <NavUl>
        <NavLi href="#about">About</NavLi>
        <NavLi href="#projects">Projects</NavLi>
        <NavLi href="#work">Work Experience</NavLi>
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
`;
const Logo = styled.img`
  width: 4vw;
`;

const NavUl = styled.div`
  display: flex;
`;
const NavLi = styled.a`
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
