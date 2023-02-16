import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainRoutes } from "./routes/MainRoutes";
import './styles/typography.css'
import './styles/MainApp.css'
function MainApp() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

export default MainApp