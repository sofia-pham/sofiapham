//type rafce and press tab to create a react arrow function component
// import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home, About, Projects, Contact } from "./pages";

import ReactGA from "react-ga4";
import React, { useEffect } from "react";

const App = () => {
  const MEASUREMENT_ID = import.meta.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;
  ReactGA.initialize(`${MEASUREMENT_ID}`);
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: document.title,
    });
  }, []);

  return (
    <main className="bg-slate-300/20 h-full min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
