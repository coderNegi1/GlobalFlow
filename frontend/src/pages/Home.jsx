import React from 'react'
import Herosection from '../component/HeroSection'
import About from '../component/AboutSection'
import OurScervices from '../component/OurServices'
import OurClients from '../component/OurClients'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
    <Herosection/>
    <About/>
    <OurScervices/>
    <OurClients/>
    </>
  )
}

export default Home