import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Doodles from "./components/Doodles";
import CustomCursor from "./components/CustomCursor";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectDetail from "./pages/ProjectDetail";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { CalendarProvider } from "./context/CalendarContext";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative cursor-none"
    >
      <CustomCursor />
      <Doodles />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </motion.main>
  );
}

export default function App() {
  return (
    <Router>
      <CalendarProvider>
        <AppContent />
      </CalendarProvider>
    </Router>
  );
}
