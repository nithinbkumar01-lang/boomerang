import { motion } from "motion/react";

const items = ["VFX", "Filming", "Scriptwriting", "Sound Design", "Color", "Directing", "Editing"];

export default function Marquee() {
  return (
    <section className="py-12 bg-ink border-y border-white/5 overflow-hidden">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex items-center gap-20 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-20">
            <span className="text-5xl md:text-7xl font-display font-black text-white/10 uppercase tracking-tighter hover:text-brand transition-colors cursor-default">
              {item}
            </span>
            <div className="w-3 h-3 rounded-full bg-brand" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
