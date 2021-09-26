import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainRoutes } from "./routes/MainRoutes";
import './styles/typography.css'
export const MainApp = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};
