//type rafce and press tab to create a react arrow function component

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home, About, Projects, Contact } from "./pages";

import ReactGA from "react-ga4";
import React, { useEffect } from "react";
import ScrollTop from "./components/ScrollTop";

const MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID;
ReactGA.initialize(MEASUREMENT_ID);

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full min-h-screen">
      <Router>
        <Analytics />
        <ScrollTop />
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
