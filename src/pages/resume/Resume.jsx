import React from 'react';
import classes from './resume.module.css';

const Resume = () => {
  return (
    <div className={classes["resume-container"]}>
      <h1>Resume</h1>
      <div className={classes.resume}>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim beatae nesciunt rerum ratione illum.</h3>
        <button>Download Resume</button>
      </div>
    </div>
  )
}

export default Resume