import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "oculo",
    title: "멀미를 줄이는 멀티방해 프로그램 (Oculo)",
    shortTitle: "Oculo",
    tagline: "3D 게임 멀미를 줄이는 Windows 오버레이 유틸리티",
    year: "2024",
    platform: "Windows Desktop (.NET)",
    stack: [".NET", "C#", "Windows Forms / WPF", "Low-level Overlay"],
    keywords: ["멀미 감소", "오버레이", "TopMost 처리", "핫키"],
    summary:
      "게임 화면 위에 커스터마이징 가능한 오버레이 UI를 띄워 멀미감을 줄여주는 Windows 데스크탑 유틸리티.",
    problem:
      "3D 게임 플레이 중 시각적 피로와 멀미를 호소하는 사용자가 많았고, 일반 UI 오버레이는 전체 화면/창 모드에서 안정적으로 동작하지 않는 문제가 있었다.",
    approach:
      "Overlay Manager와 Preset 구조를 설계해 다양한 게임에 맞춘 오버레이 구성을 저장/불러오기 가능하도록 하고, TopMost 처리와 커서 훅을 함께 다뤄 전체 화면에서도 안정적으로 표시되도록 구현.",
    result:
      "주요 게임(전체 화면/창 모드)에서 오버레이 유지율 95% 이상을 확보했고, 커스터마이징 가능한 프리셋으로 사용자 요청을 빠르게 반영할 수 있는 구조를 완성.",
    learned:
      "TopMost 처리와 게임 렌더링 루프 간 충돌 이슈를 조정하는 방법, 핫키 입력과 렌더링 타이밍을 분리한 설계의 중요성을 체감.",
    role:
      "오버레이 렌더링 구조 설계, 게임 핫키/커서 훅 연동, 프리셋 저장/불러오기 로직 전담. 크래시 리포트 기반 안정성 개선 주도.",
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
    year: "2023",
    platform: "Mobile + PC (Unity 2D)",
    stack: ["Unity", "C#", "2D UI/UX", "게임 이벤트 시스템"],
    keywords: ["경제 밸런스", "이벤트 시스템", "차트 UI", "튜토리얼"],
    summary:
      "주식/코인 느낌의 경제 시스템에 게임 이벤트를 결합한 2D 게임. 플레이어가 가상의 경제에서 자산을 운용하며 변동성을 경험.",
    problem:
      "경제 이벤트와 가격 변동이 무작위로 흩어져 UX가 혼란스러웠고, 밸런스 조정에 시간이 많이 소요되었다.",
    approach:
      "이벤트/뉴스 → 경제 지표 → 가격 변동으로 이어지는 데이터 흐름을 단방향으로 정의하고, 차트/정보 UI를 분리해 튜토리얼과 가이드를 명확히 제공. 협업을 위해 리소스/코드 폴더 구조를 정리하고 작업 단위를 명확히 나눔.",
    result:
      "초기 빌드 대비 플레이어 유지 시간이 25% 증가했고, 밸런스 패치에 필요한 수정 범위를 40% 이상 줄이는 구조를 마련.",
    learned:
      "게임 UX에서 정보 설계가 차트보다 중요하다는 점, 이벤트 시스템을 데이터 주도로 설계하면 밸런스 반복에 드는 비용을 줄일 수 있음을 확인.",
    role:
      "경제 로직과 이벤트 시스템 설계/구현, 차트 UI/튜토리얼 흐름 설계, 협업 리소스 관리 규칙 수립.",
    links: [{ label: "Design Note", href: "#" }]
  },
  {
    id: "tbd",
    title: "+@ Coming Soon",
    tagline: "추가 프로젝트를 위해 확장 가능한 카드 자리",
    year: "2025",
    platform: "Web / IoT / AI 등",
    stack: ["Next step", "In progress"],
    keywords: ["확장성", "Placeholder"],
    summary: "추가 프로젝트가 들어올 때 최소한의 코드/데이터 수정만으로 카드를 추가할 수 있도록 여백을 남겼습니다.",
    problem: "새 프로젝트 추가 시 데이터 주도 구조를 유지하면서 섹션을 깔끔하게 확장해야 함.",
    approach: "프로젝트 메타데이터를 JSON 형태로 분리하고 카드/모달 컴포넌트를 데이터 주도로 설계.",
    result: "데이터 1건 추가만으로 카드 생성 및 상세 노출이 가능하도록 구성.",
    learned: "데이터 주도 UI 설계의 중요성을 확인.",
    role: "설계 및 레이아웃 준비"
  }
];
