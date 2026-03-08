import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
