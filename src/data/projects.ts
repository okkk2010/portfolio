import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "oculo",
    title: "Motion Sickness Prevention Program (Oculo)",
    shortTitle: "Oculo",
    tagline: "Windows overlay utility to reduce 3D game motion sickness",
    year: "2024",
    platform: "Windows Desktop (.NET)",
    url: "https://github.com/okkk2010/motion-sickness-prevention-program/releases",
    stack: [".NET", "C#", "Windows Forms / WPF", "Low-level Overlay"],
    keywords: ["Motion sickness reduction", "Overlay", "TopMost handling", "Hotkey"],
    summary:
      "Windows utility that shows a customizable overlay UI on top of the game screen to reduce motion sickness.",
    problem:
      "Many players feel motion sickness in 3D games, and existing overlays often lose focus or block input in fullscreen/windowed modes.",
    approach:
      "Designed Overlay Manager and Preset flow to load game-specific overlays, keeping game focus via TopMost handling and cursor area separation.",
    result:
      "Secured 95%+ overlay compatibility across major games (fullscreen/windowed) and quickly iterated with a customizable structure.",
    learned:
      "Learned stable TopMost handling without colliding with render loops, and how to separate input hooks/settings for reliability.",
    role:
      "Owned overlay window control, game window detection/focus sync, and preset/settings architecture and development.",
    links: [
      { label: "Architecture Note", href: "#" },
      { label: "Demo Video", href: "#" }
    ]
  },
  {
    id: "coin-project",
    title: "Coin Project (2D Economy Sim + Game Events)",
    shortTitle: "Coin Project",
    tagline: "2D game combining virtual economy systems and news/events",
    year: "2023",
    platform: "Mobile (Unity 2D)",
    url: "https://play.google.com/store/apps/details?id=com.HSM.CoinProject&pcampaignid=web_share",
    stack: ["Unity", "C#", "2D UI/UX", "Game events/news system"],
    keywords: ["Economic fluctuation", "Event system", "Chart UI", "Tutorial"],
    summary:
      "2D game that combines a stock/coin-like economy with news events so players manage assets and experience price changes.",
    problem:
      "Random economic events caused unstable UX and balancing took too long.",
    approach:
      "Defined an event→indicator→price change pipeline and clarified feedback with chart/info UI and tutorial; separated resources/code for uploads.",
    result:
      "Player drop-off time increased by 25% vs. initial build and perceived volatility variance dropped by 40%+.",
    learned:
      "Learned that information structure matters more than charts in game UX, and a clear event pipeline cuts balance iteration cost.",
    role:
      "Owned economy logic, event system design/implementation, chart UI/tutorial flow, and store release/operations.",
    links: [{ label: "Design Note", href: "#" }]
  },
  {
    id: "tbd",
    title: "+@ Coming Soon",
    tagline: "Expandable card slot for upcoming projects",
    year: "2025",
    platform: "Web / IoT / AI",
    stack: ["Next step", "In progress"],
    keywords: ["Scalability", "Placeholder"],
    summary:
      "Template prepared so adding a new project only needs minimal data/card additions.",
    problem: "Data structure and UI must scale consistently when new projects are added.",
    approach: "Separated project meta as JSON and built cards/modals data-driven.",
    result: "Cards render and modals open automatically when data is added.",
    learned: "Data-driven UI design eases collaboration and expansion.",
    role: "Template memo/history in progress"
  }
];
