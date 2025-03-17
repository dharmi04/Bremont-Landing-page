import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EventsPage from "./Pages/EventsPage";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<EventsPage/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
