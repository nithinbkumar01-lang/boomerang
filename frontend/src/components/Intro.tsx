import { motion } from "motion/react";
import { Globe, Cpu, Layers, Zap, Hexagon } from "lucide-react";
import { Reveal } from "./Reveal";

const logos = [
  { name: "Images", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453011/images_lzgmpo.png" },
  { name: "MNC", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/mnc_w4ufp5.jpg" },
  { name: "Scale Socials", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/scale-socials_g2vmgb.jpg" },
  { name: "Besqua", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/besqua_nwqxuf.png" },
  { name: "RightIT", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/righit-sol_uhlkdk.jpg" },
  { name: "Franchise India", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453011/franchaise-india_m9d2w1.png" },
  { name: "Indiqube", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453009/indiqube_ljwlfc.webp" },
  { name: "Amodacare", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/amodacare_nkxzmm.webp" },
  { name: "Wissen", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/wissen-logo_f6mkmm.webp" },
  { name: "Rapido", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453009/Rapido_sz9jju.webp" },
];

export default function Intro() {
  return (
    <section className="relative bg-paper overflow-hidden border-y border-ink/5">
      <div className="max-w-6xl mx-auto text-center px-6 py-40 md:py-56">
        <Reveal delay={0.2} direction="up">
          <motion.h2
            className="text-4xl md:text-7xl font-display font-bold leading-[1.05] text-ink mb-24 tracking-tight"
          >
            We're Boomerang<span className="text-brand">®</span> — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
          </motion.h2>
        </Reveal>

        <div
          className="relative w-full overflow-hidden py-10"
        >
          <div
            className="flex items-center gap-8 md:gap-12"
          >
            <motion.div
              animate={{
                x: [-2000, 0], // Left to right scrolling
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center min-w-[80px] md:min-w-[120px] h-16 md:h-24 px-2">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-full w-auto object-contain block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const text = document.createElement('span');
                        text.innerText = logo.name;
                        text.className = 'text-ink font-bold text-sm opacity-50';
                        parent.appendChild(text);
                      }
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient Fades for seamless look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
