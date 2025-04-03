import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EventsPage from "./Pages/EventsPage";
import Home from "./Pages/Home";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<EventsPage/>} /> */}
      </Routes>
    </Router>
    <Analytics />
    </>
    
  );
};

export default App;
