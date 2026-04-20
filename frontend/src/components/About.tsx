import { motion, useInView, animate } from "motion/react";
import { Reveal } from "./Reveal";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "YEARS OF EXPERIENCE", value: 3, suffix: "+" },
  { label: "REPEATED CLIENTS", value: 18, suffix: "+" },
  { label: "COMPLETED PROJECTS", value: 62, suffix: "+" },
  { label: "HAPPY CLIENTS", value: 26, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative section-spacing px-6 md:px-12 bg-paper text-ink overflow-hidden border-y border-ink/5">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full grid grid-cols-6 md:grid-cols-12 gap-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-ink/20 h-full" />
          ))}
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title & Button */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Reveal>
                <h2 className="h2-section mb-8">
                  About Our Agency
                </h2>
              </Reveal>
            </div>
 
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-fit px-10 py-5 rounded-full overflow-hidden bg-ink text-white shadow-2xl shadow-ink/20 hover:bg-brand transition-all duration-500"
            >
              <span className="relative z-10 nav-link">
                Know More About Us
              </span>
            </motion.button>
          </div>
 
          {/* Right Column: Content & Stats */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="h2-section mb-8 max-text-width">
                <span className="text-ink/40">Established in 2024, we have dedicated ourselves to</span> crafting captivating visual narratives <span className="text-ink/40">defined by creativity, innovation, and an unwavering commitment to</span> <span className="text-brand">excellence in video production.</span>
              </p>
            </Reveal>
 
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-body mb-12 max-text-width"
            >
              Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-16 gap-x-8 relative">
              {/* Center cross decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-10 pointer-events-none hidden md:block">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ink" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-ink" />
              </div>

              {STATS.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i }}
                  className="relative group"
                >
                  <span className="block text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 uppercase text-ink/60 group-hover:text-brand transition-colors">
                    {stat.label}
                  </span>
                  <div className="relative">
                    <span className="text-5xl md:text-7xl font-display text-ink/5 absolute -top-10 left-0 select-none group-hover:text-ink/10 transition-colors">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-3xl md:text-5xl font-display relative z-10">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
