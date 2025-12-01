import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query (필요 시)"]
  },
  {
    category: "Backend / DevOps",
    items: ["Node.js", "Express", "MySQL", "Socket.IO", "WebSocket", "AWS EC2 / S3"]
  },
  {
    category: "Game / Desktop",
    items: ["Unity (2D)", ".NET (C#)", "Windows Forms / WPF", "Overlay / Hook"]
  },
  {
    category: "Collaboration",
    items: ["Git", "Figma", "Notion"]
  },
  {
    category: "Principles",
    items: ["데이터 주도 UI", "문제-접근-결과 구조화", "모바일 퍼스트 레이아웃"]
  }
];
