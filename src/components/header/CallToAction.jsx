import React from 'react'
import CV from '../../assets/Curriculo Cristian Ricardo Leite.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> Download CV </a>
      <a href='#contact' className='btn btn-primary'> Let's Talk </a>
    </div>
  )
}

export default CallToAction
