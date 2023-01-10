import React from "react";
import classes from "./projects.module.css";
import Image from "../../assets/imag.PNG";

const Projects = () => {
  return (
    <div className={classes["projects-container"]}>
      <h1>Projects</h1>

      <div className={classes.projects}>

        <div className={classes.project}>
          <img src={Image} alt="img" />
        </div>
        <div className={classes.project}>
          <img src={Image} alt="img" />
        </div>
        <div className={classes.project}>
          <img src={Image} alt="img" />
        </div>

        <div className={classes.project}>
          <img src={Image} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
