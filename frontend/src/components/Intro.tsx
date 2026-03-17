import { motion } from "motion/react";
import { Globe, Cpu, Layers, Zap, Hexagon } from "lucide-react";
import { Reveal } from "./Reveal";

const logos = [
  { name: "Clonify", icon: <Globe size={20} /> },
  { name: "Blob", icon: <Cpu size={20} /> },
  { name: "Yallo!", icon: <Layers size={20} /> },
  { name: "Bento", icon: <Zap size={20} /> },
  { name: "Spher", icon: <Hexagon size={20} /> },
];

export default function Intro() {
  return (
    <section className="relative bg-paper overflow-hidden border-y border-ink/5">
      <div className="max-w-6xl mx-auto text-center px-6 py-40 md:py-56">
        <Reveal delay={0.2} direction="up">
          <motion.h2
            className="text-4xl md:text-7xl font-display font-bold leading-[1.05] text-ink mb-24 tracking-tight"
          >
            We're Boomerang<span className="text-brand">®</span> — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
          </motion.h2>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative w-full overflow-hidden py-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <motion.div
              animate={{
                x: [0, -1035], // Adjust based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-20 whitespace-nowrap"
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <span className="text-ink group-hover:text-brand transition-colors">{logo.icon}</span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-ink group-hover:text-brand transition-colors">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Gradient Fades for seamless look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
