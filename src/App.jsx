import React from 'react'

import { Header, About, Experience, Nav, Portfolio, Testimonials, Services, Contact, Footer } from './components'

const App = () => {

  return (
    <>
      <Header />
      {/* <Nav /> */}
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
