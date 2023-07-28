import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u156voc', 'template_ceikw2u', form.current, '9gcx3H5jbLi5DKzGP')
      .then((result) => {
          console.log('swag');
      }, (error) => {
          console.log('epic fail');
      });
    e.target.reset()
  };
  
  return (
    <div className="container-contact">
      <h2>Contact Me!</h2>
      <form ref = {form} onSubmit={sendEmail}>
        <div className="input-group">
          <label htmlFor="user_name" name="user_name">Your Name:</label>
          <input type="text" required/>
        </div>
        
        <div className="input-group">
          <label htmlFor="user_email" name="user_email">Your Email:</label>
          <input type="text" required/>
        </div>
        
        <div className="input-group">
          <label htmlFor="subject" name="subject">Your Message:</label>
          <textarea id="message" row="8"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}