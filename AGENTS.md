# AGENTS.md

## Project: Portfolio Page

사용자의 주요 개인 프로젝트를 정리해 보여주는 **포트폴리오 웹사이트**를 만든다.  
핵심 대상 프로젝트는 다음과 같다.

- 멀미 방지 프로그램(Oculo) – Windows 데스크탑 유틸리티
- Coin Project – Unity 2D 모바일/PC 게임
- +@ – 향후 추가될 기타 프로젝트들

---

## 1. Global Context

### 1.1 목표 (Goal)

- 방문자가 **5초 안에 “어떤 개발자인지” 이해**할 수 있는 페이지.
- 대표 프로젝트(멀미 방지 프로그램(Oculo), Coin Project)를 통해  
  **실제 문제 정의 → 해결 과정 → 결과/배움**이 보이도록 구조화.
- 이후 다른 프로젝트를 쉽게 추가할 수 있는 **확장 가능한 구조** 유지.

### 1.2 선호 기술 스택 (Preferred Tech Stack)

- Frontend: **React + TypeScript + Vite**
- Styling: **Tailwind CSS**
- State: React hooks (useState/useEffect), 필요 시 TanStack Query 등
- Deployment: GitHub Pages / Vercel / Netlify 중 하나 (제약 없음)

> 단, 실제 리포지토리에서 다른 스택을 선택해도 되며,  
> 이 문서는 기본/권장 방향을 정의하는 용도이다.

### 1.3 공통 UI/UX 방향

- **One-page 스크롤 레이아웃** + 상단 고정 네비게이션
- 섹션 구성(권장):
  - Hero
  - Projects (대표 프로젝트 카드 + 상세 페이지/모달)
  - Skills
  - Timeline / Experience
  - About
  - Contact
- 정보 전달 우선, 과도한 애니메이션은 지양.
- 텍스트는 **한글 기준**, 필요 시 짧은 영어 병기.

---

## 2. Domain: Projects

### 2.1 멀미 방지 프로그램(Oculo)

- **정의**
  - 3D 게임 플레이 시 발생하는 **멀미를 줄이기 위한 Windows 데스크탑 유틸리티 프로그램**.
  - 게임 화면 위에 오버레이 UI를 띄워 시선 고정/화면 정보 제공 등을 통해 멀미감을 완화하는 것을 목표로 함.

- **플랫폼 / 기술**
  - Platform: Windows 데스크탑
  - Language: C#
  - Framework: .NET (Windows Forms 또는 WPF 기반 오버레이)
  - 기타: 핫키, 트레이 아이콘, 게임 창 포커스 연동 등

- **포트폴리오에서 강조할 포인트**
  - 문제 정의: “3D 게임에서 쉽게 멀미를 느끼는 사용자”라는 구체적인 타깃.
  - 기술적 난점:
    - 전체화면/창 모드에서의 오버레이 처리
    - 항상 위(TopMost) 처리 vs 게임 창 포커스 연동
    - 단축키, 트레이 실행, 다중 오버레이 구조 설계
  - 구조/아키텍처:
    - Overlay Manager, Game Preset, Overlay Preset 등의 개념
  - 본인이 직접 설계/구현한 부분을 분명히 기술:
    - 오버레이 윈도우 제어
    - 게임 창 탐지/포커스 연동 로직
    - 프리셋/설정 관리 구조 등

- **포트폴리오용 요약 문장 예시**
  - “3D 게임 플레이 중 멀미를 줄이기 위해, 게임 화면 위에 커스터마이징 가능한 오버레이를 제공하는 Windows 멀미 방지 프로그램(Oculo)을 개발했습니다.”

---

### 2.2 Coin Project

- **정의**
  - 주식/코인 느낌의 경제 시스템을 **게임 세계관과 결합한 2D 게임 프로젝트**.
  - 플레이어가 가상의 세계에서 자산을 운용하고, 이벤트/뉴스에 따라 가격이 변동되는 구조.

- **플랫폼 / 기술**
  - Platform: 모바일
  - Engine: Unity (2D)
  - Language: C#
  - 기타: UI/UX, 인게임 뉴스/이벤트 시스템, 데이터 저장 구조 등

- **포트폴리오에서 강조할 포인트**
  - 시스템 설계:
    - 자산 가격 변동 로직
    - 뉴스/이벤트 → 경제 지표에 반영되는 구조
  - 게임 UX:
    - 차트/정보 UI 구성
    - 튜토리얼, 피드백 구조
  - 협업:
    - 팀원과의 협업 구조 (역할 분담, 코드/리소스 관리 방식)
  - 현재 상태:
    - 프레임워크/구조는 대부분 완성
    - UX/UI, 대사, 리소스 작업 위주로 마무리 단계

- **포트폴리오용 요약 문장 예시**
  - “가상의 경제 시스템과 뉴스 이벤트를 결합한 2D 게임 Coin Project에서, 게임 로직과 UI를 중심으로 개발을 담당했습니다.”

---

### 2.3 +@ (Other Projects)

- 목적:
  - 앞으로 진행할 프로젝트(웹, IoT, AI, 앱 등)를 **같은 템플릿**으로 쉽게 추가.
- 추가 시 따라야 할 항목:
  1. 프로젝트 이름 (한글 + 영문 명칭)
  2. 한 줄 정의
  3. 플랫폼 & 기술 스택
  4. 해결하려는 문제 / 목표
  5. 본인이 담당한 역할
  6. 결과 & 배운 점

---

## 3. Agents

> 이 섹션은 “이 포트폴리오 리포지토리를 다루는 AI/도구/사람”들이  
> 어떤 역할을 맡는지 정의한다.

