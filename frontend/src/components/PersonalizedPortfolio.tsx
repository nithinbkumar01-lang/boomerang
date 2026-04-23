import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { Smartphone, Camera, Zap, MessageCircle, ChevronLeft, ChevronRight, Monitor, Play, ThumbsUp, MoveHorizontal } from "lucide-react";

const PORTFOLIO_DATA = [
  { 
    id: 1, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762167/Trusted_since_1989_Serving_7_states_and_15k_families_with_farm-fresh_Nutrient-Rich_Pulses.Vi_hg5oq4.mp4", 
    title: "Nutrient-Rich Pulses", 
    subtitle: "Trusted since 1989",
    client: "Biriyani Zest", 
    category: "Reels",
    badge: "social"
  },
  { 
    id: 2, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762177/She_came_exploring_one_of_the_most_talked-about_places_in_Bangalore_and_now_we_re_talking_about_x5gv0o.mp4", 
    title: "Exploring Bangalore", 
    subtitle: "Cultural Discovery",
    client: "Biriyani Zest", 
    category: "Stories",
    badge: "social"
  },
  { 
    id: 3, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775563219/Trump-_I_d_like_to_buy_Greenland._The_world-_Wait_what_Who_knew_real_estate_could_ge_zzyjan.mp4", 
    title: "Trump Greenland", 
    subtitle: "Real Estate Satire",
    client: "Scale Socials", 
    category: "Creative",
    badge: "viral"
  },
  { 
    id: 4, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662435/An_authentic_Uttarakhand-style_dal_curry_prepared_in_traditional_way_This_traditional_dal_curry_yvrez8.mp4", 
    title: "Uttarakhand Dal Curry", 
    subtitle: "Traditional Cooking",
    client: "Vijayalakshmi", 
    category: "Reels",
    badge: "authentic"
  },
  { 
    id: 5, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662423/Authentic_Taste_Starts_with_the_Right_IngredientsFrom_soft_Idlis_crispy_Dosas_to_golden_Vadas_oxpgo9.mp4", 
    title: "Authentic Ingredients", 
    subtitle: "South Indian Taste",
    client: "Vijayalakshmi", 
    category: "Food",
    badge: "social"
  },
  { 
    id: 6, 
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662429/Even_a_penguin_ordered_biryani_Now_it_s_your_turn_Order_your_biryani_from_Biryani_Zest_A_ms2sgu.mp4", 
    title: "Penguin AI Biriyani", 
    subtitle: "Creative Campaign",
    client: "Biriyani Zest", 
    category: "Reels",
    badge: "creative"
  }
];

