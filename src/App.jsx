import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import TransparencyPage from './pages/TransparencyPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import JoinUs from './pages/JoinUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PaymentTerms from './pages/PaymentTerms';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/policies/refund-policy" element={<RefundPolicy />} />
          <Route path="/policies/payment-terms" element={<PaymentTerms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
