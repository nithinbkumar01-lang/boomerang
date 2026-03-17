import express from "express";
import { createServer as createViteServer } from "vite";

const PORT = 3000;

const PROJECTS = [
  { id: 1, url: "https://cdn.pixabay.com/video/2021/04/12/70796-537392700_large.mp4", title: "A Travel Vlog Adventure", client: "Sarah", category: "Reels" },
  { id: 2, url: "https://cdn.pixabay.com/video/2023/10/20/185785-876118331_large.mp4", title: "Automation : VFX", client: "Ecoscape Solutions", category: "Campaigns" },
  { id: 3, url: "https://cdn.pixabay.com/video/2022/01/18/104688-666878342_large.mp4", title: "Culinary Journeys", client: "FoodWonders", category: "AI Reels" },
  { id: 4, url: "https://cdn.pixabay.com/video/2021/09/01/87103-596486411_large.mp4", title: "EcoCharge Power Bank", client: "EcoGlow", category: "Podcasts" },
  { id: 5, url: "https://cdn.pixabay.com/video/2022/09/06/130353-747146524_large.mp4", title: "ElevateCorp Corporate Video", client: "ElevateCorp", category: "Events" },
  { id: 6, url: "https://cdn.pixabay.com/video/2021/08/10/84514-586419131_large.mp4", title: "Executive Insights", client: "TechVision Inc", category: "Podcasts" },
  { id: 7, url: "https://cdn.pixabay.com/video/2020/09/25/51130-464240742_large.mp4", title: "Fashion Brand Showcase", client: "Couture Creations", category: "Campaigns" },
  { id: 8, url: "https://cdn.pixabay.com/video/2023/04/12/158654-817294520_large.mp4", title: "GloTech Smart Home", client: "GloTech Electronics", category: "AI Reels" },
  { id: 9, url: "https://cdn.pixabay.com/video/2022/11/15/139045-771145321_large.mp4", title: "Healthy Living Expo 2023", client: "WellnessWorld Group", category: "Events" },
  { id: 10, url: "https://cdn.pixabay.com/video/2021/02/12/65432-517293452_large.mp4", title: "InnovateX Summit 2023", client: "Innovation Inc.", category: "Events" },
  { id: 11, url: "https://cdn.pixabay.com/video/2023/08/10/175432-853219452_large.mp4", title: "LearnTech Online Course Series", client: "LearnTech Academy", category: "Campaigns" },
  { id: 12, url: "https://cdn.pixabay.com/video/2021/05/10/73452-547293452_large.mp4", title: "Pixel Pioneers", client: "PixelPlay Studios", category: "AI Reels" },
  { id: 13, url: "https://cdn.pixabay.com/video/2022/03/10/110432-673219452_large.mp4", title: "Rising Tides", client: "Awareness Inc.", category: "Podcasts" },
  { id: 14, url: "https://cdn.pixabay.com/video/2023/01/10/145432-793219452_large.mp4", title: "Scape Solar Panel System", client: "Ecoscape Solutions", category: "Campaigns" },
  { id: 15, url: "https://cdn.pixabay.com/video/2021/11/10/95432-617293452_large.mp4", title: "Shaping Tomorrow, Today", client: "InnovateX", category: "Events" },
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
