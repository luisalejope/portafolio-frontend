import React from "react";
import { Navbar } from "../components/Navbar";
import "./styles/MainLayout.css";
export const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="allContent">
        <div className="navigationWrapper">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
