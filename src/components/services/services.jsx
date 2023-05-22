import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"

const Services = () => {

  /* ================== Aos (scroll) ================ */

  React.useEffect(() => {
    Aos.init({
      duration: 5000,
      delay: 100
    })
  }, [])

  return (
    <section id='Services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article data-aos="flip-right" data-aos-duration="1250" className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Construct of interfaces</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Correct visual errors</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improve user experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capture and implement feedback</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improve accessibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improve your WebSite performance and scalability</p>
            </li>
          </ul>
        </article>

        <article data-aos="flip-up" data-aos-duration="1250" className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Increase the security of your application by implementing a JWT token</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Increase the performance of your database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating relational and non-relational databases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy your Backend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>code refactoring</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
