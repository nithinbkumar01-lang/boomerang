import { motion } from "motion/react";

const industries = [
  { title: "Corporate Videos", image: "https://picsum.photos/seed/ind1/800/600" },
  { title: "Documentaries", image: "https://picsum.photos/seed/ind2/800/600" },
  { title: "Shorts & Reels", image: "https://picsum.photos/seed/ind3/800/600" },
  { title: "Entertainment and Narrative Films", image: "https://picsum.photos/seed/ind4/800/600" },
  { title: "Commercials and Advertisements", image: "https://picsum.photos/seed/ind5/800/600" },
  { title: "Event and Live Streaming", image: "https://picsum.photos/seed/ind6/800/600" },
  { title: "Animation and VFX (Visual Effects)", image: "https://picsum.photos/seed/ind7/800/600" },
];

export default function Industries() {
  return (
    <section className="py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight"
          >
            We're Video Pros in <span className="text-brand">Many Industries!</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative aspect-video rounded-3xl overflow-hidden group cursor-pointer ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <img 
                src={industry.image} 
                alt={industry.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-brand/20"
          >
            Explore All Categories
          </motion.button>
        </div>
      </div>
    </section>
  );
}
