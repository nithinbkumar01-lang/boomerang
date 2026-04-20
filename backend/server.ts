import express from "express";
import { createServer as createViteServer } from "vite";

const PORT = process.env.PORT || 3000;

const PROJECTS = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762167/Trusted_since_1989_Serving_7_states_and_15k_families_with_farm-fresh_Nutrient-Rich_Pulses.Vi_hg5oq4.mp4",
    title: "Nutrient-Rich Pulses",
    client: "Biriyani Zest",
    category: "Reels",
    subtitle: "Trusted since 1989",
    badge: "social",
    aspect: "vertical"
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762177/She_came_exploring_one_of_the_most_talked-about_places_in_Bangalore_and_now_we_re_talking_about_x5gv0o.mp4",
    title: "Exploring Bangalore",
    client: "Biriyani Zest",
    category: "Reels",
    subtitle: "Cultural Discovery",
    badge: "social",
    aspect: "vertical"
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775563219/Trump-_I_d_like_to_buy_Greenland._The_world-_Wait_what_Who_knew_real_estate_could_ge_zzyjan.mp4",
    title: "Trump Greenland",
    client: "Scale Socials",
    category: "Reels",
    subtitle: "Real Estate Satire",
    badge: "viral",
    aspect: "vertical"
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662435/An_authentic_Uttarakhand-style_dal_curry_prepared_in_traditional_way_This_traditional_dal_curry_yvrez8.mp4",
    title: "Uttarakhand Dal Curry",
    client: "Vijayalakshmi",
    category: "Reels",
    subtitle: "Traditional Cooking",
    badge: "authentic",
    aspect: "vertical"
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662423/Authentic_Taste_Starts_with_the_Right_IngredientsFrom_soft_Idlis_crispy_Dosas_to_golden_Vadas_oxpgo9.mp4",
    title: "Authentic Ingredients",
    client: "Vijayalakshmi",
    category: "Reels",
    subtitle: "South Indian Taste",
    badge: "social",
    aspect: "vertical"
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775662429/Even_a_penguin_ordered_biryani_Now_it_s_your_turn_Order_your_biryani_from_Biryani_Zest_A_ms2sgu.mp4",
    title: "Penguin AI Biriyani",
    client: "Biriyani Zest",
    category: "Reels",
    subtitle: "Creative Campaign",
    badge: "creative",
    aspect: "vertical"
  },
  {
    id: 22,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1773762170/When_Ashish_Vidyarthi_Met_Biryani_Zest_%EF%B8%8F_From_the_silver_screen_to_our_spice_scene_%EF%B8%8FWe_ha_le9njn.mp4",
    title: "Ashish Vidyarthi Meet",
    client: "Biriyani Zest",
    category: "Campaigns",
    subtitle: "Celebrity Collaboration",
    aspect: "horizontal"
  },
  {
    id: 23,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1774452821/Indiqube_Premier_League_Teaser_jdrpoz.mp4",
    title: "Premier League Teaser",
    client: "Indiqube",
    category: "Events",
    subtitle: "IPL 2024",
    aspect: "vertical"
  },
  {
    id: 24,
    url: "https://res.cloudinary.com/dofg6bsom/video/upload/v1775561706/Indiqube_Comedy_Show_o2pueh.mp4",
    title: "Comedy Show",
    client: "Indiqube",
    category: "Events",
    subtitle: "Live Entertainment",
    aspect: "vertical"
  }
];

async function startServer() {
  const app = express();

  // API Routes
  app.get("/api/projects", (req, res) => {
    res.json(PROJECTS);
  });

  app.get("/api/projects/short", (req, res) => {
    const shortProjects = PROJECTS.filter(p => p.category === "Reels" || p.category === "AI Reels");
    res.json(shortProjects);
  });

  app.get("/api/projects/long", (req, res) => {
    const longProjects = PROJECTS.filter(p => p.category === "Campaigns" || p.category === "Events" || p.category === "Podcasts");
    res.json(longProjects);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      root: "frontend",
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("frontend/dist"));
    app.get("*", (req, res) => {
      res.sendFile("frontend/dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
