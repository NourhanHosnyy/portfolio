import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Projects from '../components/Projects.jsx'
const App = () => {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>

    </>
  )
}

export default App
