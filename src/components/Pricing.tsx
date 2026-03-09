import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Basic",
    price: "$2,500",
    features: ["Single Page Website", "Basic SEO", "Mobile Responsive", "1 Month Support"]
  },
  {
    name: "Standard",
    price: "$5,000",
    features: ["Multi-page Website", "Full SEO Setup", "Custom Animations", "3 Months Support", "CMS Integration"],
    popular: true
  },
  {
    name: "Premium",
    price: "$10,000",
    features: ["E-commerce Ready", "Advanced Interactions", "Brand Strategy", "12 Months Support", "Priority Support"]
  }
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight leading-tight">Customized packages perfectly suited to your project's requirements</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Pricing Doodle */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, x: -50 }}
            whileInView={{ opacity: 1, rotate: -5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 text-brand hidden lg:block z-10"
          >
            <svg width="160" height="80" viewBox="0 0 120 60" className="drop-shadow-xl">
              <path d="M10 50 Q60 10 110 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
              <text x="30" y="55" fill="currentColor" fontSize="10" fontFamily="monospace" className="uppercase tracking-widest font-bold">Best Value</text>
            </svg>
          </motion.div>

          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`p-10 rounded-[40px] border transition-all duration-500 ${
                tier.popular ? "border-brand bg-ink text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] scale-105 z-10" : "border-ink/5 bg-paper hover:shadow-2xl"
              }`}
            >
              <div className="mb-10">
                <h3 className="text-xs font-mono font-bold mb-4 uppercase tracking-[0.3em] opacity-50">{tier.name}</h3>
                <div className="text-5xl font-display font-black tracking-tighter">{tier.price}</div>
              </div>
              
              <ul className="space-y-5 mb-12">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.popular ? "bg-brand/20 text-brand" : "bg-ink/5 text-ink"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg ${
                tier.popular ? "bg-brand text-white hover:bg-white hover:text-ink" : "bg-ink text-white hover:bg-brand"
              }`}>
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
