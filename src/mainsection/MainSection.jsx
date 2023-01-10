import React from 'react';
import classes from './mainsection.module.css';
import Navbar from './Navbar';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Resume from '../pages/resume/Resume';

import { Route, Routes } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className={classes.container}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default MainSection