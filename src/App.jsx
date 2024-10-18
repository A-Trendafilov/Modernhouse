import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

// BrowserRouter for SEO optimize
// Lazy load your pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Container = lazy(() => import("./pages/Container"));
const SteelHouse = lazy(() => import("./pages/House/SteelHouse"));
const ModernHouse = lazy(() => import("./pages/House/ModernHouse"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router basename="/Modernhouse">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/container" element={<Container />} />
            <Route path="/house">
              {/* Nested routes for houses */}
              <Route path="steel" element={<SteelHouse />} />
              <Route path="modern" element={<ModernHouse />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
