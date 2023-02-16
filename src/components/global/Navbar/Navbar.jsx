import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import desktopLogo from "../../../assets/logoPortafolio1.png";
import mobileLogo from "../../../assets/logoSimpleSinFondo.png";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Navbar = () => {

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
            className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
            exact='true'
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
            exact='true'
            to="/my-work"
          >
            My Work
          </NavLink>

          <NavLink
            className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
            exact='true'
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </nav>
    )
  }
  const MobileNav = () => {
    return (
      <nav className="navContainer">
        <div className="menuToggle">

          <input type="checkbox" />

          
          <span></span>
          <span></span>
          <span></span>


          <div className="menu">
            <div className="containerLink">
              <NavLink
                className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
                exact='true'
                to="/"
                onClick={() => setPath('/')}
              >
                Home
              </NavLink>
              {path === '/' && <img className="logoNav" src={mobileLogo} alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
                exact='true'
                to="/my-work"
                onClick={() => setPath('/my-work')}
              >
                My Work
              </NavLink>
              {path === '/my-work' && <img className="logoNav" src={mobileLogo} alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                className={({isActive}) => (isActive ? "linkNav active-style" : 'linkNav')}
                exact='true'
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
    </>
  );
};


export default Navbar
