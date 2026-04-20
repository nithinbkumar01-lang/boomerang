import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const navLinks = [
    { name: "Our Work", path: "/work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full bg-black p-2 md:p-4 overflow-hidden"
    >
      {/* Framed Container */}
      <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/5 flex flex-col items-center justify-end pb-12 md:pb-16">
        
        {/* Video Background */}
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="https://res.cloudinary.com/dofg6bsom/video/upload/v1773760294/showreel_jwuwa3.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </motion.div>
 
        {/* Top Header Bar inside Hero */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-30">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group/logo" aria-label="Boomerang Studios Home">
            <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/logo:bg-brand group-hover/logo:rotate-[15deg] transition-all duration-500">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-current">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display font-bold tracking-tighter uppercase text-xl text-white group-hover/logo:text-brand transition-colors">boomerang</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 -mt-1 group-hover/logo:text-white/60 transition-colors">studios</span>
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

            <button className="hidden md:block bg-brand text-white px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl active:scale-95">
              Talk to Us
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-brand transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay for Hero */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="absolute inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-12 md:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h1-display font-bold text-white hover:text-brand transition-colors"
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


        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-end items-end z-20">
          <div className="hidden md:block">
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll to explore / Boomerang Studio ©2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
