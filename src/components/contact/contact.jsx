import React from 'react'
import { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kqydh3v', 'template_wv5168d', form.current, 'ZrN33h3aOqJ3e2eBB')
    
    e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cristianricardoleite@gmail.com</h5>
            <a href='mailto:cristianricardoleite@gmail.com' target="_blank" rel="noreferrer">Send a Message</a>           
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55(47)99726-0472</h5>
            <a href="https://wa.me/5547997260472?text=ola,%20vi%20seu%20portifolio,%20quando%20podemos%20marcar%20a%20entrevista?" target="_blank" rel="noreferrer">Send a Message</a>           
          </article>
          <article className='contact__option'>
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>cristiannleite</h5>
            <a href="https://www.instagram.com/cristiannleite/" target="_blank" rel="noreferrer">Send a Message</a>           
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea  name='message' rows='10' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
