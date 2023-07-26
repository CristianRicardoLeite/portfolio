import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

import Typed from 'typed.js'
import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const Header = () => {

  /* ================== Aos (scroll) ================ */

  React.useEffect(() => {
    Aos.init({
      duration: 3000,
    })
  }, [])

  /* ================== type js ================ */
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '',
        'Backend Developer',
        'FullStack Developer',
        'What you <strong>really need</strong>!'
      ],
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

  }, [])

  return (
    <header>
      <div className="container header__container" id='Home'>
        <h5 data-aos="fade-up" data-aos-duration="1500"> Hello I'm </h5>
        <h1 data-aos="fade-up" data-aos-duration="1500"> Cristian Ricardo Leite</h1>
        <h5 data-aos-duration="1500" className='text-light h5header' ref={el}> Frontend Developer</h5>
        <CallToAction />
        <HeaderSocials />

        <div data-aos="fade-up" data-aos-duration="1500" className="me">
          <img src={ME} alt='Me' />
        </div>

        <a href='#Contact' className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header
