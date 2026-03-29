import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import ErrorBoundary from "@/components/utils/ErrorBoundary";
import Loading from "@/components/utils/Loading";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const ContainerPage = lazy(() => import("@/pages/Container"));
const SipHouse = lazy(() => import("@/pages/House/SipHouse"));
const MetalHouse = lazy(() => import("@/pages/House/MetalHouse"));
const ModularHouse = lazy(() => import("@/pages/House/ModularHouse"));
const TinyHouses = lazy(() => import("@/pages/House/TinyHouse"));
const AluminumJoinery = lazy(() => import("@/pages/Joinery/АluminumJoinery"));
const PvcJoinery = lazy(() => import("@/pages/Joinery/PvcJoinery"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Project = lazy(() => import("@/pages/Project"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));

const App = () => {
  return (
    <Router basename="/Modernhouse">
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/container" element={<ContainerPage />} />
              <Route path="/sip" element={<SipHouse />} />
              <Route path="/metal" element={<MetalHouse />} />
              <Route path="/modular" element={<ModularHouse />} />
              <Route path="/tiny" element={<TinyHouses />} />
              <Route path="/аluminum" element={<AluminumJoinery />} />
              <Route path="/pvc" element={<PvcJoinery />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
};

export default App;
