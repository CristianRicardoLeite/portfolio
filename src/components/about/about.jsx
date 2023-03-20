import React from 'react'
import './about.css'
import Me from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const About = () => {

  /* ================== Aos (scroll) ================ */

  React.useEffect(() => {
    Aos.init({
      duration: 5000,
    })
  }, [])

  return (
    <section
    data-aos-easing="ease-in-back"

      id='About'>
      <h5 data-aos="fade-right" data-aos-duration="1250">Get To Know</h5>
      <h2 data-aos="fade-left" data-aos-duration="1250">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div data-aos="fade-left" data-aos-duration="1250" className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article data-aos="flip-right" data-aos-duration="1250" className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Months Working</small>
            </article>
            <article data-aos="flip-up" data-aos-duration="1250" className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Counting</small>
            </article>
            <article data-aos="flip-left" data-aos-duration="1250" className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Complete</small>
            </article>
          </div>

          <div data-aos="fade-right" data-aos-duration="1250" className='btn-about'>
            <p>
              
            </p>
            <a href='#Contact' className='btn btn-primary'> Let's Talk </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
