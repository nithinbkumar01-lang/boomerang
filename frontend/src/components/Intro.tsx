import { motion } from "motion/react";
import { Globe, Cpu, Layers, Zap, Hexagon } from "lucide-react";
import { Reveal } from "./Reveal";

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

export default function Intro() {
  return (
    <section className="relative bg-white overflow-hidden border-y border-ink/5 section-spacing">
      <div className="max-w-7xl mx-auto text-center px-6">
        <Reveal delay={0.2} direction="up">
          <motion.h2
            className="h2-section text-ink/90 max-text-width mx-auto pb-8"
          >
            We're Boomerang<span className="text-brand">®</span> — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
          </motion.h2>
        </Reveal>
      </div>
    </section>
  );
}
