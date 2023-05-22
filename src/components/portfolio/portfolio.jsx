import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const Portfolio = () => {

     /* ================== Aos (scroll) ================ */

     React.useEffect(() => {
      Aos.init({
        duration: 4000,
        delay: 400,
        easing: 'ease',
      })
    }, [])

  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image1">
            <img src={IMG1} alt=''/>
            <h3>Burger Requests</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite/Burger-requests' className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite/Burger-requests' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt=''/>
              <h3>Starbucks Web Page </h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite/Starbucks-Project' className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
          </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=''/>
            <h3>Codeclub Burger   BACKEND</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite/CodeBurger-backend' className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=''/>
            <h3>Update soon</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite' className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=''/>
            <h3>Update soon</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite' className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=''/>
            <h3>Update soon</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/CristianRicardoLeite'  className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
        </article>
      </div> 
    </section>
  )
}

export default Portfolio
