import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";
import { ArrowLeft, Star } from "lucide-react";
import SEO from "../components/SEO";

const PROJECTS_DATA: Record<string, any> = {
  "10": {
    title: "Nutrient-Rich Pulses",
    client: "Biriyani Zest",
    year: "2024",
    services: "Social Media Production",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762167/Trusted_since_1989_Serving_7_states_and_15k_families_with_farm-fresh_Nutrient-Rich_Pulses.Vi_hg5oq4.mp4",
    description: "A high-impact reel highlighting Biriyani Zest's legacy since 1989. We focused on the farm-to-table journey of their nutrient-rich pulses, serving over 15k families across 7 states.",
    scope: [
      "Visual Storytelling: Capturing the heritage and scale of operations.",
      "Cinematography: Macro shots of pulses to emphasize quality.",
      "Editing: Fast-paced transitions to maintain viewer engagement.",
      "Sound Design: Rhythmic beats synced with visual cuts."
    ],
    gallery: [
      "https://picsum.photos/seed/pulses1/1200/800",
      "https://picsum.photos/seed/pulses2/1200/800",
      "https://picsum.photos/seed/pulses3/1200/800"
    ],
    testimonial: "The pulses reel perfectly captured our brand's essence and long-standing trust. The response has been phenomenal.",
    author: "Marketing Head, Biriyani Zest"
  },
  "11": {
    title: "Exploring Bangalore",
    client: "Biriyani Zest",
    year: "2024",
    services: "Influencer Collaboration",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762177/She_came_exploring_one_of_the_most_talked-about_places_in_Bangalore_and_now_we_re_talking_about_x5gv0o.mp4",
    description: "Capturing the buzz of Bangalore's food scene. This reel follows a popular explorer visiting one of the city's most talked-about spots, creating instant viral potential.",
    scope: [
      "On-Location Filming: Capturing the authentic atmosphere of the venue.",
      "Influencer Direction: Ensuring the narrative aligns with brand values.",
      "Post-Production: Trendy color grading and dynamic text overlays.",
      "Engagement Strategy: Optimized for discovery on Instagram."
    ],
    gallery: [
      "https://picsum.photos/seed/blr1/1200/800",
      "https://picsum.photos/seed/blr2/1200/800",
      "https://picsum.photos/seed/blr3/1200/800"
    ],
    testimonial: "This reel brought a massive influx of new customers. The storytelling was spot on.",
    author: "Store Manager, Biriyani Zest"
  },
  "12": {
    title: "Penguin AI",
    client: "Biriyani Zest",
    year: "2024",
    services: "AI Creative Production",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662429/Even_a_penguin_ordered_biryani_Now_it_s_your_turn_Order_your_biryani_from_Biryani_Zest_A_ms2sgu.mp4",
    description: "A quirky and creative AI-driven campaign featuring a penguin ordering biryani. This project pushed the boundaries of traditional food marketing with a touch of humor and tech.",
    scope: [
      "AI Integration: Using generative tools for unique character animation.",
      "Concept Design: Crafting a surreal yet relatable narrative.",
      "Sound Design: Playful audio elements to complement the visuals.",
      "Viral Optimization: Designed to stand out in a crowded feed."
    ],
    gallery: [
      "https://picsum.photos/seed/penguin1/1200/800",
      "https://picsum.photos/seed/penguin2/1200/800",
      "https://picsum.photos/seed/penguin3/1200/800"
    ],
    testimonial: "The penguin reel was a masterstroke of creativity. It's our most shared content to date.",
    author: "Digital Lead, Biriyani Zest"
  },
  "13": {
    title: "Trump Greenland",
    client: "Scale Socials",
    year: "2024",
    services: "Satirical Content",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775563219/Trump-_I_d_like_to_buy_Greenland._The_world-_Wait_what_Who_knew_real_estate_could_ge_zzyjan.mp4",
    description: "A satirical take on global real estate, focusing on the infamous 'buying Greenland' narrative. We used dynamic editing and sharp commentary to drive engagement.",
    scope: [
      "Scriptwriting: Crafting sharp, satirical dialogue.",
      "Visual Research: Sourcing relevant archival and stock footage.",
      "Editing: Fast-paced, meme-style editing for maximum impact.",
      "Audio Mastering: Ensuring clear voiceovers and impactful music."
    ],
    gallery: [
      "https://picsum.photos/seed/trump1/1200/800",
      "https://picsum.photos/seed/trump2/1200/800",
      "https://picsum.photos/seed/trump3/1200/800"
    ],
    testimonial: "Scale Socials knows how to hit the right chord with trending topics. This reel was a hit.",
    author: "Content Strategist, Scale Socials"
  },
  "14": {
    title: "Swish Delivery",
    client: "Scale Socials",
    year: "2024",
    services: "Tech Showcase",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775563218/10_minutes._Bangalore_traffic._How_Swish_is_changing_the_game_with_smart_kitchens_and_AI_mak_afywvp.mp4",
    description: "Highlighting how Swish is beating Bangalore traffic with 10-minute deliveries using smart kitchens and AI. A fast-paced look at the future of food tech.",
    scope: [
      "Tech Visualization: Explaining smart kitchen concepts through visuals.",
      "On-Location Filming: Capturing the hustle of Bangalore traffic.",
      "Motion Graphics: Overlaying data points and delivery times.",
      "Sound Design: High-energy tracks to match the delivery speed."
    ],
    gallery: [
      "https://picsum.photos/seed/swish1/1200/800",
      "https://picsum.photos/seed/swish2/1200/800",
      "https://picsum.photos/seed/swish3/1200/800"
    ],
    testimonial: "The Swish reel perfectly explained our complex tech in a simple, engaging way.",
    author: "Founder, Swish"
  },
  "15": {
    title: "Moong Dal Masala",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Product Launch",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662440/Crispy._Flavorful._Purely_Homemade.Whether_it_s_tea-time_or_a_festive_treat_Moong_Dal_Masala_hbcwto.mp4",
    description: "Launching the crispy and flavorful Moong Dal Masala. We focused on the 'purely homemade' aspect, making it the perfect tea-time or festive treat.",
    scope: [
      "Product Cinematography: Slow-motion shots of the crispy dal.",
      "Set Design: Creating a warm, home-like atmosphere.",
      "Color Grading: Enhancing the natural golden hues of the product.",
      "Sound Design: Crisp, crunchy audio to emphasize texture."
    ],
    gallery: [
      "https://picsum.photos/seed/moong1/1200/800",
      "https://picsum.photos/seed/moong2/1200/800",
      "https://picsum.photos/seed/moong3/1200/800"
    ],
    testimonial: "The launch reel was exactly what we needed to introduce our new product to the market.",
    author: "Director, Vijaylaxmi"
  },
  "16": {
    title: "Uttarakhand Dal Curry",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Recipe Showcase",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662435/An_authentic_Uttarakhand-style_dal_curry_prepared_in_traditional_way_This_traditional_dal_curry_yvrez8.mp4",
    description: "An authentic look at traditional Uttarakhand-style dal curry. We captured the traditional preparation methods to highlight the purity of Vijaylaxmi ingredients.",
    scope: [
      "Cultural Research: Ensuring authentic representation of the recipe.",
      "Production: Using natural lighting to enhance the traditional feel.",
      "Editing: Seamlessly blending the cooking process steps.",
      "Audio: Traditional background score to complement the theme."
    ],
    gallery: [
      "https://picsum.photos/seed/ukdal1/1200/800",
      "https://picsum.photos/seed/ukdal2/1200/800",
      "https://picsum.photos/seed/ukdal3/1200/800"
    ],
    testimonial: "This reel resonated deeply with our audience who value tradition and authenticity.",
    author: "Brand Manager, Vijaylaxmi"
  },
  "17": {
    title: "Kerala Kadala Curry",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Recipe Showcase",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662434/Let_s_make_creamy_Kerala-style_Kadala_Curry_Ingredients_you_ll_need-_1_cup_Vijayalakshmi_Dee_tp3x3g.mp4",
    description: "A step-by-step guide to making creamy Kerala-style Kadala Curry using Vijaylaxmi ingredients. A visual treat for food lovers.",
    scope: [
      "Food Styling: Ensuring the dish looks appetizing and authentic.",
      "Instructional Design: Clear, easy-to-follow recipe steps.",
      "Cinematography: Close-up shots of spices and textures.",
      "Post-Production: Vibrant color palette to reflect Kerala's flavors."
    ],
    gallery: [
      "https://picsum.photos/seed/kerala1/1200/800",
      "https://picsum.photos/seed/kerala2/1200/800",
      "https://picsum.photos/seed/kerala3/1200/800"
    ],
    testimonial: "The recipe reels have become a staple for our community. Great production value.",
    author: "Marketing Team, Vijaylaxmi"
  },
  "18": {
    title: "Farm-Fresh Pulses",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Brand Story",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662428/Trusted_since_1989_Serving_7_states_and_15k_families_with_farm-fresh_Nutrient-Rich_Pulses.Vi_rdv3z4.mp4",
    description: "Showcasing the legacy of Vijaylaxmi pulses, trusted since 1989. We highlighted the farm-fresh quality that reaches 15k families across 7 states.",
    scope: [
      "Legacy Storytelling: Weaving 35 years of trust into a 60-second reel.",
      "Visual Documentation: Capturing the scale of distribution.",
      "Editing: Emotional narrative arc combined with product shots.",
      "Sound Design: Trust-inspiring background score."
    ],
    gallery: [
      "https://picsum.photos/seed/vjpulses1/1200/800",
      "https://picsum.photos/seed/vjpulses2/1200/800",
      "https://picsum.photos/seed/vjpulses3/1200/800"
    ],
    testimonial: "A beautiful tribute to our journey. It really connects with our long-term customers.",
    author: "CEO, Vijaylaxmi"
  },
  "19": {
    title: "Gowri Ganesha Festival",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Festive Content",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662424/Ganpati_Bappa_Morya_HAPPY_GOWRI_GANESHA_FESTIVALCelebrate_this_Ganesh_Chaturthi_with_purity_ratxfh.mp4",
    description: "Celebrating the Gowri Ganesha festival with the purity of Vijaylaxmi. A festive greetings reel that resonates with cultural values.",
    scope: [
      "Festive Styling: Creating a vibrant, celebratory set.",
      "Cinematography: Capturing the intricate details of the festival.",
      "Post-Production: Warm, festive color grading.",
      "Audio: Devotional and celebratory soundscapes."
    ],
    gallery: [
      "https://picsum.photos/seed/ganesha1/1200/800",
      "https://picsum.photos/seed/ganesha2/1200/800",
      "https://picsum.photos/seed/ganesha3/1200/800"
    ],
    testimonial: "The festive reel was shared widely, helping us stay connected with our audience during the holidays.",
    author: "Social Media Manager, Vijaylaxmi"
  },
  "20": {
    title: "Authentic Batter",
    client: "Vijaylaxmi",
    year: "2024",
    services: "Product Showcase",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662423/Authentic_Taste_Starts_with_the_Right_IngredientsFrom_soft_Idlis_crispy_Dosas_to_golden_Vadas_oxpgo9.mp4",
    description: "From soft idlis to crispy dosas, this reel showcases the versatility of Vijaylaxmi batter, emphasizing that authentic taste starts with the right ingredients.",
    scope: [
      "Food Cinematography: Capturing the perfect texture of idlis and dosas.",
      "Visual Pacing: Matching the cooking process with upbeat music.",
      "Color Grading: Making the food look vibrant and appetizing.",
      "Sound Design: Sizzling sounds of the dosa tawa for sensory appeal."
    ],
    gallery: [
      "https://picsum.photos/seed/batter1/1200/800",
      "https://picsum.photos/seed/batter2/1200/800",
      "https://picsum.photos/seed/batter3/1200/800"
    ],
    testimonial: "Our batter sales saw a significant jump after this reel went live. The visuals were mouth-watering.",
    author: "Sales Head, Vijaylaxmi"
  },
  "21": {
    title: "Nature's Purity",
    client: "Vanatva",
    year: "2024",
    services: "Brand Narrative",
    category: "Reels",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662426/Rooted_in_tradition._Crafted_with_care._Vanatva_brings_nature_s_purity_straight_to_your_kitche_j8d8af.mp4",
    description: "Vanatva brings nature's purity straight to your kitchen. We captured the essence of tradition and care that goes into every Vanatva product.",
    scope: [
      "Nature Cinematography: Capturing the raw beauty of ingredients.",
      "Brand Storytelling: Emphasizing the 'rooted in tradition' philosophy.",
      "Post-Production: Natural, earthy color palette.",
      "Audio: Serene and organic soundscapes."
    ],
    gallery: [
      "https://picsum.photos/seed/vanatva1/1200/800",
      "https://picsum.photos/seed/vanatva2/1200/800",
      "https://picsum.photos/seed/vanatva3/1200/800"
    ],
    testimonial: "Vanatva's brand identity was beautifully brought to life through this reel.",
    author: "Founder, Vanatva"
  },
  "22": {
    title: "Ashish Vidyarthi Meet",
    client: "Biriyani Zest",
    year: "2024",
    services: "Celebrity Campaign",
    category: "Campaigns",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762170/When_Ashish_Vidyarthi_Met_Biryani_Zest_%EF%B8%8F_From_the_silver_screen_to_our_spice_scene_%EF%B8%8FWe_ha_le9njn.mp4",
    description: "When the silver screen meets the spice scene. A high-profile campaign featuring Ashish Vidyarthi exploring the flavors of Biriyani Zest.",
    scope: [
      "Celebrity Management: Coordinating with Ashish Vidyarthi's team.",
      "Production: High-end multi-camera setup for the meet-and-greet.",
      "Post-Production: Cinematic editing with a focus on storytelling.",
      "Marketing Strategy: Integrated campaign across all social channels."
    ],
    gallery: [
      "https://picsum.photos/seed/ashish1/1200/800",
      "https://picsum.photos/seed/ashish2/1200/800",
      "https://picsum.photos/seed/ashish3/1200/800"
    ],
    testimonial: "Having Ashish Vidyarthi on board was a huge win, and Boomerang captured the collaboration perfectly.",
    author: "CEO, Biriyani Zest"
  },
  "23": {
    title: "Premier League Teaser",
    client: "Indiqube",
    year: "2024",
    services: "Event Promotion",
    category: "Events",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1774452821/Indiqube_Premier_League_Teaser_jdrpoz.mp4",
    description: "The official teaser for the Indiqube Premier League 2024. A high-energy sports teaser designed to build excitement for the upcoming tournament.",
    scope: [
      "Sports Cinematography: Capturing the intensity of the game.",
      "Motion Graphics: Dynamic player stats and tournament info.",
      "Editing: Fast-cut, rhythmic editing to match the sports theme.",
      "Sound Design: Stadium-like audio atmosphere."
    ],
    gallery: [
      "https://picsum.photos/seed/ipl1/1200/800",
      "https://picsum.photos/seed/ipl2/1200/800",
      "https://picsum.photos/seed/ipl3/1200/800"
    ],
    testimonial: "The teaser set the perfect tone for the tournament. Participation was at an all-time high.",
    author: "Events Head, Indiqube"
  },
  "24": {
    title: "Comedy Show",
    client: "Indiqube",
    year: "2024",
    services: "Event Coverage",
    category: "Events",
    video: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775561706/Indiqube_Comedy_Show_o2pueh.mp4",
    description: "Capturing the laughter and energy of the Indiqube Comedy Show. A highlight reel featuring the best moments from the live performance.",
    scope: [
      "Live Event Filming: Capturing audience reactions and performer sets.",
      "Audio Recording: Ensuring high-quality sound for the comedy sets.",
      "Editing: Blending the best punchlines with crowd laughter.",
      "Color Grading: Vibrant, stage-lighting optimized palette."
    ],
    gallery: [
      "https://picsum.photos/seed/comedy1/1200/800",
      "https://picsum.photos/seed/comedy2/1200/800",
      "https://picsum.photos/seed/comedy3/1200/800"
    ],
    testimonial: "The highlight reel perfectly captured the vibe of the night. Everyone loved it.",
    author: "Community Manager, Indiqube"
  },
  "5": {
    title: "The Future of AI",
    client: "Podcast Series",
    year: "2024",
    services: "Podcast Production",
    category: "Podcasts",
    video: "https://www.youtube.com/embed/3yMeYZvPAKU",
    description: "A deep dive into the rapidly evolving world of Artificial Intelligence. We explored the ethical implications, technological breakthroughs, and the future of human-AI collaboration.",
    scope: [
      "Content Strategy: Identifying key topics and guest experts.",
      "Production: High-quality audio and video recording in a studio setting.",
      "Post-Production: Multi-camera editing with dynamic graphics.",
      "Distribution: Optimized for YouTube and podcast platforms."
    ],
    gallery: [
      "https://img.youtube.com/vi/3yMeYZvPAKU/maxresdefault.jpg",
      "https://picsum.photos/seed/ai1/1200/800",
      "https://picsum.photos/seed/ai2/1200/800"
    ],
    testimonial: "The production quality of this podcast series is outstanding. It has significantly boosted our brand authority in the tech space.",
    author: "Dr. Alan Turing, AI Researcher"
  },
  "6": {
    title: "Creative Minds",
    client: "Podcast Series",
    year: "2024",
    services: "Podcast Production",
    category: "Podcasts",
    video: "https://www.youtube.com/embed/AwrFToh1a80",
    description: "Inspiration from the world's most creative thinkers. This series explores the creative process, overcoming blocks, and the intersection of art and technology.",
    scope: [
      "Narrative Arc: Crafting engaging conversations that inspire.",
      "Visual Identity: Custom set design and lighting for a premium look.",
      "Editing: Seamlessly blending multiple angles for a cinematic feel.",
      "Sound Design: Professional audio mastering for crystal-clear dialogue."
    ],
    gallery: [
      "https://img.youtube.com/vi/AwrFToh1a80/maxresdefault.jpg",
      "https://picsum.photos/seed/creative1/1200/800",
      "https://picsum.photos/seed/creative2/1200/800"
    ],
    testimonial: "Working with Boomerang was a breeze. They understood our vision and delivered a product that exceeded our expectations.",
    author: "Jane Doe, Creative Director"
  },
  "7": {
    title: "Digital Trends",
    client: "Podcast Series",
    year: "2024",
    services: "Podcast Production",
    category: "Podcasts",
    video: "https://www.youtube.com/embed/9_ci3nlYPhk",
    description: "Staying ahead of the curve in the digital landscape. We discuss the latest trends in social media, digital marketing, and the creator economy.",
    scope: [
      "Trend Analysis: Researching the most relevant topics for our audience.",
      "Production: Fast-turnaround recording and editing.",
      "Graphics: Dynamic on-screen elements to highlight key points.",
      "Engagement: Optimized for social media sharing and interaction."
    ],
    gallery: [
      "https://img.youtube.com/vi/9_ci3nlYPhk/maxresdefault.jpg",
      "https://picsum.photos/seed/digital1/1200/800",
      "https://picsum.photos/seed/digital2/1200/800"
    ],
    testimonial: "The 'Digital Trends' series has become a go-to resource for our community. The production value is top-notch.",
    author: "John Smith, Marketing Expert"
  }
};

