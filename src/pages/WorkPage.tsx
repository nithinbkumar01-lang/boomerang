import Portfolio from "../components/Portfolio";
import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";

export default function WorkPage() {
  return (
    <div className="pt-32">
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-7xl md:text-[12rem] font-display font-black tracking-tighter uppercase leading-[0.8] mb-12">
              Our <span className="text-brand">Work</span>
            </h1>
          </Reveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl text-2xl md:text-3xl font-display font-medium text-ink/60 leading-relaxed"
          >
            A collection of our most impactful digital experiences, crafted with precision and passion.
          </motion.p>
        </div>
      </section>
      
      {/* Reusing the Portfolio component which now has the filtering logic */}
      <Portfolio showHeader={false} />
      
      <section className="py-32 px-6 md:px-12 bg-ink text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-12">
              Ready to start <br/> your <span className="text-brand">project?</span>
            </h2>
          </Reveal>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] shadow-2xl"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}
