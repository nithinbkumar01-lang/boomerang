import { motion } from "motion/react";

const logos = [
  { name: "The Amob", src: "https://storage.googleapis.com/ai-studio-assets/input_file_0.png" },
  { name: "Besqua", src: "https://storage.googleapis.com/ai-studio-assets/input_file_1.png" },
  { name: "Franchise India", src: "https://storage.googleapis.com/ai-studio-assets/input_file_2.png" },
  { name: "Brewing Stories", src: "https://storage.googleapis.com/ai-studio-assets/input_file_3.png" },
  { name: "Indiqube", src: "https://storage.googleapis.com/ai-studio-assets/input_file_4.png" },
  { name: "MNC", src: "https://storage.googleapis.com/ai-studio-assets/input_file_5.png" },
  { name: "Rapido", src: "https://storage.googleapis.com/ai-studio-assets/input_file_6.png" },
  { name: "RightIT", src: "https://storage.googleapis.com/ai-studio-assets/input_file_7.png" },
  { name: "Scale Socials", src: "https://storage.googleapis.com/ai-studio-assets/input_file_8.png" },
  { name: "Wissen", src: "https://storage.googleapis.com/ai-studio-assets/input_file_9.png" },
];

interface ClientLogosProps {
  variant?: "light" | "dark";
}

export default function ClientLogos({ variant = "light" }: ClientLogosProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 overflow-hidden border-b ${isDark ? 'bg-black border-white/5' : 'bg-paper border-ink/5'}`}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className={`${isDark ? 'text-white/40' : 'text-ink/40'} font-mono text-[10px] uppercase tracking-[0.3em]`}>
          Trusted by Industry Leaders
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className={`mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${isDark ? 'invert brightness-200' : ''}`}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
