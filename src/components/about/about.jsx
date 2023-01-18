import React from 'react'
import './about.css'
import Me from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Months Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Counting</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Complete</small>
            </article>
          </div>

          <div className='btn-about'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate iure blanditiis commodi architecto adipisci assumenda maxime numquam officia molestias! At reiciendis facilis sint facere similique obcaecati ab tempora dignissimos?
          </p>
          <a href='#Contact' className='btn btn-primary'> Let's Talk </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
