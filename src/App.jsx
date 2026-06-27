import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import CareerPage from "./pages/career";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import CookiesPage from "./pages/cookies";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <LenisScroll />
      <ScrollToTop />

      <Navbar />
      <div className="fixed inset-0 overflow-hidden -z-20 bg-[#0C1C4D] pointer-events-none">
        <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#000] blur-[100px]" />
        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#000] blur-[100px]" />
                <div className="absolute rounded-full left-0 top-40 w-72 h-72 bg-black blur-[120px]" />
                        <div className="absolute rounded-full right-0 top-40 w-72 h-72 bg-black blur-[120px]" />

      </div>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
