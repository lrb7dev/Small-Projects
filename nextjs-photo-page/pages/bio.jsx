import React from 'react'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const bio = () => {
  return (
    <div>
          <Hero heading="About Me" message="Hi, my name is Mary Jane and I'm the photographer and the owner of MJPhotos, see below my biography..."/>
          <AboutMe />
          <Footer />
    </div>
    
  )
}

export default bio