import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import desktopLogo from "../assets/logoPortafolio1.png";
import mobileLogo from "../assets/logoSimpleSinFondo.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Navbar = () => {

  const { height, width } = useWindowDimensions();
  const [path, setPath] = useState(window.location.pathname);
 
  const DesktopNav = () => {
    return (
      <nav className="navContainer">
        <div className="itemsContainer">
          <div className="leftNav">
            <Link to="/">
              <img className="logoNav" src={desktopLogo} alt="desktopLogo" />
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
    )
  }
  const MobileNav = () => {
    return (
      <nav role="navigation">
        <div className="menuToggle">

          <input type="checkbox" />


          <span></span>
          <span></span>
          <span></span>


          <div className="menu">
            <div className="containerLink">
              <NavLink
                activeClassName="active"
                className="linkNav"
                exact
                to="/"
                onClick={() => setPath('/')}
              >
                Home
              </NavLink>
              {path === '/' && <img className="logoNav" src={mobileLogo} alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                activeClassName="active"
                className="linkNav"
                exact
                to="/my-work"
                onClick={() => setPath('/my-work')}
              >
                My Work
              </NavLink>
              {path === '/my-work' && <img className="logoNav" src={mobileLogo} alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                activeClassName="active"
                className="linkNav"
                exact
                to="/projects"
                onClick={() => setPath('/projects')}
              >
                Projects
              </NavLink>
              {path === '/projects' && <img className="logoNav" src={mobileLogo} alt="desktopLogo" />}
            </div>

          </div>
        </div>
      </nav>
    )
  }
  return (
    <>
      {width >= '844' ? <DesktopNav /> : <MobileNav />}
      {width}
    </>
  );
};
