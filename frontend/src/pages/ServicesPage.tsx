import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "../components/Reveal";
import ClientLogos from "../components/ClientLogos";
import SEO from "../components/SEO";
import { 
  Camera, 
  Video, 
  Film, 
  Edit3, 
  Mic, 
  Layers, 
  Monitor, 
  Zap, 
  ArrowUpRight, 
  ChevronRight,
  Lightbulb,
  PenTool,
  MapPin,
  Users,
  Wrench,
  Clock,
  Drone,
  Radio,
  Maximize,
  MonitorPlay,
  Scissors,
  Palette,
  Volume2,
  Box,
  Type,
  Layout,
  Disc,
  Archive,
  ArrowRight
} from "lucide-react";
import FAQ from "../components/FAQ";

const PRE_PRODUCTION = [
  { icon: <Lightbulb size={20} />, title: "Concept Development", desc: "We work closely with you to brainstorm ideas, themes, and concepts that align with your goals and vision. This is where the creative magic begins." },
  { icon: <PenTool size={20} />, title: "Scriptwriting", desc: "Our experienced scriptwriters craft compelling narratives that effectively convey your message. Whether it's a commercial, corporate video, or any other format, we ensure that the script resonates with your target audience." },
  { icon: <Layout size={20} />, title: "Storyboarding", desc: "Visual storytelling is key to engaging your audience. We create storyboards that outline the visual sequence, shot angles, and transitions, providing a blueprint for the shoot." },
  { icon: <MapPin size={20} />, title: "Location Scouting", desc: "The right location can make or break a video. We scout and select the ideal settings, whether it's a studio, outdoor location, or a unique environment that suits your project." },
  { icon: <Users size={20} />, title: "Casting and Talent Management", desc: "We handle talent auditions, casting, and management. Our goal is to select the perfect actors, presenters, or hosts who bring your script to life." },
  { icon: <Wrench size={20} />, title: "Equipment and Crew Planning", desc: "We ensure that the right equipment and skilled crew members are in place for a successful shoot. This includes camera selection, lighting setup, and more." },
  { icon: <Clock size={20} />, title: "Production Timeline", desc: "We establish a clear timeline for the pre-production phase to keep everything on track and ensure timely project delivery." }
];

const PRODUCTION = [
  { icon: <Camera size={20} />, title: "Cinematography", desc: "Our skilled cinematographers expertly frame and capture your content, ensuring that every shot is visually stunning and engaging." },
  { icon: <Drone size={20} />, title: "Drone Videography", desc: "Elevate your visuals with breathtaking aerial footage. Our drone videography services provide stunning perspectives that add a dynamic dimension to your videos." },
  { icon: <Radio size={20} />, title: "Live Streaming", desc: "We're well-versed in live streaming, enabling you to broadcast events, presentations, and content in real-time to a global audience." },
  { icon: <Maximize size={20} />, title: "Steadicam and Gimbal Work", desc: "For silky-smooth and stabilized footage, our Steadicam and gimbal work ensures that every shot is free from shaky distractions." },
  { icon: <MonitorPlay size={20} />, title: "Multi-Camera Setup", desc: "Multi-camera setups add versatility and dynamism to your video. We utilize multiple cameras to capture different angles and perspectives, enhancing your storytelling." },
  { icon: <Clock size={20} />, title: "Time-Lapse and Slow Motion", desc: "Time-lapse and slow-motion techniques are powerful storytelling tools. Our team excels in creating time-lapse sequences and slow-motion footage that captivate audiences." },
  { icon: <Palette size={20} />, title: "Green Screen and Chroma Key", desc: "For projects that require background replacement or visual effects, our green screen and chroma key services allow us to create virtually any environment, any storytelling." },
  { icon: <Zap size={20} />, title: "Dynamic Webinars", desc: "Webinars are an essential tool for online engagement. We can create and manage dynamic webinars, making sure your content is engaging and informative." }
];

