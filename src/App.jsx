import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, CircularProgress } from "@mui/material"; // Import CircularProgress for loading indicator
import theme from "./styles/theme"; // Import your custom theme
import Layout from "./components/Layout"; // Import the new Layout component
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary
import "./App.css";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Modernhouse">
        <Layout>
          <ErrorBoundary>
            {" "}
            {/* Wrap Suspense with ErrorBoundary */}
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <CircularProgress /> {/* Loading spinner */}
                </div>
              }
            >
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
          </ErrorBoundary>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
