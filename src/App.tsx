import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsekaseHome from "./pages/UsekaseHome";
import CaseStudies from "./pages/CaseStudies";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShadcnExamples from "./pages/ShadcnExamples";
import TweakcnExamples from "./pages/TweakcnExamples";
import CardVariantsDemo from "./pages/CardVariantsDemo";
import CategoryListDemo from "./pages/CategoryListDemo";
import AnimatedTestimonialsDemo from "./pages/AnimatedTestimonialsDemo";
import FeatureStepsDemo from "./pages/FeatureStepsDemo";
import StickyScrollDemo from "./pages/StickyScrollDemo";
import ButtonTest from "./pages/ButtonTest";

function App() {
  return (
    <Router>
      <Routes>
        {/* Usekase Main Site */}
        <Route path="/" element={<UsekaseHome />} />
        <Route path="/case-studies" element={<CaseStudies />} />

        {/* Component Demo Pages */}
        <Route path="/demos/*" element={
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shadcn-examples" element={<ShadcnExamples />} />
                <Route path="tweakcn-examples" element={<TweakcnExamples />} />
                <Route path="card-variants" element={<CardVariantsDemo />} />
                <Route path="category-list" element={<CategoryListDemo />} />
                <Route path="animated-testimonials" element={<AnimatedTestimonialsDemo />} />
                <Route path="feature-steps" element={<FeatureStepsDemo />} />
                <Route path="sticky-scroll" element={<StickyScrollDemo />} />
                <Route path="button-test" element={<ButtonTest />} />
              </Routes>
            </main>
            <footer className="border-t mt-12">
              <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                <p>Built with React, TypeScript, Vite, ShadCN UI, and TweakCN</p>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
