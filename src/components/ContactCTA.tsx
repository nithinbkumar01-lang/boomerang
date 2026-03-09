import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-ink px-6">
      <div className="max-w-6xl mx-auto bg-brand rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group">
        {/* Background Doodle */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <path d="M0 500 Q250 0 500 500 T1000 500" fill="none" stroke="white" strokeWidth="100" />
            <path d="M0 600 Q250 100 500 600 T1000 600" fill="none" stroke="white" strokeWidth="100" />
          </svg>
        </div>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]"
          >
            Not limited to video, <br />
            we're your creative comrades.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-display mb-12 max-w-2xl mx-auto"
          >
            Got questions, project ideas, or just want to say hi? We're all ears!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-brand px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-4 mx-auto shadow-2xl shadow-black/20"
          >
            Let's Collaborate <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
