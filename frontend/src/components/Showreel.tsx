import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play } from "lucide-react";

export default function Showreel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section ref={containerRef} className="relative py-32 bg-ink overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2 
          style={{ x }}
          className="text-[30vw] font-display font-black text-white/[0.03] whitespace-nowrap uppercase leading-none"
        >
          Showreel Showreel Showreel
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-black/50"
        >
          <img 
            src="https://picsum.photos/seed/showreel/1920/1080" 
            alt="Showreel" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-brand text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand/40"
            >
              <Play fill="currentColor" size={32} className="ml-1" />
            </motion.div>
          </div>

          {/* Overlay info */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="text-white">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-2">Vertora Studio</p>
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight">2024 Reel</h3>
            </div>
            <div className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
              ( 02:45 )
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
