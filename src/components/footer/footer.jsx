import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#footer' className='footer__logo'>Cristian's WebSite</a>

      <ul className='permalinks'>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        
        <a href="https://www.instagram.com/cristiannleite/"><FiInstagram/></a>
        
        <a href="https://wa.me/5547997260472?text=ola,%20vi%20seu%20portifolio,%20quando%20podemos%20marcar%20a%20entrevista?"><BsWhatsapp/></a>
      </div>
    </footer>
  )
}

export default Footer
