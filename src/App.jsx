import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import WatchCarousel from './Components/WatchCarousel';
import FeaturedWatch from './Components/FeaturedWatch';
import ProductSpecifications from './Components/ProductSpecifications';
import CustomerReviews from './Components/CustomerReviews';
import CallToAction from './Components/CallToAction';
import FeaturedCollection from './Components/FeaturedCollection';
import Footer from './Components/Footer';



function App() {
  return (
  <>
  <Hero />
  <FeaturedWatch />
  <ProductSpecifications />
  
  {/* <CustomerReviews /> */}
  <FeaturedCollection />
  <CallToAction />
  <Footer />
  {/* <AboutUs /> */}
  {/* <WatchCarousel /> */}
  </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/timer" element={<TimerPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
