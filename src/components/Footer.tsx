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
  padding: 5rem;
  padding-bottom: 2rem;
`;
const FooterContent = styled.h3`
  text-align: center;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.light};
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