const MediaRenderer = ({ url, isActive, thumbnailOnly, id, contain, rotate }: { url: string, isActive?: boolean, thumbnailOnly?: boolean, id?: number, contain?: boolean, rotate?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  const isInstagram = url.includes("instagram.com");

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isImage || isYouTube || isInstagram || thumbnailOnly) return;

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
  }, [isActive, url, isImage, isYouTube, isInstagram, thumbnailOnly]);

  const handleToggle = () => {
    if (isImage || isYouTube || isInstagram || thumbnailOnly || !videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPaused(false));
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const mediaClass = `w-full h-full ${contain ? "object-contain" : "object-cover"} ${rotate ? "-rotate-90 scale-[1.78]" : ""}`;

  if (thumbnailOnly) {
    let thumbUrl = url;
    if (isYouTube) {
      thumbUrl = `https://img.youtube.com/vi/${url.split('/').pop()?.split('?')[0]}/maxresdefault.jpg`;
    } else if (isInstagram) {
      thumbUrl = `https://picsum.photos/seed/insta-${id}/1200/800`;
    } else if (url.includes("cloudinary.com")) {
      thumbUrl = url.replace("/video/upload/", "/video/upload/so_0/").replace(".mp4", ".jpg");
    }
    return (
      <div className="w-full h-full relative bg-neutral-900 overflow-hidden">
        <img 
          src={thumbUrl} 
          alt="Project Thumbnail" 
          className={mediaClass}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  if (isYouTube || isInstagram) {
    const embedUrl = isYouTube ? url : `${url.split('?')[0]}embed`;
    return (
      <div className="w-full h-full relative bg-neutral-900 overflow-hidden">
        <iframe 
          src={embedUrl} 
          className={mediaClass}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title={isYouTube ? "YouTube video player" : "Instagram reel player"}
        />
      </div>
    );
  }

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
          className={mediaClass}
        />
      ) : (
        <img 
          src={url} 
          alt="Project" 
          className={mediaClass}
          referrerPolicy="no-referrer"
        />
      )}
      
      {!isImage && isPaused && isActive !== false && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none z-10">
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

const PortfolioCard = ({ item, index, activeIndex, onSwipe, total }: CardProps & { total: number }) => {
  const x = useMotionValue(0);
  const rotateValue = useTransform(x, [-200, 200], [-15, 15]);
  const opacityValue = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  
  const isActive = index === activeIndex;
  
  // Symmetrical Circular Logic
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff <= -total / 2) diff += total;

  const isOpposite = total % 2 === 0 && Math.abs(diff) === total / 2;
  const isVisible = Math.abs(diff) <= 2 && !isOpposite;
  
  // Tighter Fan Logic
  const fanRotate = diff * 8;
  const fanX = diff * 40;
  const fanY = Math.abs(diff) * 8;
  const fanZ = -Math.abs(diff) * 20;
  const fanScale = 1 - Math.abs(diff) * 0.04;

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 80) {
      onSwipe(-1);
    } else if (info.offset.x < -80) {
      onSwipe(1);
    }
    x.set(0);
  };

  return (
    <motion.div
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={isActive ? 0.7 : 0}
      onDragEnd={handleDragEnd}
      className={`absolute w-[180px] md:w-[220px] aspect-[9/16] rounded-[2rem] overflow-hidden border-[4px] border-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] bg-black cursor-grab active:cursor-grabbing touch-none transition-shadow ${isActive ? "shadow-white/10" : ""}`}
      style={{ 
        x: isActive ? x : fanX, 
        y: isActive ? 0 : fanY,
        rotate: isActive ? rotateValue : fanRotate,
        opacity: isActive ? opacityValue : isVisible ? 1 : 0,
        zIndex: 100 - Math.abs(diff),
        perspective: 1000,
        touchAction: 'none',
        display: isVisible || isActive ? 'block' : 'none'
      }}
      initial={false}
      animate={{
        x: isActive ? 0 : fanX,
        y: isActive ? 0 : fanY,
        rotate: isActive ? 0 : fanRotate,
        z: fanZ,
        scale: fanScale,
        filter: isActive ? "blur(0px)" : "blur(1px) brightness(0.6)",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 26 
      }}
    >
      <MediaRenderer url={item.url} isActive={isActive} thumbnailOnly={!isActive} id={item.id} />
      
      {/* Social Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-white px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-xl">
           <ThumbsUp size={12} className="text-black fill-black" />
           <span className="text-[10px] font-black uppercase tracking-tighter text-black lowercase">{item.badge}</span>
        </div>
      </div>

      {/* Decorative Camera Icon like in image */}
      {isActive && (
        <div className="absolute bottom-4 left-4 z-20">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-10 h-10 border-2 border-white/30 rounded-2xl flex items-center justify-center bg-black/20 backdrop-blur-sm"
           >
              <Camera size={18} className="text-white/60" />
           </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default function PersonalizedPortfolio() {
  const [shortProjects, setShortProjects] = useState<any[]>(PORTFOLIO_DATA);
  const [longProjects, setLongProjects] = useState<any[]>([
    {
      id: 22,
      url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762170/When_Ashish_Vidyarthi_Met_Biryani_Zest_%EF%B8%8F_From_the_silver_screen_to_our_spice_scene_%EF%B8%8FWe_ha_le9njn.mp4",
      title: "Ashish Vidyarthi Meet",
      client: "Biriyani Zest",
      category: "Campaigns",
      subtitle: "Celebrity Collaboration",
      aspect: "horizontal"
    },
    {
      id: 23,
      url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1774452821/Indiqube_Premier_League_Teaser_jdrpoz.mp4",
      title: "Premier League Teaser",
      client: "Indiqube",
      category: "Events",
      subtitle: "IPL 2024",
      aspect: "vertical"
    },
    {
      id: 24,
      url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775561706/Indiqube_Comedy_Show_o2pueh.mp4",
      title: "Comedy Show",
      client: "Indiqube",
      category: "Events",
      subtitle: "Live Entertainment",
      aspect: "vertical"
    }
  ]);
  const [shortIndex, setShortIndex] = useState(0);
  const [longIndex, setLongIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [longRes] = await Promise.all([
          fetch("/api/projects/long")
        ]);
        
        if (longRes.ok) {
          const data = await longRes.json();
          if (data && data.length > 0) setLongProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchData();
  }, []);

  const handleShortSwipe = (direction: number) => {
    setShortIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return shortProjects.length - 1;
      if (next >= shortProjects.length) return 0;
      return next;
    });
  };

  const nextLong = () => setLongIndex((prev) => (prev + 1) % longProjects.length);
  const prevLong = () => setLongIndex((prev) => (prev - 1 + longProjects.length) % longProjects.length);

  const activeShort = shortProjects[shortIndex];
  const activeLong = longProjects[longIndex];

  return (
    <section className="relative min-h-screen bg-neutral-950 overflow-hidden py-24 px-6 md:px-12">
      {/* Background Orbs - Dramatic for dark theme */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Background Doodles - Scattered artistic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <motion.svg 
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[15%] left-[5%] w-12 h-12 text-brand" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </motion.svg>
      </div>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto mb-20 text-center relative z-10 px-6">
        <span className="text-brand font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Selected Archive</span>
        <h1 className="h1-display text-white uppercase tracking-tighter">
          Our <span className="text-brand">Work</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Short Form Section */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-12 px-6">
             <span className="text-brand/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-2 block">01 / Motion</span>
             <h2 className="h2-section text-white uppercase tracking-tighter">
                Short <span className="text-brand">Form</span> Content
             </h2>
             <p className="text-white/40 max-w-md mx-auto mt-4 text-sm font-sans tracking-tight">
                High-impact, viral-ready content designed for the modern attention span.
             </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[480px] flex items-center justify-center perspective-1000 mb-6">
            
            {/* SVG Decorations Like Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
               {/* Swipe Indicator Doodle */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30"
               >
                  <motion.div 
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 text-white/40"
                  >
                    <ChevronLeft size={14} className="text-brand" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap text-white/60">Swipe to explore</span>
                    <ChevronRight size={14} className="text-brand" />
                  </motion.div>
                  <svg className="w-20 h-4 text-brand/30" viewBox="0 0 100 20">
                    <path d="M10,15 Q50,5 90,15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                  </svg>
               </motion.div>

               {/* Left Squiggles */}
               <svg className="absolute top-10 left-[15%] w-24 h-24 text-white/5 -rotate-12" viewBox="0 0 100 100">
                  <path d="M10,20 c15,0 15,40 30,40 s15,-40 30,-40 s15,40 30,40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M10,40 c15,0 15,40 30,40 s15,-40 30,-40 s15,40 30,40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
               </svg>
               
               {/* Right Shape (Light Green Bubble) */}
               <div className="absolute bottom-10 right-[15%] w-32 h-32 opacity-10 rotate-12">
                  <svg className="w-full h-full text-[#E4FFC8]" viewBox="0 0 100 100">
                     <path d="M20,20 L80,10 L90,60 L60,90 L10,80 Z" fill="currentColor" />
                  </svg>
               </div>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false}>
                {shortProjects.map((item, i) => (
                  <PortfolioCard 
                    key={`${item.id}-${i}`}
                    item={item} 
                    index={i} 
                    activeIndex={shortIndex} 
                    onSwipe={handleShortSwipe}
                    total={shortProjects.length}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Card Text Details */}
          <div className="text-center mt-4 max-w-2xl mx-auto">
             <AnimatePresence mode="wait">
                <motion.div
                   key={shortIndex}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="space-y-4"
                >
                   <div className="bg-[#FFB2FF] text-black px-4 py-1 rounded-full inline-block mb-1 shadow-md">
                      <span className="text-[10px] font-black tracking-wider italic lowercase">{activeShort?.client}</span>
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter leading-none">
                      {activeShort?.title}
                   </h2>

                   <div className="flex flex-col items-center gap-4">
                      <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em]">
                         {activeShort?.subtitle}
                      </p>

                      <div className="group relative cursor-pointer inline-flex items-center gap-3">
                         <span className="text-white font-sans text-base font-bold tracking-tight border-b border-white/20 pb-0.5 group-hover:text-brand group-hover:border-brand transition-all">
                            View project
                         </span>
                         <motion.div 
                            className="w-1 h-1 bg-brand rounded-full"
                            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                         />
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Long Form Section */}
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12 px-6">
             <span className="text-brand/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-2 block">02 / Narrative</span>
             <h3 className="h2-section text-white uppercase tracking-tighter">
                Long <span className="text-brand">Form</span> Content
             </h3>
             <p className="text-white/40 max-w-md mx-auto mt-4 text-sm font-sans tracking-tight">
                Deep-dive storytelling and cinematic projects that leave a lasting impression.
             </p>
          </div>

          <div className="w-full flex flex-col items-center">
            {/* Fixed Horizontal Sizing Container */}
            <div className="relative group w-full max-w-2xl mb-8">
              <div className="relative w-full aspect-video bg-neutral-900 rounded-[2rem] border-[6px] md:border-[10px] border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLong?.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    {activeLong && (
                       <MediaRenderer 
                          url={activeLong.url} 
                          isActive={true} 
                          rotate={activeLong?.aspect === "horizontal"}
                          id={activeLong.id}
                       />
                    )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1 h-8 bg-neutral-700/50 rounded-full" />
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-1 h-8 bg-neutral-700/50 rounded-full" />
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button 
                onClick={prevLong}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextLong}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:border-brand hover:text-white transition-all"
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
                   className="space-y-1"
                >
                   <div className="bg-brand/10 border border-brand/20 text-brand px-4 py-1 rounded-full inline-block">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{activeLong?.client}</span>
                   </div>
                   <h4 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter uppercase leading-tight">{activeLong?.title}</h4>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
