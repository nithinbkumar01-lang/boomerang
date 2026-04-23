import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useState } from "react";

const NEEDS_DATA = [
  {
    title: "brand",
    color: "bg-ink",
    items: [
      "Brand Strategy",
      "360° Creative",
      "Art Direction",
      "Copywriting",
      "Editing",
      "Motion Graphics",
      "DTP"
    ],
    rotation: -3,
    sticker: (
      <div className="absolute -top-12 -right-4 w-24 h-24 rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="#333" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="4" />
          <rect x="70" y="25" width="5" height="5" fill="white" />
          <path d="M15 15 L25 10 L75 10 L85 15" fill="none" stroke="#333" strokeWidth="4" />
        </svg>
      </div>
    )
  },
  {
    title: "social",
    color: "bg-neutral-800",
    items: [
      "Social Media Strategy",
      "Social Media Creative",
      "TikTok/Social Shoots",
      "Influencer Campaigns",
      "Scheduling Support",
      "Community Management",
      "Social Listening"
    ],
    rotation: 2,
    sticker: (
      <div className="absolute -top-10 -right-6 w-20 h-20 -rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <rect x="30" y="10" width="40" height="80" rx="10" fill="#F27D26" stroke="#333" strokeWidth="3" />
          <path d="M40 25 Q50 35 60 25 M40 45 Q50 55 60 45 M40 65 Q50 75 60 65" stroke="white" strokeWidth="3" fill="none" />
        </svg>
      </div>
    )
  },
  {
    title: "activations",
    color: "bg-brand",
    items: [
      "Activation Strategy",
      "Event Planning",
      "Art Direction",
      "Production"
    ],
    rotation: -1,
    sticker: (
      <div className="absolute -top-14 -right-10 w-24 h-24 rotate-6">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <circle cx="50" cy="50" r="40" fill="#000" stroke="white" strokeWidth="3" />
          <circle cx="35" cy="40" r="5" fill="white" />
          <circle cx="65" cy="40" r="5" fill="white" />
          <path d="M30 65 Q50 80 70 65" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    )
  },
  {
    title: "production",
    color: "bg-neutral-900",
    items: [
      "Campaign video",
      "Branded content",
      "Social content",
      "Marketing material"
    ],
    rotation: 3,
    sticker: (
      <div className="absolute -top-10 -right-4 w-20 h-20 -rotate-6">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="#fff" stroke="#333" strokeWidth="3" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#333" strokeWidth="3" />
          <path d="M70 35 L85 25 L85 75 L70 65" fill="#fff" stroke="#333" strokeWidth="3" />
        </svg>
      </div>
    )
  },
  {
    title: "partners",
    color: "bg-neutral-700",
    items: [
      "PR/Journalism",
      "3D / VFX",
      "food styling",
      "Photography"
    ],
    rotation: -2,
    sticker: (
      <div className="absolute -top-12 -right-6 w-24 h-24 rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <path d="M50 80 C20 80 10 50 50 20 C90 50 80 80 50 80 Z" fill="#F27D26" stroke="white" strokeWidth="3" />
          <path d="M30 30 L35 35 M65 30 L60 35" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    )
  }
];

export default function NeedsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 pb-64 md:pb-32 px-6 md:px-12 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <Reveal>
          <span className="text-brand font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
          <h2 className="h1-display text-ink uppercase">
            Let's build your <span className="relative">
              strategy
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand/30" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0 10 Q50 0 100 10 T200 10" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-start px-4 max-w-6xl mx-auto md:gap-0">
        {NEEDS_DATA.map((card, i) => {
          const isHovered = hoveredIndex === i;
          const isAnyHovered = hoveredIndex !== null;
          
          let xOffset = 0;
          if (isAnyHovered && !isHovered) {
            xOffset = i < hoveredIndex ? -120 : 120;
          }

          return (
            <motion.div
              key={card.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ y: 100, opacity: 0, rotate: 0 }}
              whileInView={{ 
                y: 0, 
                opacity: 1, 
                rotate: isAnyHovered ? (isHovered ? 0 : card.rotation * 0.5) : card.rotation 
              }}
              animate={{
                x: typeof window !== 'undefined' && window.innerWidth >= 768 ? xOffset : 0,
                scale: isHovered ? 1.15 : (isAnyHovered ? 0.85 : 1),
                zIndex: 10 + i + (isHovered ? 50 : 0),
                rotate: isHovered ? 0 : (isAnyHovered ? card.rotation * 0.5 : card.rotation),
                opacity: isAnyHovered && !isHovered ? 0.4 : 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                layout: { duration: 0.3 }
              }}
              className={`sticky md:relative w-full md:w-64 p-8 rounded-[2rem] shadow-2xl text-white ${card.color} md:-ml-12 first:ml-0 cursor-default group mb-12 md:mb-0`}
              style={{ 
                top: `calc(80px + ${i * 32}px)`,
              }}
            >
              {card.sticker}
              
              <h3 className="h4-small mb-8 !leading-none">
                {card.title}
              </h3>
              
              <div className="w-full h-[2px] bg-white/20 mb-8" />
              
              <ul className="space-y-3">
                {card.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-small font-medium leading-tight">
                    <span className="text-white/60 mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
