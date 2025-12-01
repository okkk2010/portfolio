## Portfolio

React + TypeScript + Vite + Tailwind 기반의 원페이지 포트폴리오입니다. Oculo(멀미 완화 오버레이)와 Coin Project(경제/이벤트 결합 2D 게임) 스토리를 문제→접근→결과 순으로 보여줍니다.

### Scripts
- `npm install` (필요 시 `npm_config_offline=false` 환경변수 해제): 의존성 설치
- `npm run dev` : 로컬 개발 서버
- `npm run build` : 프로덕션 번들 + 타입체크
- `npm run preview` : 빌드 결과 미리보기
- `npm run lint` : ESLint 검사

### 구조
- `src/components` : UI 단위 (카드, 모달, 헤더 등)
- `src/sections` : Hero/Projects/Skills/Timeline/About/Contact 섹션
- `src/data` : 프로젝트/스킬/타임라인 데이터 (추가 시 여기만 수정)

### 배포 힌트
- GitHub Pages: `npm run build` 후 `dist`를 업로드하거나 GH Actions로 자동 배포 (Vite 기본 설정).
- Vercel/Netlify: 빌드 커맨드 `npm run build`, 출력 디렉터리 `dist`.

### 추가 작업 아이디어
- 프로젝트 상세 라우팅(React Router) 혹은 모달 개선(키보드 접근성)
- 다국어(ko/en) 토글
- 블로그/데브로그 섹션 연결
