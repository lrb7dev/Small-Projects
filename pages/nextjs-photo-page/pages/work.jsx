import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
    return (
        <div>
            <Hero heading='My work' message='This is some of my recents works' />
            <Portfolio />
            <Footer/>
        </div>
    )
}

export default work