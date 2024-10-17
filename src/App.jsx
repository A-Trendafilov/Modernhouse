import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Container from "./pages/Container";
import SteelHouse from "./pages/House/SteelHouse";
import ModernHouse from "./pages/House/ModernHouse";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/container" element={<Container />} />
          <Route path="/house/steel" element={<SteelHouse />} />
          <Route path="/house/modern" element={<ModernHouse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
