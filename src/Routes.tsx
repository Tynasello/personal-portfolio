/*--------------------------------------------------------------*/

import React from "react";
import { Route, Switch } from "react-router-dom";

import { ARProject } from "./pages/ARProject";
import { LandingPage } from "./pages/LandingPage";

// import Login from "./pages/Login";

/*--------------------------------------------------------------*/

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/ARProject" component={ARProject}></Route>
      </Switch>
    </>
  );
};
