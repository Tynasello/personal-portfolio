import React from "react";
import styled from "styled-components";

import { HashRouter as Router } from "react-router-dom";

import { Routes } from "./Routes";

function App() {
  return (
    <Container>
      <Router>
        <Routes />
      </Router>
    </Container>
  );
}

export default App;
const Container = styled.div``;
const ContentContainer = styled.div`
  width: 60vw;
  margin: 2rem auto;
`;
