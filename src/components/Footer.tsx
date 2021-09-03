import React from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";

import resume from "../assets/Resume.pdf";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <FooterLinks>
        <FooterLi href="https://github.com/tynasello" target="_blank">
          <FiGithub />
        </FooterLi>
        <FooterLi href="mailto:tynasello@gmail.com" target="_blank">
          <BiMailSend />
        </FooterLi>
        <FooterLi href={resume} target="_blank">
          <RiFilePaper2Line />
        </FooterLi>
      </FooterLinks>
      <FooterContent>© Ty Nasello 2020. All Rights Reserved.</FooterContent>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`;
const FooterContent = styled.h3`
  text-align: center;
  font-size: 1em;
  padding-top: 2rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
const FooterLinks = styled.ul`
  display: none;
  @media (max-width: 470px) {
    display: flex;
  }
`;

const FooterLi = styled.a`
  color: ${({ theme }) => theme.colors.light};
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.5s;
  font-size: clamp(25px, 2vw, 1000px);

  &:hover {
    transform: translateY(-4px);
  }
`;
