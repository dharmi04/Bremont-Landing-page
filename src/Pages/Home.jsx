import React from 'react'
// import Clouds from '../Components/Clouds'
import AboutUs from '../Components/AboutUs'
// import EventsList from '../Components/EventsList'
import HeroSection from '../Components/HeroSection'
import FunFlare from '../Components/FunFlare'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <Clouds /> */}
      <div className="bg-gradient-to-br from-[#E0E7FF] via-[#D6FCF7] to-[#FFE6E2]">
  <AboutUs />
  <FunFlare />
  <Footer />
</div>


     
     {/* <VideoSection /> */}
     {/* <EventsList /> */}
    </div>
  )
}

export default Home
