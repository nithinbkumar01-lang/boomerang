import { motion } from "motion/react";

const logos = [
  { name: "Biryani Zest", src: "https://res.cloudinary.com/dofg6bsom/image/upload/v1776599564/biriyai_zest_ynhe7i.png" },
  { name: "Vijayalakshmi", src: "https://res.cloudinary.com/dofg6bsom/image/upload/v1776599564/vijayalakshmi-deer-logo_ekfnon.png" },
  { name: "Vanatva", src: "https://res.cloudinary.com/dofg6bsom/image/upload/v1776599564/vanatva-logo_blt3yi.png" },
  { name: "Scale Socials", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/scale-socials_g2vmgb.jpg" },
  { name: "Besqua", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/besqua_nwqxuf.png" },
  { name: "RightIT", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/righit-sol_uhlkdk.jpg" },
  { name: "Franchise India", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453011/franchaise-india_m9d2w1.png" },
  { name: "Indiqube", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453009/indiqube_ljwlfc.webp" },
  { name: "Amodacare", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/amodacare_nkxzmm.webp" },
  { name: "Wissen", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453010/wissen-logo_f6mkmm.webp" },
  { name: "Rapido", src: "https://res.cloudinary.com/dmez9koqz/image/upload/v1774453009/Rapido_sz9jju.webp" },
];

interface ClientLogosProps {
  variant?: "light" | "dark";
}

export default function ClientLogos({ variant = "light" }: ClientLogosProps) {
  const isDark = variant === "dark";
  
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className={`py-12 overflow-hidden border-y ${isDark ? 'bg-white border-black/5' : 'bg-white border-ink/5'}`}>
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className={`${isDark ? 'text-black/40' : 'text-ink/40'} font-sans text-[10px] uppercase tracking-[0.3em] font-bold`}>
          Trusted by Industry Leaders
        </span>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center min-w-[100px] md:min-w-[150px] h-12 md:h-16 transition-all duration-500 opacity-100"
            >
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
                    text.className = `text-black font-bold text-xs opacity-50`;
                    parent.appendChild(text);
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
