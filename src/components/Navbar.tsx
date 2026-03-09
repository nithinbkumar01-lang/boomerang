import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-current">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
          </div>
          <span className="font-display font-black tracking-tighter uppercase text-xl text-white">boomerang</span>
        </Link>
        
        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">Home</Link>
          <Link to="/work" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">Projects</Link>
          <Link to="/services" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">Services</Link>
          <Link to="/#about" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">About</Link>
        </div>
        
        {/* Right: CTA */}
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
}
