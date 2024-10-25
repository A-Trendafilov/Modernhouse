import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, CircularProgress } from "@mui/material";
import theme from "./styles/theme";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/utils/ErrorBoundary";
import "./App.css";

// Lazy load your pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Container = lazy(() => import("./pages/Container"));
const SteelHouse = lazy(() => import("./pages/House/SteelHouse"));
const ModularHouses = lazy(() => import("./pages/House/ModularHouses"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Project = lazy(() => import("./pages/Project")); // Import Project component
const ProjectDetail = lazy(() => import("./pages/ProjectDetail")); // Import ProjectDetail component

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Modernhouse">
        <Layout>
          <ErrorBoundary>
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
                  <Route path="steel" element={<SteelHouse />} />
                  <Route path="modular" element={<ModularHouses />} />
                </Route>
                <Route path="/projects" element={<Project />} />
                <Route
                  path="/projects/:projectId"
                  element={<ProjectDetail />}
                />

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
