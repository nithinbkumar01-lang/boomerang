import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a wide range of video production services including corporate videos, commercials, social media ads, documentaries, and more."
  },
  {
    q: "How much does video production cost?",
    a: "Costs vary depending on the project's scope, duration, and complexity. Contact us for a custom quote."
  },
  {
    q: "How long does it take to produce a video?",
    a: "Typically, a project takes 4-8 weeks from concept to final delivery, depending on the requirements."
  },
  {
    q: "Can you help with copywriting and storyboarding?",
    a: "Yes, our pre-production phase includes scriptwriting, storyboarding, and creative direction."
  },
  {
    q: "What is the production process like?",
    a: "Our process includes three main phases: Pre-Production (planning), Production (filming), and Post-Production (editing)."
  },
  {
    q: "Do you provide video marketing services?",
    a: "Yes, we can help you distribute and promote your video content across various platforms."
  },
  {
    q: "Can you work with a specific budget?",
    a: "We strive to accommodate various budgets while maintaining high-quality standards. Let's discuss your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-40 md:py-56 bg-ink">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none"
          >
            Curious? Check Out the <br />
            <span className="text-brand italic font-serif lowercase">Scoop! (FAQs)</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-display font-bold uppercase tracking-tight">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-brand" size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

