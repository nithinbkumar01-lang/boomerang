import express from "express";
import { createServer as createViteServer } from "vite";

const PORT = process.env.PORT || 3000;

const PROJECTS = [
  { 
    id: 1, 
    url: "https://www.dropbox.com/scl/fi/3sxr7j2ikyi1gu095v8jv/Comapny-teaser.mp4?rlkey=5zlzxe16mx48ohifoqcwpc998&st=3nmvs1hb&raw=1", 
    title: "Company Teaser", 
    client: "indiqube", 
    category: "Reels",
    subtitle: "brand overview"
  },
  { 
    id: 2, 
    url: "https://www.dropbox.com/scl/fi/evja43q96av8luo0eet44/Indiqube-Premier-League-Teaser.mp4?rlkey=iubtj6lo7e9zi02fxjbtkskur&st=qj9wg9mz&raw=1", 
    title: "IPL Teaser", 
    client: "ipl", 
    category: "Campaigns",
    subtitle: "sports marketing"
  },
  { 
    id: 3, 
    url: "https://www.dropbox.com/scl/fi/3sxr7j2ikyi1gu095v8jv/Comapny-teaser.mp4?rlkey=5zlzxe16mx48ohifoqcwpc998&st=3nmvs1hb&raw=1", 
    title: "Corporate Narrative", 
    client: "wissen", 
    category: "Events",
    subtitle: "storytelling"
  },
  { 
    id: 4, 
    url: "https://www.dropbox.com/scl/fi/evja43q96av8luo0eet44/Indiqube-Premier-League-Teaser.mp4?rlkey=iubtj6lo7e9zi02fxjbtkskur&st=qj9wg9mz&raw=1", 
    title: "Event Highlights", 
    client: "right it", 
    category: "Events",
    subtitle: "live coverage"
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