// Fallback for other IDs
const DEFAULT_PROJECT = {
  title: "Executive Insights",
  client: "TechVision Inc.",
  year: "2021",
  services: "Post Production",
  category: "Interview",
  video: "https://cdn.pixabay.com/video/2021/04/12/70796-537392700_large.mp4",
  description: "TechVision Inc. sought to create a series of engaging interview videos featuring their top executives and thought leaders in the tech industry. The goal was to showcase their expertise, vision, and thought leadership while offering valuable insights into the future of technology and innovation.",
  scope: [
    "Concept Development: Crafting a concept that highlights the thought leadership and expertise of TechVision's executives, selecting topics, and defining the series structure.",
    "Pre-Production: Identifying interview subjects, scripting interview questions, and selecting a suitable location for filming.",
    "Production: Filming in a professional studio setting, capturing high-quality video and audio of the interviews.",
    "Post-Production: Editing, color grading, adding graphics, and creating a cohesive and visually appealing series.",
    "Distribution: Sharing the interview videos on TechVision's website, social media platforms, and industry-specific websites and forums."
  ],
  gallery: [
    "https://picsum.photos/seed/proj1/1200/800",
    "https://picsum.photos/seed/proj2/1200/800",
    "https://picsum.photos/seed/proj3/1200/800"
  ],
  testimonial: "Working with Boomerang to produce our 'Executive Insights' interview series has been an exceptional experience. The professionalism, quality of production, and attention to detail were impressive. The videos have allowed us to showcase our thought leadership and vision in the tech industry, and we've received positive feedback from our peers and clients alike. We look forward to continuing our partnership for more insightful content.",
  author: "Jennifer Park, Chief Technology Officer"
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DATA[id || ""] || DEFAULT_PROJECT;

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <SEO 
        title={`${project.title} | Projects`}
        description={project.description}
        image={project.gallery[0]}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/60 hover:text-brand transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest">Back to Projects</span>
        </button>

        {/* Title */}
        <Reveal>
          <h1 className="h1-display mb-16">
            {project.title}
          </h1>
        </Reveal>

        {/* Hero Video */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`${
            project.category === "Reels" || project.category === "AI Reels"
              ? "max-w-[400px] mx-auto aspect-[9/16]" 
              : "aspect-video"
          } bg-neutral-900 rounded-3xl overflow-hidden mb-24 shadow-2xl border border-white/10`}
        >
          {project.video.includes("youtube.com") || project.video.includes("youtu.be") || project.video.includes("instagram.com") ? (
            <iframe 
              src={project.video.includes("instagram.com") ? `${project.video.split('?')[0]}embed` : project.video} 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title={project.title}
            />
          ) : (
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-body text-white/80">
                {project.description}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand block mb-2">[Client]</span>
              <span className="text-body font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand block mb-2">[Year]</span>
              <span className="text-body font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand block mb-2">[Services]</span>
              <span className="text-body font-medium">{project.services}</span>
            </div>
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand block mb-2">[Category]</span>
              <span className="text-body font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Secondary Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="aspect-[21/9] bg-neutral-900 rounded-3xl overflow-hidden mb-32 shadow-2xl border border-white/10"
        >
          <img 
            src={project.gallery[0]} 
            alt="Project detail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Detailed Scope */}
        <div className="max-w-4xl mb-32">
          <Reveal>
            <h2 className="h3-sub mb-12">Project Scope</h2>
          </Reveal>
          <div className="space-y-8">
            {project.scope.map((item: string, i: number) => {
              const [title, desc] = item.split(": ");
              return (
                <div key={i}>
                  <Reveal delay={i * 0.1}>
                    <div className="border-l border-brand pl-6">
                      <h3 className="text-lg font-bold mb-2">{title}</h3>
                      <p className="text-white/60 text-body">{desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-32">
          <Reveal>
            <h2 className="h3-sub mb-16 text-center">Snaps From the Project</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img: string, i: number) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="flex justify-center gap-1 text-brand mb-8">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <Reveal>
            <blockquote className="h3-sub text-white mb-12">
              "{project.testimonial}"
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <cite className="text-brand font-sans text-[11px] font-bold uppercase tracking-widest not-italic">
              — {project.author}
            </cite>
          </Reveal>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/20 to-transparent pointer-events-none" />
          <Reveal>
            <h2 className="h2-section mb-8 relative z-10">
              Not limited to video,<br />
              we're your creative comrades.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-body mb-12 relative z-10">Got questions, project ideas, or just want to say hi? We're all ears!</p>
          </Reveal>
          <Reveal delay={0.3}>
            <button className="bg-brand text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10">
              Let's Collaborate
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
