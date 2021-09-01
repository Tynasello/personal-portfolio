/*--------------------------------------------------------------*/

import React from "react";
import { Route, Switch } from "react-router-dom";

import { ARProject } from "./pages/ARProject";
import { CSProject } from "./pages/CSProject";
import { FBProject } from "./pages/FBProject";
import { LandingPage } from "./pages/LandingPage";
import { WTProject } from "./pages/WTProject";

/*--------------------------------------------------------------*/

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/ARProject">
          {ARProject}
        </Route>
        <Route exact path="/CSProject">
          {CSProject}
        </Route>
        <Route exact path="/FBProject">
          {FBProject}
        </Route>
        <Route exact path="/WTProject">
          {WTProject}
        </Route>
      </Switch>
    </>
  );
};
