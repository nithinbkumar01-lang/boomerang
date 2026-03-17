import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";
import { ArrowLeft, Star } from "lucide-react";
import SEO from "../components/SEO";

const PROJECTS_DATA: Record<string, any> = {
  "1": {
    title: "Urban Vibes",
    client: "City Pulse Media",
    year: "2023",
    services: "Short Form Production",
    category: "Social Media",
    video: "https://cdn.pixabay.com/video/2021/04/12/70796-537392700_large.mp4",
    description: "A high-energy short-form series capturing the essence of urban life. We focused on fast-paced editing and vibrant color grading to resonate with a younger, mobile-first audience.",
    scope: [
      "Concept Development: Defining the visual language for urban storytelling.",
      "Production: On-location filming across major metropolitan hubs.",
      "Post-Production: Dynamic editing with custom sound design.",
      "Distribution: Optimized for TikTok, Reels, and YouTube Shorts."
    ],
    gallery: [
      "https://picsum.photos/seed/urban1/1200/800",
      "https://picsum.photos/seed/urban2/1200/800",
      "https://picsum.photos/seed/urban3/1200/800"
    ],
    testimonial: "The 'Urban Vibes' series completely transformed our social presence. The engagement rates were beyond our expectations.",
    author: "Marcus Chen, Creative Director"
  },
  "101": {
    title: "Cinematic Story",
    client: "TechVision Inc.",
    year: "2024",
    services: "Brand Narrative",
    category: "Documentary",
    video: "https://cdn.pixabay.com/video/2020/09/25/51130-464240742_large.mp4",
    description: "An immersive brand story for TechVision Inc., highlighting their commitment to innovation and human-centric design. This project required a cinematic approach to corporate storytelling.",
    scope: [
      "Narrative Strategy: Crafting a compelling story arc for the brand.",
      "Cinematography: Using high-end cinema cameras for a premium look.",
      "Sound Design: Orchestral score combined with intimate soundscapes.",
      "Color Grading: A sophisticated, filmic palette."
    ],
    gallery: [
      "https://picsum.photos/seed/tech1/1200/800",
      "https://picsum.photos/seed/tech2/1200/800",
      "https://picsum.photos/seed/tech3/1200/800"
    ],
    testimonial: "Boomerang captured our vision perfectly. The final film is a masterpiece that truly represents who we are.",
    author: "Sarah Jenkins, CEO TechVision"
  }
};

// Fallback for other IDs
const DEFAULT_PROJECT = {
  title: "Executive Insights",
  client: "TechVision Inc.",
  year: "2021",
  services: "Post Production",
  category: "Interview",
  video: "https://cdn.pixabay.com/video/2021/04/12/70796-537392700_large.mp4",
  description: "TechVision Inc. sought to create a series of engaging interview videos featuring their top executives and thought leaders in the tech industry. The goal was to showcase their expertise, vision, and thought leadership while offering valuable insights into the future of technology and innovation.",
  scope: [
    "Concept Development: Crafting a concept that highlights the thought leadership and expertise of TechVision's executives, selecting topics, and defining the series structure.",
    "Pre-Production: Identifying interview subjects, scripting interview questions, and selecting a suitable location for filming.",
    "Production: Filming in a professional studio setting, capturing high-quality video and audio of the interviews.",
    "Post-Production: Editing, color grading, adding graphics, and creating a cohesive and visually appealing series.",
    "Distribution: Sharing the interview videos on TechVision's website, social media platforms, and industry-specific websites and forums."
  ],
  gallery: [
    "https://picsum.photos/seed/proj1/1200/800",
    "https://picsum.photos/seed/proj2/1200/800",
    "https://picsum.photos/seed/proj3/1200/800"
  ],
  testimonial: "Working with Boomerang to produce our 'Executive Insights' interview series has been an exceptional experience. The professionalism, quality of production, and attention to detail were impressive. The videos have allowed us to showcase our thought leadership and vision in the tech industry, and we've received positive feedback from our peers and clients alike. We look forward to continuing our partnership for more insightful content.",
  author: "Jennifer Park, Chief Technology Officer"
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DATA[id || ""] || DEFAULT_PROJECT;

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <SEO 
        title={`${project.title} | Projects`}
        description={project.description}
        image={project.gallery[0]}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/60 hover:text-brand transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono uppercase tracking-widest">Back to Projects</span>
        </button>

        {/* Title */}
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-16">
            {project.title}
          </h1>
        </Reveal>

        {/* Hero Video */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="aspect-video bg-neutral-900 rounded-3xl overflow-hidden mb-24 shadow-2xl border border-white/10"
        >
          <video 
            src={project.video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                {project.description}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-2">[Client]</span>
              <span className="text-sm font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-2">[Year]</span>
              <span className="text-sm font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-2">[Services]</span>
              <span className="text-sm font-medium">{project.services}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand block mb-2">[Category]</span>
              <span className="text-sm font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Secondary Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="aspect-[21/9] bg-neutral-900 rounded-3xl overflow-hidden mb-32 shadow-2xl border border-white/10"
        >
          <img 
            src={project.gallery[0]} 
            alt="Project detail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Detailed Scope */}
        <div className="max-w-4xl mb-32">
          <Reveal>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-12">Project Scope</h2>
          </Reveal>
          <div className="space-y-8">
            {project.scope.map((item: string, i: number) => {
              const [title, desc] = item.split(": ");
              return (
                <div key={i}>
                  <Reveal delay={i * 0.1}>
                    <div className="border-l border-brand pl-6">
                      <h3 className="text-lg font-bold mb-2">{title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-32">
          <Reveal>
            <h2 className="text-4xl font-display font-bold uppercase tracking-tight mb-16 text-center">Snaps From the Project</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img: string, i: number) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="flex justify-center gap-1 text-brand mb-8">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <Reveal>
            <blockquote className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight leading-tight mb-12">
              "{project.testimonial}"
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <cite className="text-brand font-mono text-xs uppercase tracking-widest not-italic">
              — {project.author}
            </cite>
          </Reveal>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/20 to-transparent pointer-events-none" />
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 relative z-10">
              Not limited to video,<br />
              we're your creative comrades.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg mb-12 relative z-10">Got questions, project ideas, or just want to say hi? We're all ears!</p>
          </Reveal>
          <Reveal delay={0.3}>
            <button className="bg-brand text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10">
              Let's Collaborate
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
