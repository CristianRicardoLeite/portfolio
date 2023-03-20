import React from 'react'

import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/services'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'



const App = () => {

  return (
    <>
        <Header/>
        <Nav />
        <About />
        <Experience />
        <Services/>
        <Portfolio />
        <Testimonials /> 
        <Contact />
        <Footer />

    </>
  )
}

export default App
