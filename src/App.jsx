import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/layout/Footer";
import NavBar from "./Components/layout/Navbar";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import the page we created
import CookiePolicy from './pages/CookiePolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from "./Components/utils/ScrollToTop"; // Essential helper
import Services from './pages/Sevices';
function App() {
  return (
    <Router>
      {/* ScrollToTop prevents the new page from loading at the bottom */}
      <ScrollToTop />
      
      <div>
        <NavBar />
        
        <Routes>
          {/* This renders your current Home content at the base URL (/) */}
          <Route path="/" element={<Home />} />
          
          {/* This renders the Privacy Policy when you go to /privacy-policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiePolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Footer stays at the bottom of every page */}
        <section id="about" className="scroll-mt-20">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;