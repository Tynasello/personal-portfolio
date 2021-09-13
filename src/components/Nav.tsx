import React, { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";
import modalWave from "../assets/images/modalwave.svg";

import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { RiFilePaper2Line } from "react-icons/ri";

import resume from "../assets/Ty_Nasello_Resume.pdf";

import { HashLink } from "react-router-hash-link";

interface NavProps {
  projectNav?: boolean;
}

export const Nav: React.FC<NavProps> = ({ projectNav }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const modalDiv = document.getElementById("modal");
    hamburger?.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      modalDiv!.classList.toggle("modal");
      modalDiv!.classList.toggle("modal-active");
    });
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  const modalLinkClick = (e: SyntheticEvent) => {
    const hamburger = document.querySelector(".hamburger");
    hamburger!.classList.toggle("is-active");
    document.getElementById("modal")?.classList.toggle("modal-active");
    document.getElementById("modal")?.classList.toggle("modal");
  };

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
  if (width < 600) {
    return (
      <NavContainer className={"navContainer"}>
        <LogoLink href="/">
          <Logo src={logo} alt="logo"></Logo>
        </LogoLink>

        <ul className={"hamburger"}>
          <span></span>
          <span></span>
          <span></span>
        </ul>
        <div id={"modal"} className={"modal"}>
          <NavUl>
            <NavLi onClick={(e) => modalLinkClick(e)} to="#about">
              About
            </NavLi>
            <NavLi onClick={(e) => modalLinkClick(e)} to="#projects">
              Projects
            </NavLi>
            <NavLi onClick={(e) => modalLinkClick(e)} to="#work">
              Work Experience
            </NavLi>
            <ContactDiv>
              <ContactLi
                href="https://www.linkedin.com/in/ty-nasello/"
                target="_blank"
              >
                <GrLinkedinOption />
              </ContactLi>
              <ContactLi href="https://github.com/tynasello" target="_blank">
                <AiOutlineGithub />
              </ContactLi>
              <ContactLi href="mailto:tynasello@gmail.com" target="_blank">
                <SiMinutemailer />
              </ContactLi>
              <ContactLi href={resume} target="_blank">
                <RiFilePaper2Line />
              </ContactLi>
            </ContactDiv>
            <ModalImg src={modalWave} alt="logo"></ModalImg>
          </NavUl>
        </div>
      </NavContainer>
    );
  }

  return (
    <NavContainer className={"navContainer"}>
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
  font-size: 1.2rem;
  padding: 1rem 5rem;

  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;
const LogoLink = styled.a`
  cursor: pointer;
`;
const Logo = styled.img`
  min-width: 60px;
  width: 4vw;
`;
const ModalImg = styled.img`
  position: absolute;
  bottom: -2rem;
  left: 0;
  height: 60vh;
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
const ContactDiv = styled.div`
  z-index: 12;
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;

  @media (max-width: 470px) {
    display: flex;
  }
`;
const ContactLi = styled.a`
  padding: 0 1rem;
  font-size: 2rem;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-4px);
  }
`;
