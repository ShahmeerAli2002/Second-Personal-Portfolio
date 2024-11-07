import React from 'react'
import Link from 'next/link'


const About = () => {
  return (
    
    
    <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 h-15'>
      <div className=' text-white flex justify-between items-center' >
    <h1 className='text-xl m-2 ml-28'>jazz cash</h1>
    <ul className='flex gap-10 ml-24'>
        <Link href="/" className='relative  before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'>Home</Link>
        <Link href="about">About</Link>
        <Link href="contact">Contact</Link>
        <Link href="Helpline">Helpline</Link>
    </ul>
   
      </div>
     

      
     </div>
     
  )
}

export default About


