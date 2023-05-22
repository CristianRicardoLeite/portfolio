import React from 'react'
import { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import emailjs from 'emailjs-com';

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const Contact = () => {

  /* ================== Aos (scroll) ================ */

  React.useEffect(() => {
    Aos.init({
      duration: 5000,
      delay: 100,

    })
  }, [])

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
          <article data-aos="flip-down" data-aos-duration="1000" className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>cristianricardoleite@gmail.com</h5>
            <a href='mailto:cristianricardoleite@gmail.com' target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article data-aos="flip-down" data-aos-duration="1000" className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55(47)99726-0472</h5>
            <a href="https://wa.me/5547997260472?text=ola,%20vi%20seu%20portifolio,%20quando%20podemos%20marcar%20a%20entrevista?" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article data-aos="flip-down" data-aos-duration="1000" className='contact__option'>
            <FiInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>cristiannleite</h5>
            <a href="https://www.instagram.com/cristiannleite/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form data-aos="zoom-in" data-aos-duration="1000" ref={form} onSubmit={sendEmail}>
          <input className='textArea' data-aos="zoom-in" type='text' name='name' placeholder='Your Full Name' required />
          <input className='textArea' data-aos="zoom-in" type='email' name='email' placeholder='Your Email' required />
          <textarea className='textArea' data-aos="zoom-in" name='message' rows='10' placeholder='Your Message' required />
          <button data-aos="zoom-in" type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
