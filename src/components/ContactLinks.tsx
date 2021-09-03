import React from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";

import resume from "../assets/Resume.pdf";

interface ContactLinksProps {}

export const ContactLinks: React.FC<ContactLinksProps> = () => {
  return (
    <NavContainer>
      <NavUl>
        <NavLi href="https://github.com/tynasello" target="_blank">
          <FiGithub />
        </NavLi>
        <NavLi href="mailto:tynasello@gmail.com" target="_blank">
          <BiMailSend />
        </NavLi>
        <NavLi href={resume} target="_blank">
          <RiFilePaper2Line />
        </NavLi>
      </NavUl>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 19;
  @media (max-width: 470px) {
    display: none;
  }
`;
const NavUl = styled.ul`
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 870px) {
    width: 4rem;
    margin-bottom: 1rem;
  }
`;
const NavLi = styled.a`
  font-size: 2rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.5s;
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(25px, 1.8vw, 100vw);
  @media (max-width: 870px) {
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;