const POST_PRODUCTION = [
  { icon: <Scissors size={20} />, title: "Video Editing", desc: "Our skilled editors meticulously assemble and edit the footage, creating a seamless, coherent, and compelling narrative that captivates your audience." },
  { icon: <Palette size={20} />, title: "Color Grading", desc: "We enhance the visuals by applying color grading techniques, ensuring that your video looks its best with vibrant colors, a consistent mood, and a professional finish." },
  { icon: <Volume2 size={20} />, title: "Audio Enhancement", desc: "Clear and impactful audio is vital for a memorable video. We provide audio enhancement services to make sure your message is conveyed with crystal clarity." },
  { icon: <Box size={20} />, title: "3D Animation and CGI", desc: "To add a touch of magic to your project, we offer 3D animation and CGI services that create stunning visual effects and immersive 3D elements." },
  { icon: <Type size={20} />, title: "Subtitles and Closed Captions", desc: "We can add subtitles and closed captions to make your content accessible to a broader audience, ensuring that your message reaches everyone." },
  { icon: <Layout size={20} />, title: "Whiteboard Animation", desc: "Whiteboard animation is an engaging way to convey complex ideas. Our whiteboard animation services turn your concepts into captivating visuals that resonate with your audience." },
  { icon: <Disc size={20} />, title: "DVD and Blu-ray Authoring", desc: "If your project is intended for physical distribution, we provide DVD and Blu-ray authoring services, ensuring your content is professionally presented." },
  { icon: <Archive size={20} />, title: "Archiving and Backup", desc: "We understand the importance of preserving your valuable content. Our archiving and backup services ensure that your video assets are securely stored and easily retrievable for future use." }
];

