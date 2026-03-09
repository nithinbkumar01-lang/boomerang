import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    id: "branding",
    title: "Branding",
    desc: "At Vertora, we craft impactful digital strategies, cutting-edge designs, and seamless web solutions.",
    tags: ["Digital Agency", "Branding", "Creative"],
    image: "https://picsum.photos/seed/vertora-branding/600/400"
  },
  {
    id: "design",
    title: "Design",
    desc: "Our design process focuses on creating intuitive user experiences and visually stunning interfaces that resonate with your target audience.",
    tags: ["UI/UX", "Product Design", "Visuals"],
    image: "https://picsum.photos/seed/vertora-design/600/400"
  },
  {
    id: "visual",
    title: "Visual",
    desc: "We bring stories to life through high-quality visual content, motion graphics, and creative direction that captures attention.",
    tags: ["Motion", "Video", "Art Direction"],
    image: "https://picsum.photos/seed/vertora-visual/600/400"
  },
  {
    id: "strategy",
    title: "Strategy",
    desc: "Data-driven insights meet creative thinking to build long-term growth strategies for forward-thinking brands.",
    tags: ["Marketing", "Growth", "Consulting"],
    image: "https://picsum.photos/seed/vertora-strategy/600/400"
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>("branding");

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Quote Header */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <motion.h2
              className="text-3xl md:text-5xl font-display font-medium leading-[1.2] text-ink italic"
            >
              " We prioritize trust and believe in honesty, transparency, and reliability. We consistently deliver and maintain open communication to build trust with our clients. "
            </motion.h2>
          </Reveal>
        </div>

        {/* Accordion Services */}
        <div className="border-t border-ink/10">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <div 
                key={service.id} 
                className="border-b border-ink/10"
                onMouseEnter={() => setActiveId(service.id)}
              >
                <div
                  className="w-full py-10 flex items-center gap-8 text-left group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-brand text-white' : 'bg-ink/5 text-ink group-hover:bg-ink/10'}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  <h3 className={`text-3xl md:text-5xl font-display font-bold transition-colors ${isActive ? 'text-ink' : 'text-ink/40 group-hover:text-ink/60'}`}>
                    {service.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-16 pl-18 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                          <p className="text-lg text-ink/60 mb-8 max-w-md leading-relaxed">
                            {service.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span key={tag} className="px-4 py-2 bg-ink/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-ink/60">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl"
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
