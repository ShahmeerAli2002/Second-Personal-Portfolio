import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './about/page'
import Media from './socialmedia/page'
import Projects from './projectme/pages'
import Contact from './contact/page'
import Footer from './components/footer'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Media/>
      <Projects/>
      <Contact/>
      <Footer/>


     

    </div>
  )
}

export default page
