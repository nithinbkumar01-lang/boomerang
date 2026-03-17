import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { Smartphone, Camera, Zap, MessageCircle, ChevronLeft, ChevronRight, Monitor, Play } from "lucide-react";

const PORTFOLIO_DATA = [
  { 
    id: 1, 
    url: "https://www.dropbox.com/scl/fi/3sxr7j2ikyi1gu095v8jv/Comapny-teaser.mp4?rlkey=5zlzxe16mx48ohifoqcwpc998&st=3nmvs1hb&raw=1", 
    title: "Company Teaser", 
    subtitle: "brand overview",
    client: "indiqube", 
    category: "corporate",
    logo: "teaser"
  },
  { 
    id: 2, 
    url: "https://www.dropbox.com/scl/fi/evja43q96av8luo0eet44/Indiqube-Premier-League-Teaser.mp4?rlkey=iubtj6lo7e9zi02fxjbtkskur&st=qj9wg9mz&raw=1", 
    title: "IPL Teaser", 
    subtitle: "sports marketing",
    client: "ipl", 
    category: "sports",
    logo: "ipl"
  },
  { 
    id: 3, 
    url: "https://www.dropbox.com/scl/fi/3sxr7j2ikyi1gu095v8jv/Comapny-teaser.mp4?rlkey=5zlzxe16mx48ohifoqcwpc998&st=3nmvs1hb&raw=1", 
    title: "Corporate Narrative", 
    subtitle: "storytelling",
    client: "wissen", 
    category: "narrative",
    logo: "wissen"
  },
  { 
    id: 4, 
    url: "https://www.dropbox.com/scl/fi/evja43q96av8luo0eet44/Indiqube-Premier-League-Teaser.mp4?rlkey=iubtj6lo7e9zi02fxjbtkskur&st=qj9wg9mz&raw=1", 
    title: "Event Highlights", 
    subtitle: "live coverage",
    client: "right it", 
    category: "events",
    logo: "awards"
  }
];

