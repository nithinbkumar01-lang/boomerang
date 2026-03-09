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
    <section className="relative bg-paper overflow-hidden">
      {/* Pill Images at the top of this section */}
      <div className="w-full px-4 pt-4 overflow-hidden mb-24">
        <div className="flex gap-2 md:gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              whileHover={{ y: -20 }}
              className="flex-shrink-0 w-[12vw] md:w-[10vw] aspect-[2/5] bg-ink/5 rounded-t-[100px] rounded-b-[100px] overflow-hidden border border-ink/10"
            >
              <img 
                src={`https://picsum.photos/seed/vertora-pill-${i}/400/1000`} 
                alt={`Work ${i}`} 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 pb-32">
        <Reveal delay={0.2}>
          <motion.h2
            className="text-4xl md:text-6xl font-display font-bold leading-[1.1] text-ink mb-20 tracking-tight"
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
