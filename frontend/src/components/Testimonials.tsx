import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useCalendar } from "../context/CalendarContext";

const testimonials = [
  {
    name: "Shivani Sultania",
    role: "Marketing Head, Amodacare",
    quote: "The team delivered exactly what we envisioned—<span class='text-blue-400'>clean, high-quality visuals</span> that truly showcase the essence of our products. Their attention to detail and understanding of our brand made the entire process seamless. <span class='text-blue-300'>We're thrilled with the final output!</span>"
  },
  {
    name: "Team Wissen",
    role: "Operations, Wissen",
    quote: "The video perfectly captured the <span class='text-green-400'>spirit and excitement of the Wissen Run 5K</span>. From the early morning energy to the finish line cheers, the team didn’t miss a moment. <span class='text-green-300'>A seamless experience with a fantastic final result!</span>"
  },
  {
    name: "Shivathmaj Shenoy",
    role: "Founder, Scale Socials",
    quote: "Your dedication ensured <span class='text-brand'>everything ran smoothly during the recent podcast shoots</span>. We truly appreciate the extra help in arranging lighting equipment rentals at the last minute. We believe we make a <span class='text-yellow-400'>great team</span> and are excited about our future projects."
  },
  {
    name: "Biriyani Zest",
    role: "F&B Chain",
    quote: "Brilliant Team!! <span class='text-brand'>Everything was top notch!</span> The shoots, edits, and storyboarding were incredible. We have seen a <span class='text-yellow-400'>major increase in the footfall</span> of nearly all our branches."
  },
  {
    name: "Vijaylaxmi Deer",
    role: "Traditional Food Brand",
    quote: "We approached the team for <span class='text-green-400'>brand strategy and brand shoots</span>—they are very professional. They delivered <span class='text-green-300'>top-quality content</span> with great communication and flawless editing."
  }
];

export default function Testimonials() {
  const { openCalendar } = useCalendar();

  return (
    <section className="py-32 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <span className="text-brand font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="h1-display text-white uppercase max-w-3xl leading-[1.1]">
              We have worked with <br />
              <span className="text-neutral-600">thousands of amazing people</span>
            </h2>
          </Reveal>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="break-inside-avoid bg-[#111111] p-8 rounded-2xl border border-white/5 shadow-sm flex flex-col hover:border-white/10 transition-colors mb-6"
            >
              <div className="mb-8">
                <p 
                  className="text-neutral-300 text-sm md:text-base font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t.quote }}
                />
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">{t.name}</span>
                  <span className="text-neutral-500 text-[11px] mt-1">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Reveal>
            <button 
              onClick={openCalendar}
              className="bg-[#FFB766] text-black px-10 py-4 rounded-xl text-sm font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Book a Discovery Call
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
