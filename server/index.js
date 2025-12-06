import "dotenv/config";
import express from "express";
import { pool } from "./db.js";
import { fallbackProjects, fallbackSkills, fallbackTimeline } from "./fallbackData.js";

const app = express();
app.use(express.json());

// Allow simple CORS for dev use; proxy via Vite is recommended for production.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

const toArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter(Boolean);
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch (e) {
    return [];
  }
};

const dedupePrimitives = (arr) => [...new Set(arr.filter(Boolean))];

const dedupeLinks = (arr) => {
  const seen = new Set();
  return arr
    .filter((item) => item && typeof item === "object")
    .filter((item) => {
      const key = `${item.label ?? ""}::${item.href ?? ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

app.get("/api/projects", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `
        SELECT
          p.id,
          p.title,
          p.short_title AS shortTitle,
          p.tagline,
          p.year,
          p.platform,
          p.url,
          p.summary,
          p.problem,
          p.approach,
          p.result,
          p.learned,
          p.role,
          JSON_ARRAYAGG(ps.stack) AS stack,
          JSON_ARRAYAGG(pk.keyword) AS keywords,
          JSON_ARRAYAGG(JSON_OBJECT('label', pl.label, 'href', pl.href)) AS links
        FROM projects p
        LEFT JOIN project_stack ps ON ps.project_id = p.id
        LEFT JOIN project_keywords pk ON pk.project_id = p.id
        LEFT JOIN project_links pl ON pl.project_id = p.id
        GROUP BY p.id
        ORDER BY p.year DESC, p.id;
      `
    );

    const result = rows.map((row) => ({
      id: row.id,
      title: row.title,
      shortTitle: row.shortTitle ?? undefined,
      tagline: row.tagline ?? "",
      year: String(row.year ?? ""),
      platform: row.platform ?? "",
      url: row.url ?? undefined,
      stack: dedupePrimitives(toArray(row.stack)),
      keywords: dedupePrimitives(toArray(row.keywords)),
      summary: row.summary ?? "",
      problem: row.problem ?? "",
      approach: row.approach ?? "",
      result: row.result ?? "",
      learned: row.learned ?? "",
      role: row.role ?? "",
      links: dedupeLinks(toArray(row.links))
    }));

    return res.json(result.length ? result : fallbackProjects);
  } catch (error) {
    console.error("Failed to fetch projects from DB:", error.message);
    return res.json(fallbackProjects);
  }
});

app.get("/api/skills", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `
        SELECT
          sc.id,
          sc.category,
          JSON_ARRAYAGG(si.item) AS items
        FROM skill_categories sc
        LEFT JOIN skill_items si ON si.category_id = sc.id
        GROUP BY sc.id
        ORDER BY sc.id;
      `
    );

    const result = rows.map((row) => ({
      category: row.category,
      items: toArray(row.items)
    }));

    return res.json(result.length ? result : fallbackSkills);
  } catch (error) {
    console.error("Failed to fetch skills from DB:", error.message);
    return res.json(fallbackSkills);
  }
});

app.get("/api/timeline", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `
        SELECT
          tg.id,
          tg.title,
          tg.period,
          JSON_ARRAYAGG(ti.detail) AS items
        FROM timeline_groups tg
        LEFT JOIN timeline_items ti ON ti.group_id = tg.id
        GROUP BY tg.id
        ORDER BY tg.period DESC, tg.id DESC;
      `
    );

    const result = rows.map((row) => ({
      title: row.title,
      period: row.period,
      items: toArray(row.items)
    }));

    return res.json(result.length ? result : fallbackTimeline);
  } catch (error) {
    console.error("Failed to fetch timeline from DB:", error.message);
    return res.json(fallbackTimeline);
  }
});

const PORT = process.env.API_PORT || 8787;

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}/api`);
});
