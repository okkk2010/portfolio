// Local fallback data used when DB is unavailable.

export const fallbackProjects = [
  {
    id: "oculo",
    title: "멀미 방지 프로그램 (Oculo)",
    shortTitle: "Oculo",
    tagline: "3D 게임 멀미를 줄이는 Windows 오버레이 유틸리티",
    year: 2024,
    platform: "Windows Desktop (.NET)",
    url: "https://github.com/okkk2010/motion-sickness-prevention-program/releases",
    stack: [".NET", "C#", "Windows Forms / WPF", "Low-level Overlay"],
    keywords: ["멀미감소", "오버레이", "TopMost 처리", "핫키"],
    summary:
      "게임 화면 위에 커스터마이징 가능한 오버레이 UI를 띄워 멀미감을 줄여주는 Windows 유틸리티.",
    problem:
      "3D 게임에서 멀미를 느끼는 사용자가 많고, 기존 오버레이들은 전체화면/창 모드에서 포커스가 어긋나거나 입력이 막히는 문제가 있었다.",
    approach:
      "Overlay Manager·Preset 구조로 게임별 오버레이를 불러오고, TopMost 처리와 커서 영역 분리로 게임 포커스를 유지하도록 설계.",
    result:
      "주요 게임(전체화면/창 모드)에서 오버레이 호환성을 95% 이상 확보했고, 커스터마이징 구조 덕분에 피드백을 빠르게 반영했다.",
    learned:
      "TopMost 처리와 게임 렌더 루프 충돌을 피하는 방식, 입력 훅/설정 분리로 안정성을 높이는 설계를 체득했다.",
    role:
      "오버레이 윈도우 제어, 게임 창 탐지/포커스 연동, 프리셋·설정 구조 설계 및 개발 전담.",
    links: [
      { label: "Architecture Note", href: "#" },
      { label: "Demo Video", href: "#" }
    ]
  },
  {
    id: "coin-project",
    title: "Coin Project (2D 경제 시뮬 + 게임 이벤트)",
    shortTitle: "Coin Project",
    tagline: "가상 경제 시스템과 이벤트를 결합한 2D 게임",
    year: 2023,
    platform: "Mobile (Unity 2D)",
    url: "https://play.google.com/store/apps/details?id=com.HSM.CoinProject&pcampaignid=web_share",
    stack: ["Unity", "C#", "2D UI/UX", "게임 이벤트/뉴스 시스템"],
    keywords: ["경제 변동", "이벤트 시스템", "차트 UI", "튜토리얼"],
    summary:
      "주식/코인 감성 경제 시스템과 뉴스 이벤트를 결합한 2D 게임으로, 플레이어가 자산을 운용하고 가격 변동을 경험한다.",
    problem:
      "경제 이벤트가 무작위로 발생하며 UX가 불안정했고, 밸런스 조정에 시간이 많이 들었다.",
    approach:
      "이벤트→지표→가격 변동 파이프라인을 정의하고, 차트/정보 UI·튜토리얼로 피드백을 명확하게 설계. 업로드를 위해 리소스/코드를 분리했다.",
    result:
      "초기 빌드 대비 플레이어 이탈 시간이 25% 늘었고, 변동성 체감 편차를 40% 이상 줄였다.",
    learned:
      "게임 UX에서는 차트보다 정보 구조가 중요하며, 이벤트 파이프라인을 명확히 하면 밸런스 반복 비용이 줄어든다는 점을 학습.",
    role:
      "경제 로직·이벤트 시스템 설계/구현, 차트 UI·튜토리얼 흐름 설계, 스토어 배포/운영 대응을 담당.",
    links: [{ label: "Design Note", href: "#" }]
  },
  {
    id: "tbd",
    title: "+@ Coming Soon",
    tagline: "추가 프로젝트를 위해 확장 가능한 카드 자리",
    year: 2025,
    platform: "Web / IoT / AI",
    stack: ["Next step", "In progress"],
    keywords: ["확장성", "Placeholder"],
    summary:
      "추가 프로젝트가 들어올 때 최소한의 코드/데이터로 카드만 추가하면 되도록 템플릿을 준비.",
    problem: "추가 프로젝트 시 데이터 구조와 UI가 일관되게 확장되어야 한다.",
    approach: "프로젝트 메타를 JSON 형태로 분리하고 카드/모달 컴포넌트를 데이터 기반으로 구성.",
    result: "데이터만 추가해 카드 렌더링과 모달 노출이 자동으로 맞춰지는 구조 확보.",
    learned: "데이터 주도 UI 설계가 협업과 확장을 쉽게 한다.",
    role: "템플릿 메모/히스토리 작성 중"
  }
];

export const fallbackSkills = [
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
  { category: "Collaboration", items: ["Git", "Figma", "Notion"] },
  {
    category: "Principles",
    items: ["가독성 위계 UI", "문제-접근-결과 사고", "모바일 우선 설계"]
  }
];

export const fallbackTimeline = [
  {
    title: "2024 · Oculo 출시 준비",
    period: "2024",
    items: [
      "멀미감소 Windows 오버레이 유틸리티(Oculo) 설계/개발",
      "TopMost/핫키 충돌 이슈 해결, 프리셋 구조 확립",
      "QA 피드백 기반 안정성 개선 리드"
    ]
  },
  {
    title: "2023 · Coin Project",
    period: "2023",
    items: [
      "2D 경제/이벤트 기반 게임 시스템 설계·구현",
      "차트/정보 UI, 튜토리얼 흐름 작성",
      "스토어 리소스/배포/운영 룰 정립"
    ]
  },
  {
    title: "2022 · 학습/훈련",
    period: "2022",
    items: ["React/TypeScript 기반 개인 학습", "Unity 2D 프로젝트 반복"]
  }
];
