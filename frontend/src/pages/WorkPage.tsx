import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "../components/Reveal";
import ClientLogos from "../components/ClientLogos";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const CATEGORIES = ["All projects", "Reels", "Podcasts", "Events", "Campaigns", "AI Reels"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All projects");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === "All projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      <SEO 
        title="Our Work | Boomerang Studios"
        description="Explore Boomerang Studios' portfolio of high-end video production, reels, podcasts, and creative campaigns for global brands."
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/projects-hero/1920/1080?blur=5" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6">
              Our Projects
            </h1>
          </Reveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? "bg-white text-black" 
                : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-32">
              <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/5">
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                          <span className="text-[8px] font-mono uppercase tracking-widest text-white/80">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <video 
                        src={project.url} 
                        muted 
                        loop 
                        onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                        onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block">
                        {project.client}
                      </span>
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <ClientLogos variant="dark" />

      {/* Creative Comrades Section (Footer CTA) */}
      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-5xl mx-auto text-center bg-neutral-900/50 border border-white/5 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/10 to-transparent pointer-events-none" />
          
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              Not limited to video,<br />
              we're your creative comrades.
            </h2>
          </Reveal>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-lg mb-12 max-w-2xl mx-auto"
          >
            Got questions, project ideas, or just want to say hi? We're all ears!
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 mx-auto"
          >
            Let's Collaborate
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
