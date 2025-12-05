import type { Project, Skill, TimelineItem } from "../types";

const API_BASE = (import.meta.env.VITE_API_BASE ?? "/api").replace(/\/$/, "");

async function fetchJSON<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

export const portfolioApi = {
  getProjects: () => fetchJSON<Project[]>("/projects"),
  getSkills: () => fetchJSON<Skill[]>("/skills"),
  getTimeline: () => fetchJSON<TimelineItem[]>("/timeline")
};
