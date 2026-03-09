import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div className="space-y-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-current">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>
              <span className="font-display font-black tracking-tighter uppercase text-2xl">boomerang <span className="text-brand/50 text-xs block font-mono tracking-widest">studios</span></span>
            </Link>
            
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                Not limited to video,<br />
                we're your creative comrades.
              </h2>
            </Reveal>
            
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-brand text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                Let's Collaborate <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand">Quick Links</span>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <Link to="/work" className="hover:text-white transition-colors">Projects</Link>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <Link to="/#about" className="hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand">Legal</span>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link to="#" className="hover:text-white transition-colors">Refund Policy</Link>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand">Socials</span>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row gap-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
            <span>Address: 123 Artistic Lane, Suite 302, NY, USA</span>
            <span>Email: contact@boomerang.com</span>
            <span>Phone: (416) 555-1234</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/20">
              © 2024 Boomerang Studio. Built with Passion.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
