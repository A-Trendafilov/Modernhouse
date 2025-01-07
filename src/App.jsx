import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "./styles/theme";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/utils/ErrorBoundary.jsx";
import Loading from "./components/utils/Loading.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Container = lazy(() => import("./pages/Container.jsx"));
const SipHouse = lazy(() => import("./pages/House/SipHouse.jsx"));
const MetalHouse = lazy(() => import("./pages/House/MetalHouse.jsx"));
const ModularHouse = lazy(() => import("./pages/House/ModularHouse.jsx"));
const TinyHouses = lazy(() => import("./pages/House/TinyHouse.jsx"));
const АluminumJoinery = lazy(() =>
  import("./pages/Joinery/АluminumJoinery.jsx")
);
const PvcJoinery = lazy(() => import("./pages/Joinery/PvcJoinery.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Project = lazy(() => import("./pages/Project.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Modernhouse">
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/container" element={<Container />} />
                <Route path="/sip" element={<SipHouse />} />
                <Route path="/metal" element={<MetalHouse />} />
                <Route path="/modular" element={<ModularHouse />} />
                <Route path="/tiny" element={<TinyHouses />} />
                <Route path="/аluminum" element={<АluminumJoinery />} />
                <Route path="/pvc" element={<PvcJoinery />} />
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
