import { motion } from "motion/react";

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

interface ClientLogosProps {
  variant?: "light" | "dark";
}

export default function ClientLogos({ variant = "light" }: ClientLogosProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-24 overflow-hidden border-b ${isDark ? 'bg-black border-white/5' : 'bg-paper border-ink/5'}`}>
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className={`${isDark ? 'text-white/40' : 'text-ink/40'} font-mono text-[10px] uppercase tracking-[0.4em] font-bold`}>
          Trusted by Industry Leaders
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center min-w-[80px] md:min-w-[120px] h-16 md:h-24 px-2"
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
                    text.className = `${isDark ? 'text-white' : 'text-ink'} font-bold text-sm opacity-50`;
                    parent.appendChild(text);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
