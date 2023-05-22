import React, { useEffect } from 'react'
import './about.css'
import Me from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const About = () => {

  /* ================== Aos (scroll) ================ */

  useEffect(() => {
    Aos.init({
      duration: 5000,
    })
  }, [])

  return (
    <section
      data-aos-easing="ease-in-back"

      id='About'>
      <h5 data-aos="fade-right" data-aos-duration="1000">Get To Know</h5>
      <h2 data-aos="fade-left" data-aos-duration="1000">About Me</h2>

      <div className="container about__container">
        <div data-aos="fade-right" data-aos-duration="1000" className="about__me">
          <div className="about__me-image">
            <img data-aos="fade-left" data-aos-duration="1000" src={Me} alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article data-aos="flip-right" data-aos-duration="1000" className='about__card'>
              <FaAward className='about__icon' />
              <h5 className='H5'>Experience</h5>
              <small>5+ Months Working</small>
            </article>
            <article data-aos="flip-up" data-aos-duration="1000" className='about__card'>
              <FiUsers className='about__icon' />
              <h5 className='H5'>Clients</h5>
              <small>Counting</small>
            </article>
            <article data-aos="flip-left" data-aos-duration="1000" className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5 className='H5'>Projects</h5>
              <small>10+ Complete</small>
            </article>
            <article data-aos="flip-left" data-aos-duration="1000" className='about__card MoreThanOneSkill__About'>
              <VscFolderLibrary className='about__icon' />
              <h5 className='H5'>Languages</h5>
              <small>Português Nativo</small><br />
              <small>Español Fluente</small><br />
              <small>Intermediary English </small>
            </article>
            <article data-aos="flip-left" data-aos-duration="1000" className='about__card MoreThanOneSkill__About'>
              <VscFolderLibrary className='about__icon ' />
              <h5 className='H5'>Skills</h5>
              <small>Extremely Communicative</small><br />
              <small>flexible</small><br />
              <small>Execution Power</small><br />
              <small>Problem Solving</small>
            </article>
            <article data-aos="flip-left" data-aos-duration="1000" className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5 className='H5'>Interest in jobs</h5>
              <small>Remote Only </small>
            </article>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" className='btn-about'>
            <p>
              I'm Cristian, a technology lover with a really above-average <bold>project execution power</bold>.
              I'm looking for <bold> expanding companies </bold> that allow me to grow as a professional and as a human being.
              I do volunteer work dedicated to helping people be happier even in the face of problems, so <bold>geographic freedom </bold> is one of my focuses.

            </p>
            <a href='#Contact' className='btn btn-primary'> Let's Talk </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
