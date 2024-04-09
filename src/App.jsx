import { useState } from "react";
//import "../libs/flowbite.min.js"; // Adjust the path accordingly
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
      <FooterApp />
    </>
  );
}

export default App;
