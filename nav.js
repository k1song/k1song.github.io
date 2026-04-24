/**
 * K1 Note — 공통 사이드바 네비게이션
 *
 * 목차 순서를 바꾸고 싶으면 아래 NAV_ITEMS 배열의 순서만 변경하면 됩니다.
 * 새 문서를 추가하려면 items 배열에 { title, href } 객체를 추가하세요.
 */
const NAV_ITEMS = [
  // ── v2 현행 문서 ──────────────────────────────────────────────
  {
    category: 'Engineering v2',
    items: [
      { title: '운영 플레이북 v2', href: '/docs/stockdigging/ops-playbook.html',
        desc: '배포 절차, 크론 스케줄, 서버 명령어, 트러블슈팅 — v2 기준 실전 운영 가이드', date: '2026-04-25' },
      { title: '기술 아키텍처 v2 🔒', href: '/docs/stockdigging/tech-review.html',
        desc: 'Next.js 16 + FastAPI + SQLite 전체 아키텍처, 스택 선택 근거, 기술 부채 로드맵', date: '2026-04-25' },
    ]
  },

  // ── v1 아카이브 ───────────────────────────────────────────────
  {
    category: 'Business (v1 Archive)',
    items: [
      { title: '사업 소개서 (IR)', href: '/docs/stockdigging/v1/ir.html',
        desc: '투자자 성향 맞춤형 종목 스코어링 플랫폼 — 사업 모델, 검증, 제안', date: '2026 Q1' },
      { title: '비판 검토 및 대응', href: '/docs/stockdigging/v1/rebuttal.html',
        desc: '"StockDigging 사업화의 현실" 비판에 대한 항목별 수용/반박 정리', date: '2026 Q1' },
      { title: '재반박 검토 및 대응', href: '/docs/stockdigging/v1/rebuttal-v2.html',
        desc: '2차 비판에 대한 수용(3건)/반박(3건)/부분수용(1건) 및 향후 방향', date: '2026-03-27' },
    ]
  },
  {
    category: 'Engineering (v1 Archive)',
    items: [
      { title: '기술 아키텍처 v1 🔒', href: '/docs/stockdigging/v1/tech-review.html',
        desc: 'DB/파이프라인/스코어링/인프라 독립 검토 — P0~P3 로드맵 25건 (v1 기준)', date: '2026-04-12' },
      { title: '운영 플레이북 v1', href: '/docs/stockdigging/v1/ops-playbook.html',
        desc: 'v1 실전 운영 가이드 — score_cache.pkl, auto_daily.sh, FMP Starter 기준', date: '2026-03-26' },
      { title: '스코어링 v2 설계서', href: '/docs/stockdigging/v1/scoring-v2.html',
        desc: '30개 지표 재설계 — 중복 제거, 신규 6개 지표, 캘리브레이션 체계화', date: '2026-03-27' },
      { title: '스코어링 v3 설계서', href: '/docs/stockdigging/v1/scoring-v3.html',
        desc: 'P1 백분위 강제 피팅 + 지표 8개 교체 + 기술적매매 전면 재설계 (일목균형표/스토캐스틱)', date: '2026-03-30' },
      { title: '스코어링 v4 설계서', href: '/docs/stockdigging/v1/scoring-v4.html',
        desc: 'safe_earn_stability TTM detrended CV + div_cash_quality 도입 (금융주 배당성향 대체, NVIDIA 토큰 배당 차단)', date: '2026-04-15' },
    ]
  },
  {
    category: 'Research (v1 Archive)',
    items: [
      { title: '전략 최적화 보고서 v2', href: '/docs/stockdigging/v1/optimization-strategy.html',
        desc: '10년(2016-2026) Daily Rebalance 시뮬레이션 — 25개 지표 Sensitivity + 시장 국면별 분석 + 최적 가중치', date: '2026-04-04' },
      { title: 'ML 지표 가중치 최적화 v2', href: '/docs/stockdigging/v1/ml-indicator.html',
        desc: 'Random Forest ML — 시장 추세(30/60/90일) → 최적 지표 가중치 예측 | KR/US/US-only × N=5~100', date: '2026-04-04' },
      { title: 'Walk-forward OOS 검증', href: '/docs/stockdigging/v1/walkforward-oos.html',
        desc: '최적 가중치의 미래 예측력 검증 — 6라운드 Expanding Window × 251봇 × 3시장 | 과적합 분석 + 안정 지표 도출', date: '2026-04-04' },
      { title: '시장 국면별 전략 최적화', href: '/docs/stockdigging/v1/regime-strategy.html',
        desc: '국면 조건부 2-Step 최적화 — 상승/횡보/하락 × 30d/90d × 1/5/30/60d | KR·US·US-only 3차 실험 종합 분석', date: '2026-04-08' },
      { title: 'ML 검증 결과 및 한계 (2026 Q2)', href: '/docs/stockdigging/v1/ml-validation-2026q2.html',
        desc: 'LightGBM 81-feature walk-forward + 2025 holdout 검증. 표면 통계는 양호하나 추천 검수 시 거래정지·penny stock 다수 → 차기 ML 설계 함정 회피 자료', date: '2026-04-14' },
      { title: 'Walk-Forward Rolling 종합', href: '/docs/stockdigging/v1/wfr-summary-20260420.html',
        desc: 'Scoring v3 × 5 Splits(S1-S5) × 3 Markets(KR/US/US-only) × 5 Horizons TOP 1 종합 — ROBUST 조합 도출, KR 2025 KOSPI +75.6% 특이성 분석', date: '2026-04-20' },
      { title: 'WFR 전체 가중치 상세', href: '/docs/stockdigging/v1/wfr-weights-20260420.html',
        desc: '모든 Split × Market × Horizon × Regime × Style의 Step 1/2 가중치 표 (75 tables) — regime별 지표·전략 비중 참조용', date: '2026-04-20' },
      { title: 'Top-K 균등 평균 실험', href: '/docs/stockdigging/v1/wfr-topk-20260420.html',
        desc: 'US-only K=1/5/10/20 TOP K 조합 가중치 균등 평균의 OOS α 비교 — TOP 1 편향 완화 효과 검증, split/horizon별 최적 K 분석', date: '2026-04-20' },
      { title: 'WFR 독립 검토 패널', href: '/docs/stockdigging/v1/wfr-peer-review-20260420.html',
        desc: '세계적 전문가 4명 가상 패널 (ML/DB/경제학/퀀트) × 설계자 반박 토론 — 총 20개 지적 중 13건 수용, Q1 현장 검증 후 기각 등', date: '2026-04-20' },
      { title: 'Top-K 3시장 종합', href: '/docs/stockdigging/v1/wfr-topk-full-20260420.html',
        desc: 'KR/US/US-only × S1-S5 × K=1/5/10/20 전체 결과 — 시장별 K 특성 차이, horizon별 Best K Frequency, 업데이트된 실전 권고', date: '2026-04-20' },
      { title: '⚠️ WFR Bias Correction', href: '/docs/stockdigging/v1/wfr-bias-correction-20260421.html',
        desc: 'Top 20% 필터 + Survivorship-free 재검증 — 기존 +172.07%p → 실제 -10.88%p (183%p 편향). 이전 WFR 결과 전면 재해석', date: '2026-04-21' },
    ]
  },
];

function renderSidebar() {
  const currentPath = window.location.pathname;
  let html = `
    <div class="sidebar-title"><a href="/">K1 Note</a></div>
  `;
  for (const group of NAV_ITEMS) {
    html += `
      <div class="nav-category" onclick="this.classList.toggle('collapsed');this.nextElementSibling.classList.toggle('collapsed')">
        ${group.category} <span class="arrow">&#9660;</span>
      </div>
      <ul class="nav-list">
    `;
    for (const item of group.items) {
      const active = currentPath.endsWith(item.href.split('/').pop()) ? ' class="active"' : '';
      html += `<li class="nav-item"><a href="${item.href}"${active}>${item.title}</a></li>`;
    }
    html += `</ul>`;
  }
  html += `<div class="sidebar-footer"><a href="https://github.com/k1song">GitHub</a></div>`;

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderSidebar);
