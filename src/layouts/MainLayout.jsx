import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./styles/MainLayout.css";
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
