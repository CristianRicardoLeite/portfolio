import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/DevMovie.jpg'
import IMG2 from '../../assets/Portifólio.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


export const Portfolio = () => {

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
          <div className="portfolio__item-image">
            <img src={IMG1} alt='print-DevMovie-webpage' />
            <h3>Dev Movie </h3>
            <h3>(WITH API CONNECTION AND FULL RESPONSIVE)</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/DevMovies' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='https://dev-movies-kappa.vercel.app' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='print-portfolio-webpage' />
            <h3>My Portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/portfolio' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='cristianricardoleite.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt='' />
            <h3>Codeclub Burger BACKEND</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/CodeBurger-backend' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt='' />
            <h3>Starbucks Page</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/Starbucks-React' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt='' />
            <h3>Money Convert to all coins with API connection</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/Convert-Money' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
        <article data-aos="zoom-in-up" data-aos-duration="1250" className='portfolio__items'>
          <div className="portfolio__item-image2">
            <img src={IMG9} alt='' />
            <h3>A Wonderfull and Big Project</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/CristianRicardoLeite/CodeBurgerFrontend' className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href='https://github.com/CristianRicardoLeite' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