const MediaRenderer = ({ url, isActive }: { url: string, isActive?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isImage) return;

    if (isActive !== false) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPaused(false))
          .catch((err) => {
            console.warn("Autoplay blocked:", err);
            setIsPaused(true);
          });
      }
    } else {
      video.pause();
      setIsPaused(true);
    }
  }, [isActive, url, isImage]);

  const handleToggle = () => {
    if (isImage || !videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPaused(false));
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="w-full h-full relative bg-neutral-900 overflow-hidden" onClick={handleToggle}>
      {!isImage ? (
        <video
          ref={videoRef}
          src={url}
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          onError={() => setIsImage(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          src={url} 
          alt="Project" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      )}
      
      {!isImage && isPaused && isActive !== false && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white">
            <Play size={32} fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
};

interface CardProps {
  item: any;
  index: number;
  activeIndex: number;
  onSwipe: (direction: number) => void;
  key?: React.Key;
}

const PortfolioCard = ({ item, index, activeIndex, onSwipe }: CardProps) => {
  const x = useMotionValue(0);
  const rotateValue = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  
  const isActive = index === activeIndex;
  const diff = index - activeIndex;
  
  const fanRotate = diff * 12;
  const fanX = diff * 70;
  const fanY = Math.abs(diff) * 15;
  const fanZ = -Math.abs(diff) * 100;
  const fanScale = 1 - Math.abs(diff) * 0.08;

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50) {
      onSwipe(-1);
    } else if (info.offset.x < -50) {
      onSwipe(1);
    }
    x.set(0);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      className="absolute w-[240px] md:w-[280px] aspect-[9/16] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-black cursor-grab active:cursor-grabbing touch-none"
      style={{ 
        x: isActive ? x : fanX, 
        y: isActive ? 0 : fanY,
        rotate: isActive ? rotateValue : fanRotate,
        opacity: isActive ? opacity : 1,
        zIndex: 100 - Math.abs(diff),
        perspective: 1000,
        touchAction: 'none'
      }}
      initial={false}
      animate={{
        x: isActive ? 0 : fanX,
        y: isActive ? 0 : fanY,
        rotate: isActive ? 0 : fanRotate,
        z: fanZ,
        scale: fanScale,
        filter: isActive ? "blur(0px)" : "blur(2px)",
      }}
    >
      <MediaRenderer url={item.url} isActive={isActive} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <span className="text-white font-serif italic text-2xl opacity-80">{item.logo}</span>
        </div>
        <div className="absolute top-8 right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
          <Smartphone size={10} className="text-black" />
          <span className="text-[8px] font-bold uppercase tracking-tighter text-black">{item.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function PersonalizedPortfolio() {
  const [shortIndex, setShortIndex] = useState(0);
  const [longIndex, setLongIndex] = useState(0);
  const [showNudge, setShowNudge] = useState(true);

  const handleShortSwipe = (direction: number) => {
    setShowNudge(false);
    setShortIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return PORTFOLIO_DATA.length - 1;
      if (next >= PORTFOLIO_DATA.length) return 0;
      return next;
    });
  };

  const nextLong = () => setLongIndex((prev) => (prev + 1) % PORTFOLIO_DATA.length);
  const prevLong = () => setLongIndex((prev) => (prev - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);

  const activeShort = PORTFOLIO_DATA[shortIndex];
  const activeLong = PORTFOLIO_DATA[longIndex];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-40 md:py-56 px-6 md:px-12">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto mb-40">
        <Reveal>
          <h2 className="text-7xl md:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none text-center">
            Our selected portfolio <br />
            // <span className="text-brand italic font-serif lowercase">portfolio</span>
          </h2>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto space-y-48">
        
        {/* Short Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-1 md:order-1">
            <Reveal>
              <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] mb-6 block">01 / Vertical</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Short <br /> Form
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg max-w-md mb-12 font-light leading-relaxed">
                Capturing attention in seconds. Our short-form content is designed for the scroll, optimized for engagement, and built for impact.
              </p>
            </Reveal>
          </div>

          <div className="order-2 md:order-2 flex flex-col items-center">
            <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 mb-12">
              <AnimatePresence initial={false}>
                {PORTFOLIO_DATA.map((item, i) => (
                  <PortfolioCard 
                    key={item.id} 
                    item={item} 
                    index={i} 
                    activeIndex={shortIndex} 
                    onSwipe={handleShortSwipe}
                  />
                ))}
              </AnimatePresence>
              
              {showNudge && (
                <motion.div 
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-12 text-white/30 font-mono text-[10px] uppercase tracking-widest"
                >
                  Swipe to explore
                </motion.div>
              )}
            </div>

            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={shortIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <div className="bg-[#FFB2FF] text-black px-4 py-1 rounded-full inline-block mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-tight">{activeShort.client}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">{activeShort.title}</h4>
                  <p className="text-sm md:text-base text-white/40 font-display font-black uppercase tracking-tighter">{activeShort.subtitle}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Long Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-1 md:order-2">
            <Reveal>
              <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] mb-6 block">02 / Narrative</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Long <br /> Form
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg max-w-md mb-12 font-light leading-relaxed">
                Immersive storytelling that resonates. Our long-form narratives dive deep into brand values, creating lasting connections with your audience.
              </p>
            </Reveal>
          </div>

          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="relative group w-full mb-6">
              {/* Laptop Frame */}
              <div className="relative w-full aspect-video bg-neutral-900 rounded-xl border-[12px] border-neutral-800 shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLong.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <MediaRenderer url={activeLong.url} isActive={true} />
                  </motion.div>
                </AnimatePresence>
                
                {/* Laptop Camera Hole */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full border border-white/10" />
              </div>
              {/* Laptop Base */}
              <div className="h-4 w-[105%] -ml-[2.5%] bg-neutral-800 rounded-b-xl shadow-xl" />
            </div>

            {/* Navigation Arrows below Laptop */}
            <div className="flex gap-4 mb-8">
              <button 
                onClick={prevLong}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextLong}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-black transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={longIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <div className="bg-brand text-black px-4 py-1 rounded-full inline-block mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-tight">{activeLong.client}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter">{activeLong.title}</h4>
                  <p className="text-sm md:text-base text-white/40 font-display font-black uppercase tracking-tighter">{activeLong.subtitle}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* Background Graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <style>{`
        .font-serif {
          font-family: 'Libre Baskerville', serif;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
