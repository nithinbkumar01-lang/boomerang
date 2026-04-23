import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring, useMotionValue } from "motion/react";

const introText = "We're Boomerang® — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.";

interface WordProps {
  key?: React.Key;
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Word = ({ word, index, total, progress }: WordProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Smooth scroll parameters
  const start = index / (total * 2.2); // Tighter stagger
  const end = start + 0.12;
  
  // Entrance Animation (Scroll-based) - Increased baseline visibility
  const opacity = useTransform(progress, [start, end], [0.3, 1]); // Start at 30% visibility
  const scrollY = useTransform(progress, [start, end], [30, 0]); // Reduced movement distance
  const scale = useTransform(progress, [start, end], [0.95, 1]);
  const rotate = useTransform(progress, [start, end], [2, 0]);
  const blurValue = useTransform(progress, [start, end], [6, 0]); // Reduced initial blur
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Mouse interactivity (Magnetic feel)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Combine scroll position with hover displacement
  const combinedY = useTransform(
    [scrollY, springY],
    ([sY, mY]) => (sY as number) + (mY as number)
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Handle Boomerang® logic
  const isBoomerang = word.includes("Boomerang");
  const cleanWord = word.replace("Boomerang®", "Boomerang");

  return (
    <motion.span
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        opacity, 
        y: combinedY, // Unified 'y' property
        scale, 
        rotate,
        filter: blur,
        x: springX
      }}
      className="inline-block relative cursor-default"
      animate={{
        color: isHovered ? "var(--color-brand)" : "var(--color-ink)",
      }}
    >
      {isBoomerang ? (
        <span className="relative inline-flex items-start">
          <span className="font-black">{cleanWord}</span>
          <motion.span 
            animate={{ 
              rotate: isHovered ? [0, -10, 10, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            className="text-brand text-[0.4em] ml-0.5 font-black leading-none"
          >
            ®
          </motion.span>
        </span>
      ) : word}
      
      {/* Interactive Underline Shimmer on Hover */}
      {isHovered && (
        <motion.div 
          layoutId="hover-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand/30 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
        />
      )}
    </motion.span>
  );
}

export default function Intro() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });

  // Smooth out the scroll progress for a buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001
  });

  const words = introText.split(" ");

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden border-y border-ink/5 pt-20 pb-8 md:pt-32 md:pb-12 flex items-center justify-center min-h-[30vh]">
      {/* Dynamic Background subtle shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-[1000px] mx-auto text-center px-6 relative z-10">
        <h2 className="h2-section text-ink flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 md:gap-y-4">
          {words.map((word, i) => (
            <Word 
              key={i} 
              word={word} 
              index={i} 
              total={words.length} 
              progress={smoothProgress} 
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
