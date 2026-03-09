import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Reveal } from "./Reveal";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Using a high-quality dark cinematic video for the background
  const videoUrl = "https://cdn.pixabay.com/video/2020/09/25/51130-464240742_large.mp4";
  
  const [videoError, setVideoError] = useState(false);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full bg-black flex flex-col items-center justify-end pb-24 md:pb-32 overflow-hidden"
    >
      {/* Video Background */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute min-w-full min-h-full object-cover opacity-60"
          >
            <source 
              src={videoUrl} 
              type="video/mp4" 
              onError={() => setVideoError(true)}
            />
          </video>
        ) : (
          <div className="absolute inset-0 bg-neutral-900" />
        )}
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[95vw] px-4">
        <div className="flex flex-col items-center">
          
          <Reveal>
            <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-6 leading-none">
              <span className="text-white text-5xl md:text-[9vw] font-display font-bold tracking-tighter uppercase">
                we make
              </span>
              
              <div className="relative inline-flex items-center">
                {/* Smiley Icon - Positioned to overlap "make" and "advertising" */}
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -left-10 md:-left-20 w-12 h-12 md:w-28 md:h-28 text-blue-400 z-20"
                >
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="45" fill="#7C9DFF" stroke="none" />
                    <circle cx="35" cy="40" r="4" fill="white" />
                    <circle cx="65" cy="40" r="4" fill="white" />
                    <path d="M30 65 Q50 85 70 65" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </motion.div>
                
                <span className="text-white text-5xl md:text-[9vw] font-serif italic tracking-tight lowercase ml-4 md:ml-8">
                  advertising
                </span>
              </div>

              <span className="text-white text-5xl md:text-[9vw] font-display font-bold tracking-tighter uppercase">
                for
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-2 md:mt-4 flex flex-wrap justify-center items-center gap-x-2 md:gap-x-6 leading-none">
              <span className="text-white text-5xl md:text-[9vw] font-display font-bold tracking-tighter uppercase">
                the new
              </span>
              
              <div className="relative inline-flex items-center px-6 py-2 md:px-12 md:py-4">
                {/* Oval Outline */}
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <ellipse cx="50" cy="50" rx="49" ry="40" stroke="white" strokeWidth="0.5" fill="none" />
                  </svg>
                </motion.div>

                <span className="text-white text-5xl md:text-[9vw] font-display font-bold tracking-tighter uppercase">
                  mainstream
                </span>

                {/* Sparkle Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -right-6 -top-2 md:-right-16 md:-top-4 w-10 h-10 md:w-24 md:h-24 text-purple-300"
                >
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L53 47 L100 50 L53 53 L50 100 L47 53 L0 50 L47 47 Z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Bottom Controls/Info like in the image */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
        <div className="flex gap-4">
          <button className="text-white/40 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block">
          <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore / Boomerang Studio ©2024
          </p>
        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Libre Baskerville', serif;
        }
      `}</style>
    </section>
  );
}
