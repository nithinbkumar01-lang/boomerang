import { motion, useScroll, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  // If on home page and not scrolled, hide the global navbar
  const shouldHide = isHome && !isScrolled;

  const navLinks = [
    { name: "Our Work", path: "/work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: shouldHide ? -100 : 0, 
          opacity: shouldHide ? 0 : 1 
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group/nav">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group/logo" aria-label="Boomerang Studios Home">
            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/logo:bg-brand group-hover/logo:rotate-[15deg] transition-all duration-500">
              <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-current">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display font-bold tracking-tighter uppercase text-xl text-white group-hover/logo:text-brand transition-colors">boomerang</span>
              <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/30 -mt-1 group-hover/logo:text-white/60 transition-colors">studios</span>
            </div>
          </Link>

          {/* Right: Links & Button */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="relative nav-link text-white/50 hover:text-white transition-colors group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover/link:w-full" />
                </Link>
              ))}
            </div>

            <button className="hidden md:block bg-brand text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-brand/20 active:scale-95">
              Talk to Us
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-brand transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[45] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-12 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold uppercase tracking-tighter text-white hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-8 mt-12 text-white/40">
                <Instagram size={24} />
                <Twitter size={24} />
                <Linkedin size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
