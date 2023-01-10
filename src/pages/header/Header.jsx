import React from 'react';
import classes from './header.module.css';
import Img from '../../assets/avatar.png';
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes["left-side"]}>
        <h1>FULL NAME</h1>
        <h3>Full Stack Web Developer</h3>
        <div className={classes.icons}>
          <a href="https://www.instagram.com" rel="noreferrer" target='_blank'><BsInstagram className={classes.icon}/></a>
          <a href="https://github.com" rel="noreferrer" target='_blank'><BsGithub className={classes.icon}/></a>
          <a href="https://www.linkedin.com" rel="noreferrer" target='_blank'><BsLinkedin className={classes.icon}/></a>
        </div>
      </div>
      <div className={classes["right-side"]}>
        <div className={classes.stroke}></div>
        <img src={Img} alt="profile-img" />
      </div>
    </div>
  )
}

export default Header;