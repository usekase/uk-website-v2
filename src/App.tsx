import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsekaseHome from "./pages/UsekaseHome";
import CaseStudies from "./pages/CaseStudies";
import Platform from "./pages/Platform";
import Company from "./pages/Company";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <Routes>
        {/* Usekase Main Site */}
        <Route path="/" element={<UsekaseHome />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
