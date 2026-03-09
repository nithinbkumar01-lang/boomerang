import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "GreenWaves",
    category: "Eco-Warriors",
    image: "https://picsum.photos/seed/green/800/1000",
  },
  {
    title: "Mystic Flows",
    category: "Modern Life",
    image: "https://picsum.photos/seed/mystic/800/1000",
  },
  {
    title: "Urban Pulse",
    category: "City Beats",
    image: "https://picsum.photos/seed/urban/800/1000",
  },
  {
    title: "Digital Soul",
    category: "Tech Vision",
    image: "https://picsum.photos/seed/digital/800/1000",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section className="py-32 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
          >
            Our Handpicked <br />
            <span className="text-brand">Featured Portfolio</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/work"
            className="group flex items-center gap-4 bg-white/5 hover:bg-brand text-white px-8 py-4 rounded-full transition-all border border-white/10"
          >
            <span className="text-xs font-mono uppercase tracking-widest font-bold">See All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto pb-12 no-scrollbar">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[80vw] md:w-[30vw] group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8">
                <span className="bg-brand text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
