import React from 'react'
import CV from '../../assets/Currículo Cristian Leite Fullstacks.pdf'
import Aos from 'aos'
import "../../../node_modules/aos/dist/aos.css"

const CallToAction = () => {

   /* ================== Aos (scroll) ================ */

   React.useEffect(() => {
    Aos.init({
      duration: 5000
    })
  }, [])

  return (
    <div data-aos="fade-right" data-aos-duration="3000" className='cta'>
      <a  href={CV} download className='btn btn-animation'> Download CV </a>
      <a  href='#Contact' className='btn btn-primary btn-animation'> Let's Talk </a>
    </div>
  )
}

export default CallToAction
