import React from "react";
import { motion } from "motion/react";
import { Sparkles, Star, Zap, Heart, Cloud, Moon, Sun, Megaphone, TrendingUp, Target, MousePointer2, BarChart3, Share2 } from "lucide-react";

const Doodle = ({ children, className, delay = 0, rotate = 0 }: { children: React.ReactNode, className: string, delay?: number, rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
    whileInView={{ opacity: 0.2, scale: 1, rotate: rotate }}
    viewport={{ once: true }}
    animate={{
      y: [0, -10, 0],
      rotate: [rotate, rotate + 5, rotate],
    }}
    transition={{
      type: "spring",
      stiffness: 100,
      delay,
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 1 }
    }}
    className={`absolute pointer-events-none z-0 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Doodles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hero Section Doodles - Marketing Focus */}
      <Doodle className="top-[15%] left-[5%] text-brand" delay={0.2} rotate={-15}>
        <Star size={48} strokeWidth={1} />
      </Doodle>
      <Doodle className="top-[25%] right-[8%] text-blue-400" delay={0.5} rotate={25}>
        <Megaphone size={40} strokeWidth={1} />
      </Doodle>
      <Doodle className="top-[40%] left-[12%] text-emerald-400" delay={0.7} rotate={-10}>
        <TrendingUp size={36} strokeWidth={1} />
      </Doodle>
      
      {/* About Section Doodles - Strategy Focus */}
      <Doodle className="top-[120%] left-[10%] text-brand" delay={0.8} rotate={10}>
        <Target size={42} strokeWidth={1} />
      </Doodle>
      <Doodle className="top-[140%] right-[15%] text-ink" delay={1} rotate={-20}>
        <BarChart3 size={36} strokeWidth={1} />
      </Doodle>

      {/* Services Section Doodles - Interaction Focus */}
      <Doodle className="top-[220%] left-[5%] text-brand" delay={1.2} rotate={45}>
        <MousePointer2 size={32} strokeWidth={1} />
      </Doodle>
      <Doodle className="top-[250%] right-[10%] text-blue-500" delay={1.4} rotate={-10}>
        <Share2 size={38} strokeWidth={1} />
      </Doodle>

      {/* Portfolio Section Doodles - Impact Focus */}
      <Doodle className="top-[350%] left-[15%] text-ink" delay={1.6} rotate={15}>
        <Zap size={44} strokeWidth={1} />
      </Doodle>
      <Doodle className="top-[380%] right-[5%] text-brand" delay={1.8} rotate={-30}>
        <Sparkles size={56} strokeWidth={1} />
      </Doodle>

      {/* Hand-drawn Marketing Squiggles & Arrows */}
      {/* Arrow pointing to Hero CTA area */}
      <Doodle className="top-[65%] left-[45%] text-brand/40" delay={2} rotate={-10}>
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 40 70 40 100 10M100 10L90 5M100 10L105 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="10" y="55" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.5">CLICK HERE</text>
        </svg>
      </Doodle>

      {/* Growth Line */}
      <Doodle className="top-[180%] left-[20%] text-emerald-400/30" delay={2.2} rotate={0}>
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 70L40 50L70 60L100 30L130 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="130" cy="10" r="5" fill="currentColor" />
          <path d="M120 10H140M130 0V20" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      </Doodle>

      {/* Loop-de-loop */}
      <Doodle className="top-[280%] right-[20%] text-brand/30" delay={2.4} rotate={45}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40C10 10 40 10 40 40C40 70 70 70 70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </Doodle>

      {/* "New" Badge style doodle */}
      <Doodle className="top-[420%] right-[10%] text-amber-400/30" delay={2.6} rotate={15}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5L61.2 35.4L93.3 35.4L67.4 54.2L78.6 84.6L50 65.8L21.4 84.6L32.6 54.2L6.7 35.4L38.8 35.4L50 5Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
          <text x="35" y="55" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">ROI</text>
        </svg>
      </Doodle>
    </div>
  );
}

