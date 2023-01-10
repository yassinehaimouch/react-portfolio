import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes["about-container"]}>
      <h1 className={classes.title}>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nulla, facilis magni alias similique architecto consequuntur tempora porro distinctio ab minus dolores.<br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nulla, facilis magni alias similique architecto consequuntur tempora porro distinctio ab minus dolores.<br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus labore, ullam architecto voluptatem accusantium aliquid ratione aut odit doloribus debitis nostrum cum.
      </p>
    </div>
  );
};

export default About;
