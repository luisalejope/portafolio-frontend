import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

// import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { MyWork } from "../pages/MyWork";
import { Projects } from "../pages/Projects";

export const MainRoutes = () => {
  return (
    <MainLayout>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my-work" component={MyWork} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </MainLayout>
  );
};
