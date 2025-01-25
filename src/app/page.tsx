import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './about/page'
import Media from './socialmedia/page'
import Projects from './projectme/pages'
import Contact from './contact/page'



const page = () => {
  return (
    <div>
      
      {/* <Navbar/> */}
      
      <Hero/>
      <About/>
      <Media/>
      <Projects/>
      <Contact/>
     


     

    </div>
  )
}

export default page
