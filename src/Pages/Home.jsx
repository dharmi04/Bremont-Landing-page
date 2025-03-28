import React from 'react'
// import Clouds from '../Components/Clouds'
import AboutUs from '../Components/AboutUs'
// import EventsList from '../Components/EventsList'
import HeroSection from '../Components/HeroSection'
import FunFlare from '../Components/FunFlare'
import Footer from '../Components/Footer'
import Events from '../Components/Events'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <Clouds /> */}
      {/* <div className="bg-gradient-to-br from-[#1A1A2E] via-[#4ECCA3] to-[#E8F9FD]"> */}
      <div className="bg-white">
  <AboutUs />
  {/* <Slider /> */}
  {/* <FunFlare /> */}
  <Events />

  <Footer />
</div>


     
     {/* <VideoSection /> */}
     {/* <EventsList /> */}
    </div>
  )
}

export default Home
