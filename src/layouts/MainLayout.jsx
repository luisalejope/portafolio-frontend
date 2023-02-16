import React from "react";
import { Footer } from "../components/global/index";
import { Navbar } from "../components/global/index";
import "./style.css";
export const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <div className="allContent">
          <div className="navigationWrapper">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
