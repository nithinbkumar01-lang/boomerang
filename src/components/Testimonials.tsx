import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "We are thrilled with our new corporate videos. The team was incredibly calm, patient, and fostered a pleasant atmosphere. Everything came together seamlessly! We wholeheartedly endorse and would recommend them anytime.",
    author: "SARAH ADAMS",
    role: "Chief Marketing Officer, HorizonTech Solutions",
    logo: "Logoipsum"
  },
  {
    quote: "Working with Vertora was a game-changer for our brand. Their attention to detail and creative vision exceeded our expectations. The final product was not just a video, but a powerful tool for our marketing strategy.",
    author: "MICHAEL LEE",
    role: "Director of Sales, EcoScape",
    logo: "Logoipsum"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight"
          >
            Our Client Chronicles: <br />
            <span className="text-brand">Stories that Make Us Smile!</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: i === current ? 1 : 0,
                  x: `${(i - current) * 100}%`
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full flex-shrink-0 ${i === current ? 'relative' : 'absolute top-0 left-0'}`}
              >
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 relative">
                  <Quote className="absolute top-10 right-10 text-brand/20" size={80} />
                  
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">LOGO</span>
                    </div>
                    <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">{t.logo}</span>
                  </div>

                  <p className="text-2xl md:text-3xl font-display font-medium text-white leading-relaxed mb-12">
                    "{t.quote}"
                  </p>

                  <div>
                    <h4 className="text-brand font-display font-bold uppercase tracking-tight">{t.author}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-mono mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
