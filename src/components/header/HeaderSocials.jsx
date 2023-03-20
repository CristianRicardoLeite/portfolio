import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"

const HeaderSocials = () => {

  /* ================== Aos (scroll) ================ */

  React.useEffect(() => {
    Aos.init({
      duration: 5000,
    })
  }, [])

  return (
    <div data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className='header__socials'>
      <a class="iconLink" href='https://www.linkedin.com/in/devcristianricardoleite/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a class="iconLink" href='https://github.com/CristianRicardoLeite/' target='_blank' rel="noreferrer"><BsGithub /></a>
      <a class="iconLink" href='https://www.instagram.com/cristiannleite/' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
