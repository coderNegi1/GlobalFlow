import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Contact from "./pages/Contact"; // uncomment if Contact exists
import FreightPage from "./pages/FrightPage"; // new Freight page
import { freightData } from "./assets/freightData";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Dynamic Freight pages */}
          <Route path="freight/:type" element={<FreightPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
