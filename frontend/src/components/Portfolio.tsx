import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface SwipeCardProps {
  item: any;
  onSwipe: (dir: 'left' | 'right') => void;
  isTop: boolean;
  position: number;
  aspectRatio?: string;
  key?: string | number;
}

function SwipeCard({ item, onSwipe, isTop, position, aspectRatio = "aspect-[9/16]" }: SwipeCardProps) {
  const x = useMotionValue(0);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();
  
  // Calculate fanned-out position for background cards
  const fanRotate = position === 0 ? 0 : (position % 2 === 0 ? 1 : -1) * (position * 12);
  const fanX = position === 0 ? 0 : (position % 2 === 0 ? 1 : -1) * (position * 40);
  const fanScale = 1 - (position * 0.05);
  
  const rotate = useTransform(x, [-200, 200], [fanRotate - 15, fanRotate + 15]);
  const opacity = useTransform(x, [-300, -200, 0, 200, 300], [0, 1, 1, 1, 0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isTop && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isTop]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) {
      onSwipe('right');
    } else if (info.offset.x < -100) {
      onSwipe('left');
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleCardClick = () => {
    if (isTop) {
      navigate(`/project/${item.id}`);
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, zIndex: 50 - position }}
      initial={{ rotate: fanRotate, x: fanX, scale: fanScale, opacity: 0 }}
      animate={{ 
        rotate: isTop ? rotate.get() : fanRotate, 
        x: isTop ? x.get() : fanX, 
        scale: fanScale,
        opacity: 1 
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onClick={handleCardClick}
      whileDrag={{ scale: 1.05 }}
      className={`absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black cursor-grab active:cursor-grabbing ${aspectRatio}`}
    >
      <video
        ref={videoRef}
        src={item.url}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover opacity-80"
      />
      
      {/* Overlay info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl inline-block">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white">{item.title}</span>
        </div>
        
        {isTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all"
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [shortCards, setShortCards] = useState<any[]>([]);
  const [longCards, setLongCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [shortRes, longRes] = await Promise.all([
          fetch("/api/projects/short"),
          fetch("/api/projects/long")
        ]);
        
        if (!shortRes.ok || !longRes.ok) {
          throw new Error("Failed to fetch projects");
        }

        const shortData = await shortRes.json();
        const longData = await longRes.json();
        
        setShortCards(Array.isArray(shortData) ? shortData : []);
        setLongCards(Array.isArray(longData) ? longData : []);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setShortCards([]);
        setLongCards([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleShortSwipe = () => {
    setShortCards(prev => {
      const newCards = [...prev];
      const swiped = newCards.pop();
      if (swiped) newCards.unshift(swiped);
      return newCards;
    });
  };

  const handleLongSwipe = () => {
    setLongCards(prev => {
      const newCards = [...prev];
      const swiped = newCards.pop();
      if (swiped) newCards.unshift(swiped);
      return newCards;
    });
  };

  if (loading) {
    return (
      <div className="bg-black text-white py-32 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section id="projects" className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Short Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 md:mb-48">
          {/* Left: Mobile Swipe Stack */}
          <div className="relative h-[500px] md:h-[650px] flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16]">
              <AnimatePresence mode="popLayout">
                {shortCards.map((video, i) => {
                  const position = shortCards.length - 1 - i;
                  return (
                    <SwipeCard 
                      key={video.id} 
                      item={video} 
                      isTop={position === 0}
                      position={position}
                      onSwipe={handleShortSwipe}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
            <div className="mt-8 text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
              Swipe to explore
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] mb-6 block">
                01 / Interactive
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2-section text-white !leading-[0.9] mb-8">
                Short Form <br />
                <span className="font-serif italic lowercase text-brand">Content</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-md mb-10 font-light leading-relaxed">
                Infinite vertical storytelling. Swipe through our short-form portfolio to see how we capture attention in seconds.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <button className="group flex items-center gap-4 text-white hover:text-brand transition-colors">
                <span className="text-sm font-bold uppercase tracking-widest">View Full Gallery</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand transition-colors">
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </Reveal>
          </div>
        </div>

        {/* Section 2: Long Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:items-end lg:text-right">
            <Reveal>
              <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] mb-6 block">
                02 / Storytelling
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h2-section text-white !leading-[0.9] mb-8">
                Long Form <br />
                <span className="font-serif italic lowercase text-brand">Narratives</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-md mb-10 font-light leading-relaxed lg:ml-auto">
                Cinematic depth. Swipe through our long-form narratives to experience the power of immersive storytelling.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <button className="group flex items-center gap-4 text-white hover:text-brand transition-colors lg:flex-row-reverse">
                <span className="text-sm font-bold uppercase tracking-widest">Explore Stories</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand transition-colors">
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </Reveal>
          </div>

          {/* Right: Laptop Swipe Stack */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-video">
              {/* Laptop Frame Simulation */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-neutral-800 rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[105%] h-4 bg-neutral-900 rounded-b-xl z-0" />
              
              <div className="absolute inset-[12px] overflow-hidden rounded-lg bg-black">
                <AnimatePresence mode="popLayout">
                  {longCards.map((video, i) => {
                    const position = longCards.length - 1 - i;
                    return (
                      <SwipeCard 
                        key={video.id} 
                        item={video} 
                        isTop={position === 0}
                        position={position}
                        onSwipe={handleLongSwipe}
                        aspectRatio="aspect-video"
                      />
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
            <div className="mt-12 text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
              Swipe to explore
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .font-serif {
          font-family: 'Libre Baskerville', serif;
        }
      `}</style>
    </section>
  );
}
