import { motion } from "motion/react";

const blogs = [
  {
    title: "Vertora Video Production Career Opportunities and Upcoming Event",
    category: "NEWS",
    date: "Aug 29, 2023",
    author: "Michael Carter",
    image: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    title: "Mastering the Art of Storytelling: The Power of Narrative in Video Production",
    category: "TIPS & TRICKS",
    date: "Oct 17, 2023",
    author: "Michael Carter",
    image: "https://picsum.photos/seed/blog2/800/600"
  },
  {
    title: "Lights, Camera, Action! Behind the Scenes of a Video Production",
    category: "STORIES",
    date: "Oct 16, 2023",
    author: "John Davis",
    image: "https://picsum.photos/seed/blog3/800/600"
  }
];

export default function Blog() {
  return (
    <section className="py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight"
            >
              Dive into <span className="text-brand">our blogs</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Read All Blogs
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-brand font-mono text-[10px] font-bold uppercase tracking-widest">{blog.category}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight group-hover:text-brand transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
