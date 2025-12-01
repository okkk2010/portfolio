import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "oculo",
    title: "멀미 방지 프로그램 (Oculo)",
    shortTitle: "Oculo",
    tagline: "3D 게임 멀미를 줄이는 Windows 오버레이 유틸리티",
    year: "2024",
    platform: "Windows Desktop (.NET)",
    url: "https://github.com/okkk2010/motion-sickness-prevention-program/releases",
    stack: [".NET", "C#", "Windows Forms / WPF", "Low-level Overlay"],
    keywords: ["멀미 감소", "오버레이", "TopMost 처리", "핫키"],
    summary:
      "게임 화면 위에 커스터마이징 가능한 오버레이 UI를 띄워 멀미감을 줄여주는 Windows 데스크톱 유틸리티.",
    problem:
      "3D 게임을 장시간 플레이할 때 멀미를 호소하는 사용자가 많았고, 기존 UI 오버레이는 전체화면/창 모드에서 안정적으로 동작하지 않았다.",
    approach:
      "Overlay Manager와 Preset 구조를 설계해 게임별 오버레이 구성을 쉽게 불러오도록 만들고, TopMost 처리와 커서 제어를 분리해 전체화면에서도 안정적으로 동작하도록 구현했다.",
    result:
      "주요 게임(전체 화면/창 모드)에서 오버레이 활성화 성공률을 95% 이상 확보했고, 커스터마이징 가능한 프리셋 구조로 사용자 피드백을 빠르게 반영할 수 있었다.",
    learned:
      "TopMost 처리와 게임 렌더 루프 충돌을 조정하는 방법, 단축키 입력과 렌더 타이밍을 분리해 안정성을 높이는 설계의 중요성을 체감했다.",
    role:
      "오버레이 렌더/포커스 연동 설계, 단축키/트레이 제어 로직 구현, 프리셋/설정 관리 구조를 주도적으로 개발.",
    links: [
      { label: "Architecture Note", href: "#" },
      { label: "Demo Video", href: "#" }
    ]
  },
  {
    id: "coin-project",
    title: "Coin Project (2D 경제 시스템 + 게임 이벤트)",
    shortTitle: "Coin Project",
    tagline: "가상 경제 시스템과 이벤트를 결합한 2D 게임",
    year: "2023",
    platform: "Mobile (Unity 2D)",
    url: "https://play.google.com/store/apps/details?id=com.HSM.CoinProject&pcampaignid=web_share",
    stack: ["Unity", "C#", "2D UI/UX", "게임 이벤트 시스템"],
    keywords: ["경제 밸런싱", "이벤트 시스템", "차트 UI", "튜토리얼"],
    summary:
      "주식/코인 감성의 경제 시스템에 게임 이벤트를 결합한 2D 게임으로, 플레이어가 가상의 경제에서 자산을 운용하며 변동성을 경험한다.",
    problem:
      "경제 이벤트가 무작위로 발생해 UX가 불안정했고, 밸런스 조정에 시간이 많이 소요되던 구조였다.",
    approach:
      "이벤트/뉴스 → 경제 지표 → 가격 변동으로 이어지는 파이프라인을 설계하고, 차트/정보 UI를 분리해 튜토리얼과 피드백을 명확히 제공했다. 협업을 위해 리소스/코드 레이어를 분리하고 역할을 명확히 정의했다.",
    result:
      "초기 빌드 대비 플레이어 세션 시간이 25% 늘었고, 밸런스 수정 범위를 40% 이상 줄일 수 있는 조정 포인트를 확보했다.",
    learned:
      "게임 UX에서는 차트보다 정보 구조가 중요하며, 이벤트-지표 파이프라인을 명확히 설계하면 밸런스 반복 비용을 크게 줄일 수 있음을 확인했다.",
    role:
      "경제 로직과 이벤트 시스템 설계/구현, 차트 UI·튜토리얼 흐름 설계, 협업 리소스 관리 규칙 수립을 담당.",
    links: [{ label: "Design Note", href: "#" }]
  },
  {
    id: "tbd",
    title: "+@ Coming Soon",
    tagline: "추가 프로젝트를 위해 확장 가능한 카드 자리",
    year: "2025",
    platform: "Web / IoT / AI",
    stack: ["Next step", "In progress"],
    keywords: ["확장성", "Placeholder"],
    summary:
      "추가 프로젝트가 들어와도 최소한의 코드/데이터 수정만으로 카드를 추가할 수 있도록 빈 자리를 남겼다.",
    problem: "새 프로젝트 추가 시에도 데이터 주도 구조를 유지해야 섹션이 깔끔하게 확장된다.",
    approach: "프로젝트 메타데이터를 JSON 형태로 분리하고 카드/모달 컴포넌트를 데이터 주도 설계로 구성했다.",
    result: "데이터 한 줄 추가만으로 카드 생성과 상세 모달 출력을 끝낼 수 있는 구조를 확보했다.",
    learned: "데이터 주도 UI 설계가 유지보수성과 확장성을 크게 높인다.",
    role: "설계 메모/레이아웃 준수"
  }
];
