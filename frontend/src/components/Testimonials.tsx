import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Shivathmaj",
    company: "Scale Socials",
    rating: 5.0,
    date: "Mar 2024",
    avatar: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/scale-socials_g2vmgb.jpg",
    quote: "We want to sincerely thank you for your efforts during the recent podcast shoots. Your dedication ensured everything ran smoothly, and we truly appreciate the extra help you provided in arranging lighting equipment rentals at the last minute. We believe we make a great team and are excited about the prospect of working together on future projects. We look forward to working with you again on future projects."
  },
  {
    name: "Shivani Sultania",
    company: "Amodacare",
    rating: 5.0,
    date: "Feb 2024",
    avatar: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/amodacare_nkxzmm.webp",
    quote: "The team delivered exactly what we envisioned—clean, high-quality visuals that truly showcase the essence of our products. Their attention to detail and understanding of our brand made the entire process seamless. We’re thrilled with the final output!"
  },
  {
    name: "Team Wissen",
    company: "Wissen",
    rating: 5.0,
    date: "Jan 2024",
    avatar: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/wissen-logo_f6mkmm.webp",
    quote: "The team delivered exactly what we envisioned—clean, high-quality visuals that truly showcase the essence of our products. Their attention to detail and understanding of our brand made the entire process seamless. We’re thrilled with the final output!"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Update active index based on scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * testimonials.length),
        testimonials.length - 1
      );
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, activeIndex]);

  return (
    <section ref={containerRef} className="relative bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Left Side: Curved List */}
          <div className="relative w-full md:w-[450px] h-[500px] flex items-center justify-center">
            {/* Curved Line SVG */}
            <svg 
              viewBox="0 0 100 200" 
              className="absolute left-0 top-0 h-full w-48 text-slate-200 fill-none stroke-current"
              style={{ transform: 'translateX(20%)' }}
            >
              <path d="M100,0 C20,50 20,150 100,200" strokeWidth="1" />
            </svg>

            <div className="flex flex-col gap-8 relative z-10 w-full pl-16">
              {testimonials.map((t, i) => {
                const distance = Math.abs(i - activeIndex);
                const isActive = i === activeIndex;
                const isVisible = distance <= 1; // Only show active and immediate neighbors
                
                if (!isVisible) return null;

                // Calculate vertical position based on distance from active
                // Active is in middle, neighbors are above/below
                const offsets = [40, 0, 40];
                const marginIndex = i - activeIndex + 1; // map -1, 0, 1 to 0, 1, 2
                
                return (
                  <motion.div 
                    key={i}
                    layout
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1.1 : 0.8,
                      x: isActive ? 0 : 20,
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)"
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-6"
                    style={{ 
                      marginLeft: `${offsets[marginIndex] || 40}px` 
                    }}
                  >
                    <div className={`relative flex-shrink-0 transition-all duration-500 overflow-hidden bg-white rounded-xl shadow-xl border border-slate-100 ${isActive ? 'w-24 h-24' : 'w-14 h-14'}`}>
                      <img 
                        src={t.avatar} 
                        alt={t.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className={`font-display font-medium text-slate-800 transition-all duration-500 ${isActive ? 'h4-small' : 'text-small'}`}>
                        {t.name}
                      </h4>
                      <p className={`text-slate-400 font-mono uppercase tracking-widest transition-all duration-500 ${isActive ? 'text-[10px]' : 'text-[8px]'}`}>
                        {t.company}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Quote */}
          <div className="flex-1 relative">
            <div className="relative min-h-[300px] flex items-center">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: i === activeIndex ? 1 : 0,
                    y: i === activeIndex ? 0 : 20,
                    pointerEvents: i === activeIndex ? "auto" : "none"
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className="text-body font-display italic text-slate-600 max-text-width">
                    <p>"{t.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div style={{ height: `${testimonials.length * 100}vh` }} />
    </section>
  );
}
