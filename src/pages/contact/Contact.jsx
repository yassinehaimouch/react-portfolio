import React from 'react';
import classes from './contact.module.css';

const Contact = () => {

  return (
    <div className={classes["contact-container"]}>
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder='Your Full Name' required/>
        <input type='email' placeholder='Email' required/>
        <textarea rows='5' placeholder='Your message' required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact