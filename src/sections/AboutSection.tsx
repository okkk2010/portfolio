import { SectionHeader } from "../components/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="space-y-8">
      <SectionHeader
        eyebrow="About"
        title="개발 철학"
        description="문제 해결이 빠르게 드러나는 구조, 데이터 주도 UI, 그리고 실험을 통한 반복 개선을 중시합니다."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card">
          <h3 className="text-lg font-semibold text-ink-soft">원칙</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>• Problem → Approach → Result를 모든 산출물에 반영</li>
            <li>• 데이터 주도 설계로 확장성과 유지보수성 확보</li>
            <li>• QA/사용자 피드백 기반 반복 개선</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card">
          <h3 className="text-lg font-semibold text-ink-soft">관심사</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>• 멀미를 줄이는 인터랙션 연구</li>
            <li>• 게임/데스크톱/웹을 넘나드는 UI 패턴 실험</li>
            <li>• 프리셋/템플릿 기반 사용자 경험 확장</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
