import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainRoutes } from "./routes/MainRoutes";
import './styles/typography.css'
import './styles/MainApp.css'
export const MainApp = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};
