import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [display, setDisplay] = useState('none');

  const clickHandler = () => {
    if(display === 'none'){
      return setDisplay('block')
    }
    setDisplay('none');
  }

  const itemHandler = () => {
    setDisplay('none');
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDisplay('none');
    })
    return () => {
      window.removeEventListener('resize', () => {
        setDisplay('none');
      })
    }
  })
  return (
    <>
      <nav className={classes["nav-container"]}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      padding: "5px 8px",
                      background: "#313134",
                      borderRadius: "5px",
                    }
                  : { textDecoration: "none", padding: "5px 8px" }
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      padding: "5px 8px",
                      background: "#313134",
                      borderRadius: "5px",
                    }
                  : { textDecoration: "none", padding: "5px 8px" }
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      padding: "5px 8px",
                      background: "#313134",
                      borderRadius: "5px",
                    }
                  : { textDecoration: "none", padding: "5px 8px" }
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="resume"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      padding: "5px 8px",
                      background: "#313134",
                      borderRadius: "5px",
                    }
                  : { textDecoration: "none", padding: "5px 8px" }
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={classes["nav-phone-container"]} style={{display}}>
        <ul>
          <li>
            <NavLink to="/" style={{textDecoration: "none", color:"white"}} onClick={itemHandler}>About</NavLink>
          </li>
          <li>
            <NavLink to="projects" style={{textDecoration: "none", color:"white"}} onClick={itemHandler}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="contact" style={{textDecoration: "none", color:"white"}} onClick={itemHandler}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="resume" style={{textDecoration: "none", color:"white"}} onClick={itemHandler}>Resume</NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.navicon} onClick={clickHandler}>
        <AiOutlineMenu className={classes.icon}/>
      </div>
    </>
  );
};

export default Navbar;