const CATEGORIES = [
  {
    title: "Corporate Video",
    desc: "Our Corporate Video Production service is a comprehensive solution for organizations seeking effective internal and external communication tools. From employee training and company profiles to marketing messages and investor communications, our corporate videos convey your company's values, mission, and key messages to various stakeholders.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Commercial Video",
    desc: "We create high-impact commercial videos that drive results. From TV spots to social media ads, our team handles everything from concept to final delivery, ensuring your brand message is clear and compelling.",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Documentary Film",
    desc: "Our documentary filmmaking service captures real-life stories with depth and authenticity. We specialize in storytelling that resonates, whether for social causes, historical records, or brand documentaries.",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Product Video",
    desc: "Showcase your products in the best light. We create stunning product videos that highlight features, functionality, and design, perfect for e-commerce and marketing campaigns.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Animation",
    desc: "From 2D motion graphics to 3D character animation, we bring your ideas to life with fluid motion and creative design. Perfect for explainer videos and brand storytelling.",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Event Video",
    desc: "Capture the energy and highlights of your events. We provide comprehensive event coverage, from multi-camera live shoots to polished highlight reels.",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Educational Video",
    desc: "Make learning engaging. We create educational content, training videos, and online courses that are clear, informative, and visually appealing.",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Entertainment Video",
    desc: "From music videos to short films, we provide high-end production services for the entertainment industry, focusing on creative vision and technical excellence.",
    images: [
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Fashion Video",
    desc: "Elevate your fashion brand with cinematic visuals. We create lookbooks, campaign videos, and runway coverage that capture style and elegance.",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Lifestyle",
    desc: "Authentic lifestyle content that connects with your audience. We capture real moments and environments that reflect your brand's lifestyle and values.",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Interview Video",
    desc: "Professional interview production for testimonials, documentaries, and corporate communications. We ensure high-quality audio and flattering lighting.",
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Social Media Video",
    desc: "Short-form, high-engagement content tailored for social platforms. We create Reels, TikToks, and Stories that grab attention and drive interaction.",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const MARQUEE_ITEMS = ["VFX", "Filming", "Scriptwriting", "Sound Design", "Color Grading", "Editing", "Motion Graphics", "3D Modeling"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <div className="bg-paper min-h-screen pt-20">
      <SEO 
        title="Our Services | Boomerang Studios"
        description="From pre-production to post-production, Boomerang Studios offers comprehensive video production services including cinematography, drone videography, and 3D animation."
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
            alt="Services Hero" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/50 to-paper" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Reveal>
            <h1 className="h1-display mb-8">
              Services
            </h1>
          </Reveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-text-width text-body text-ink/60"
          >
            Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun.
          </motion.p>
        </div>
      </section>

      {/* Categories (Experts) Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-ink text-white rounded-[4rem] p-6 md:p-12 lg:p-16 overflow-hidden relative border border-white/10">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="h-full w-full grid grid-cols-6 md:grid-cols-12 gap-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/10 h-full" />
              ))}
            </div>
          </div>

          <div className="relative z-10 mb-20">
            <Reveal>
              <h2 className="h2-section mb-6">
                We are your experts in <br/> <span className="text-brand">these categories</span>
              </h2>
            </Reveal>
            <p className="text-white/40 max-text-width text-body">
              Our creative toolbox overflows with video possibilities! From captivating stories to informative animations, we craft videos that fit every need.
            </p>
          </div>
          
          <div className="space-y-2 relative z-10">
            {CATEGORIES.map((cat, i) => {
              const isActive = activeCategory === i;
              return (
                <motion.div 
                  key={i}
                  layout
                  onMouseEnter={() => setActiveCategory(i)}
                  onMouseLeave={() => setActiveCategory(null)}
                  initial={false}
                  className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 cursor-pointer group ${isActive ? 'bg-white/5 p-8 md:p-12' : 'border-b border-white/5 py-10 px-6 hover:bg-white/[0.02]'}`}
                >
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-10">
                        <span className={`text-5xl md:text-9xl font-display font-black transition-all duration-700 select-none ${isActive ? 'text-white/10 scale-110' : 'text-white/5 group-hover:text-brand/20 group-hover:scale-105'}`}>
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        {!isActive && (
                          <h3 className="text-xl md:text-4xl font-display font-bold transition-all duration-500 group-hover:translate-x-6 uppercase tracking-tighter">
                            {cat.title}
                          </h3>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.2 : 1 }}
                        className={`transition-colors duration-500 ${isActive ? 'text-brand' : 'text-white/20 group-hover:text-white'}`}
                      >
                        {isActive ? <ArrowUpRight size={48} strokeWidth={1.5} /> : <ArrowRight size={32} strokeWidth={1.5} />}
                      </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="mt-10"
                        >
                          <div className="max-w-3xl">
                            <motion.h3 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="h3-sub mb-6"
                            >
                              {cat.title}
                            </motion.h3>
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.6 }}
                              className="text-body font-light"
                            >
                              {cat.desc}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Workflow Section */}
      <section className="py-16 bg-ink border-y border-white/10 relative overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full grid grid-cols-6 md:grid-cols-12 gap-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-16 text-white relative z-10">
          <div className="relative z-10 mb-20 text-center">
            <Reveal>
              <h2 className="h2-section mb-6">
                Our <span className="text-brand">Workflow</span>
              </h2>
            </Reveal>
            <p className="text-white/40 max-text-width mx-auto text-body">
              From the first spark of an idea to the final polished frame, we guide your project through a meticulous three-phase journey.
            </p>
          </div>

          <div className="space-y-12 relative z-10">
            {/* Pre-Production */}
            <div className="border border-white/10 rounded-[3rem] p-8 md:p-12 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="h3-sub mb-6 text-brand">01. Pre-Production</h3>
                  <p className="text-body text-white/60 mb-8">
                    Before the cameras roll, the magic of video production begins with pre-production. This is where your ideas take shape, scripts are written, and plans are made.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/seed/pre1/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/pre2/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4">
                  {PRE_PRODUCTION.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1">{item.title}</h4>
                        <p className="text-small text-white/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Production */}
            <div className="border border-white/10 rounded-[3rem] p-8 md:p-12 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="order-2 lg:order-1 space-y-4">
                  {PRODUCTION.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/20 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1">{item.title}</h4>
                        <p className="text-small text-white/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="h3-sub mb-6 text-brand">02. Production</h3>
                  <p className="text-body text-white/60 mb-8">
                    The heart of video production lies in the production phase. This is where we turn your vision into reality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/seed/prod1/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/prod2/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Production */}
            <div className="border border-white/10 rounded-[3rem] p-8 md:p-12 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="h3-sub mb-6 text-brand">03. Post-Production</h3>
                  <p className="text-body text-white/60 mb-8">
                    The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/seed/post1/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/post2/600/400" className="rounded-2xl aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4">
                  {POST_PRODUCTION.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1">{item.title}</h4>
                        <p className="text-small text-white/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos variant="dark" />

      {/* FAQ Section */}
      <FAQ />

      {/* Marquee */}
      <div className="py-12 bg-ink overflow-hidden border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap items-center"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-4xl md:text-8xl font-display font-bold text-white/20 uppercase tracking-tighter">
                {item}
              </span>
              <div className="w-4 h-4 rounded-full bg-brand" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-ink text-white rounded-[4rem] p-8 md:p-16 text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          </div>
          
          <Reveal>
            <h2 className="h2-section mb-8">
              Not limited to video, <br/> we're your <span className="text-brand">creative comrades.</span>
            </h2>
          </Reveal>
          <p className="text-body text-white/60 mb-12 max-text-width mx-auto">
            Got questions, project ideas, or just want to say hi? We're all ears!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-white px-12 py-6 rounded-full nav-link shadow-2xl flex items-center gap-4 mx-auto"
          >
            Let's Collaborate
            <ArrowUpRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
