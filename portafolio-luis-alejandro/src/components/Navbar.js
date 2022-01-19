import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../assets/logoPortafolio1.png";
export const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="itemsContainer">
        <div className="leftNav">
          <Link to="/">
            <img className="logoNav" src={logo} alt="logo" />
          </Link>
        </div>
      </div>

      <div className="rightNav">
       
          <NavLink
            activeClassName="active"
            className="linkNav"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="active"
            className="linkNav"
            exact
            to="/my-work"
          >
            My Work
          </NavLink>

          <NavLink
            activeClassName="active"
            className="linkNav"
            exact
            to="/projects"
          >
            Projects
          </NavLink>
          {/* <NavLink
            activeClassName="active"
            className="linkNav" 
            exact
            to="/contact"
          >
            Contact
          </NavLink> */}
        
      </div>
    </nav>
  );
};
