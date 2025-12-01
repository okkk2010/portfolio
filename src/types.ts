export type Project = {
  id: string;
  title: string;
  shortTitle?: string;
  summary: string;
  tagline: string;
  year: string;
  platform: string;
  url?: string;
  stack: string[];
  keywords: string[];
  problem: string;
  approach: string;
  result: string;
  learned: string;
  role: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export type Skill = {
  category: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  period: string;
  items: string[];
};
