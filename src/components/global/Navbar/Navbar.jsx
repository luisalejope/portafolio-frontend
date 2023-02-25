import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
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
              <img className="logoNav" src='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoPortafolio1.png?raw=true' alt="desktopLogo" />
            </Link>
          </div>
        </div>

        <div className="rightNav">

          <NavLink
            className={path === '/' ? "linkNav active-style" : 'linkNav'}
            exact='true'
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={path === '/my-work' ? "linkNav active-style" : 'linkNav'}
            exact='true'
            to="/my-work"
          >
            My Work
          </NavLink>

          <NavLink
            className={path === '/projects'? "linkNav active-style" : 'linkNav'}
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
                className={path === '/' ? "linkNav active-style" : 'linkNav'}
                exact='true'
                to="/"
                onClick={() => setPath('/')}
              >
                Home
              </NavLink>
              {path === '/' && <img className="logoNav" src='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true' alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                className={path === '/my-work' ? "linkNav active-style" : 'linkNav'}
                exact='true'
                to="/my-work"
                onClick={() => setPath('/my-work')}
              >
                My Work
              </NavLink>
              {path === '/my-work' && <img className="logoNav" src='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true' alt="desktopLogo" />}
            </div>
            <div className="containerLink">
              <NavLink
                className={path === '/projects'? "linkNav active-style" : 'linkNav'}
                exact='true'
                to="/projects"
                onClick={() => setPath('/projects')}
              >
                Projects
              </NavLink>
              {path === '/projects' && <img className="logoNav" src='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true' alt="desktopLogo" />}
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
