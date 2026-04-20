import { motion } from "motion/react";
import { Globe, Cpu, Layers, Zap, Hexagon, Shield, Star, Zap as Zap2 } from "lucide-react";

const logos = [
  { name: "Clonify", icon: <Globe size={24} /> },
  { name: "Blob", icon: <Cpu size={24} /> },
  { name: "Yallo!", icon: <Layers size={24} /> },
  { name: "Bento", icon: <Zap size={24} /> },
  { name: "Spher", icon: <Hexagon size={24} /> },
  { name: "Shield", icon: <Shield size={24} /> },
  { name: "Star", icon: <Star size={24} /> },
  { name: "Zap2", icon: <Zap2 size={24} /> },
];

export default function Partners() {
  return (
    <section className="py-24 bg-ink overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h3-sub text-white"
        >
          Standing Tall With Our <span className="text-brand">Esteemed Brand Partners</span>
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex items-center gap-20 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <span className="text-white group-hover:text-brand transition-colors">{logo.icon}</span>
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand transition-colors">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Gradient Fades for seamless look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
