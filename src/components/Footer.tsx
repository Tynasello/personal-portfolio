import React from "react";
import styled from "styled-components";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <FooterContent>© Ty Nasello 2020. All Rights Reserved.</FooterContent>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10rem;
  padding-bottom: 2rem;
`;
const FooterContent = styled.h3`
  text-align: center;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.light};
`;