### 3.1 dev-agent (Development Agent)

**Mission**

- 포트폴리오 웹사이트의 **코드 구현 전반** 담당.

**Responsibilities**

- React + TypeScript + Vite 기반 프로젝트 구조 설계
- 컴포넌트 설계:
  - `Hero`, `ProjectCard`, `ProjectDetail`, `SkillsSection`, `TimelineSection`, `AboutSection`, `ContactSection` 등
- 라우팅/상세 페이지 구현 (필요 시 React Router 도입)
- 반응형 레이아웃 구현 (모바일/태블릿/데스크톱)

**Constraints**

- 가독성 좋은 코드, 일관된 네이밍(파스칼 케이스 컴포넌트 / 카멜 케이스 변수)
- Tailwind 클래스는 지나치게 복잡하지 않게 구성 (중첩/추상화 필요 시 컴포넌트 분리)
- 불필요한 의존성 최소화

**Output 형태**

- `.tsx` 컴포넌트 코드
- `tailwind.config` 등 설정 파일
- 명확한 폴더 구조 예:
  - `src/components`, `src/sections`, `src/data`, `src/pages` 등

---

### 3.2 content-agent (Content & Copy Agent)

**Mission**

- 포트폴리오에 들어갈 **텍스트/문구/설명**을 작성하고 다듬는다.

**Responsibilities**

- 각 프로젝트의:
  - 한 줄 요약
  - 상세 설명 (Problem → Approach → Result → Learnings)
- Hero 섹션 문구:
  - 자기소개 한 줄, 짧은 설명, 버튼 레이블
- About 섹션:
  - 개발 철학, 관심 도메인, 작업 스타일
- 한글 중심, 필요 시 짧은 영어 병기 (프로젝트 명/역할 등)

**Constraints**

- 문체:
  - 담백하고 직관적인 문장, 과한 미사여구 금지
  - “실제 사용을 상상할 수 있는” 설명 우선
- 길이:
  - 페이지에서는 짧고 요약형
  - 필요 시 Case Study 상세에서 추가 설명

**Output 형태**

- Markdown 또는 JSON 형태의 문자열 데이터 (예: `src/data/projects.ts`에서 사용 가능)
- 한국어 기준, 필요 시 영어 버전 추가 가능

---

### 3.3 design-agent (UI/UX Agent)

**Mission**

- 포트폴리오 페이지의 **시각적 구조와 상호작용**을 설계한다.

**Responsibilities**

- 레이아웃 가이드:
  - 섹션 배치, 그리드/카드 구조 정의
- 컴포넌트 단위 UI 패턴 제안:
  - 프로젝트 카드, 태그/배지, 버튼 스타일, 섹션 헤더 등
- 컬러/타이포 선택:
  - 다크/라이트 모드 여부
  - 기본 컬러 팔레트 제안 (예: 중립 계열 + 포인트 컬러 1~2개)
- 인터랙션:
  - Hover, Focus, 작은 모션(transition) 수준의 인터랙션 정의

**Constraints**

- 과도한 애니메이션/시각적 장식은 피하고, **정보 위계**를 명확히.
- 모바일 우선(Mobile-first) 기준으로, 데스크톱에서 확장.

**Output 형태**

- Tailwind 기반 클래스 조합 예시
- Figma 스타일의 추상적인 스타일 가이드 텍스트
- 컴포넌트 구조 스케치 설명 (텍스트로)

---

### 3.4 infra-agent (Deployment & Repo Agent)

**Mission**

- 포트폴리오 프로젝트의 **빌드/배포/리포지토리 설정**을 담당한다.

**Responsibilities**

- `package.json` 스크립트 정의:
  - `dev`, `build`, `preview`, `lint` 등
- 배포 대상에 따른 설정:
  - GitHub Pages: `base` 설정, Actions 워크플로우
  - Vercel/Netlify: 빌드 커맨드, output 디렉토리 설정
- `.gitignore`, 기본 README, 라이선스 등 리포지토리 메타 파일 정비

**Constraints**

- 단순하고 재현 가능한 배포 플로우 유지
- README에:
  - 프로젝트 소개
  - 로컬 실행 방법
  - 배포 URL 명시

**Output 형태**

- 설정 파일(`.gitignore`, CI 설정 YAML, README.md 텍스트 등)
- 배포 절차 요약 문서

---

## 4. 작업 원칙 (Working Principles)

1. **실제 사용성 우선**
   - “이 페이지를 보는 면접관/교수/협업 파트너가 나를 얼마나 빠르게 이해할 수 있는가?”를 최우선 기준으로 삼는다.

2. **일관된 구조**
   - 모든 프로젝트는 같은 템플릿(Overview → Problem → Approach → Result → Learnings)을 따른다.

3. **추가/수정 용이성**
   - 새로운 프로젝트가 생겼을 때, 최소한의 코드/데이터 수정으로 카드 추가가 가능해야 한다.
   - `src/data/projects.ts` 같은 형태로 **데이터 주도 구조**를 선호.

4. **한국어 중심, 필요 시 영어 병기**
   - 기본은 한국어 설명.
   - 프로젝트 명, 역할, 기술 스택 등은 영어 병기 허용.

---

## 5. 향후 확장 아이디어

- Blog 섹션 연동 (Velog/Tistory 글 일부를 가져와서 표시)
- 다국어 지원 (ko/en 토글)
- 프로젝트 필터/태그 기능 (Game, Web, IoT, App 등)
- Oculo, Coin Project의 업데이트 로그 타임라인화
