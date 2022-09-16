import React from 'react'
import './Contact.css'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const Contact = () => {

//   export const Contact= () => {
//     const form = useRef();

// emailjs would recognise the name of all the input fields
const Contact =()=>{
   const form = useRef();
  
   const [done, setDone] =useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j88tolm', 'template_iq29719', form.current, 'fhyONNPntA-O5TdzQ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className="contact-form">
        <div className="w-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur c-blur1" style={{background:"#ABF1FF94"}}></div>

          </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name = "message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                {/* after contact message  */}
                <span>{done && "Thanks for Contacting me!"}</span>
                <div className="blur c-blur2" style={{background:"var(--purple)"}}></div>
            </form>
            
        </div>
    </div>
  )
}

export default Contact


