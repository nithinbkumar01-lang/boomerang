import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/" className="flex items-center gap-3" aria-label="Boomerang Studios Home">
              <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-current">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>
              <span className="font-display font-bold tracking-tighter uppercase text-xl">boomerang <span className="text-brand/50 text-[9px] block font-mono tracking-widest">studios</span></span>
            </Link>
            
            <div className="space-y-6 text-sm font-sans tracking-wide text-white/40">
              <div className="flex flex-col gap-2">
                <span className="text-white/60 font-semibold uppercase text-[10px] tracking-widest">Address:</span>
                <span className="text-body">123 Artistic Lane, Suite 302, NY, USA M5V 1A1</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/60 font-semibold uppercase text-[10px] tracking-widest">Email:</span>
                <a href="mailto:contact@boomerang.com" className="text-body hover:text-brand transition-colors lowercase">contact@boomerang.com</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/60 font-semibold uppercase text-[10px] tracking-widest">Phone:</span>
                <span className="text-body">(416) 555-1234</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white/60 font-semibold uppercase text-[10px] tracking-widest">Business Hours:</span>
                <span className="text-body">Sunday - Thursday : 9am to 5pm</span>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4 font-sans font-semibold">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  aria-label="Email for newsletter"
                  className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-xs w-full focus:outline-none focus:border-brand transition-colors font-sans"
                />
                <button 
                  className="bg-brand text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all font-sans"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand">Quick Links</span>
              <div className="flex flex-col gap-4 text-xs font-sans font-medium uppercase tracking-widest text-white/60">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <Link to="/work" className="hover:text-brand transition-colors text-brand">Projects</Link>
                <Link to="/services" className="hover:text-white transition-colors">Projects Simplified</Link>
                <Link to="/#about" className="hover:text-white transition-colors">About</Link>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand">Legal</span>
              <div className="flex flex-col gap-4 text-xs font-sans font-medium uppercase tracking-widest text-white/60">
                <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link to="#" className="hover:text-white transition-colors">Refund Policy</Link>
                <Link to="#" className="hover:text-white transition-colors">Social Medias</Link>
                <Link to="#" className="hover:text-white transition-colors">Facebook</Link>
                <Link to="#" className="hover:text-white transition-colors">Vimeo</Link>
                <Link to="#" className="hover:text-white transition-colors">TikTok</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { name: "Twitter", icon: <Twitter size={14} />, url: "https://twitter.com/boomerang" },
            { name: "LinkedIn", icon: <Linkedin size={14} />, url: "https://linkedin.com/company/boomerang" },
            { name: "YouTube", icon: <Youtube size={14} />, url: "https://youtube.com/boomerang" },
            { name: "Instagram", icon: <Instagram size={14} />, url: "https://instagram.com/boomerang" },
          ].map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/40 group-hover:text-brand transition-colors">{social.icon}</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest">{social.name}</span>
              </div>
              <ArrowRight size={14} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans font-medium uppercase tracking-widest text-white/20">
          <span>© 2024 Boomerang Studios. All rights reserved.</span>
          <span>Creative Agency & Production House</span>
        </div>
      </div>
    </footer>
  );
}
