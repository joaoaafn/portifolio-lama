import React from 'react'
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = new useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2d2v3ei', 
            'template_blwxdiq', 
            formRef.current, 
            'HYyYdkwp7E-DNzrkk')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +55 48 988225694
                ``  </div>
                  <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    joao.aafn@gmail.com
                  </div>
                  <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    Av Jose Juvenal Mafra n2856, Navegantes / SC - Brazil
                  </div>
              </div>
          </div>
          <div className="c-rigth">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Name" name="user_name" />
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Subject" name="user_subject" />
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Email" name="user_email" />
              <textarea rows="5" style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message"></textarea>
              <button>Submit</button>
              {
                done && "Thank you..."
            }
          </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
