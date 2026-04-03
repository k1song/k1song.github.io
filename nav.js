/**
 * K1 Note — 공통 사이드바 네비게이션
 *
 * 목차 순서를 바꾸고 싶으면 아래 NAV_ITEMS 배열의 순서만 변경하면 됩니다.
 * 새 문서를 추가하려면 items 배열에 { title, href } 객체를 추가하세요.
 */
const NAV_ITEMS = [
  {
    category: 'Business',
    items: [
      { title: '사업 소개서 (IR)', href: '/docs/stockdigging/ir.html',
        desc: '투자자 성향 맞춤형 종목 스코어링 플랫폼 — 사업 모델, 검증, 제안', date: '2026 Q1' },
      { title: '비판 검토 및 대응', href: '/docs/stockdigging/rebuttal.html',
        desc: '"StockDigging 사업화의 현실" 비판에 대한 항목별 수용/반박 정리', date: '2026 Q1' },
      { title: '재반박 검토 및 대응', href: '/docs/stockdigging/rebuttal-v2.html',
        desc: '2차 비판에 대한 수용(3건)/반박(3건)/부분수용(1건) 및 향후 방향', date: '2026-03-27' },
    ]
  },
  {
    category: 'Engineering',
    items: [
      { title: '기술 아키텍처 독립 검토', href: '/docs/stockdigging/tech-review.html',
        desc: 'DB/파이프라인/스코어링/인프라 4명 전문가 독립 검토 보고서', date: '2026 Q1' },
      { title: '운영 플레이북', href: '/docs/stockdigging/ops-playbook.html',
        desc: '매일 확인사항, 크론 스케줄, 트러블슈팅, 서버 명령어 — 실전 운영 가이드', date: '2026-03-26' },
      { title: '스코어링 v2 설계서', href: '/docs/stockdigging/scoring-v2.html',
        desc: '30개 지표 재설계 — 중복 제거, 신규 6개 지표, 캘리브레이션 체계화', date: '2026-03-27' },
      { title: '스코어링 v3 설계서', href: '/docs/stockdigging/scoring-v3.html',
        desc: 'P1 백분위 강제 피팅 + 지표 8개 교체 + 기술적매매 전면 재설계 (일목균형표/스토캐스틱)', date: '2026-03-30' },
    ]
  },
  {
    category: 'Research',
    items: [
      { title: '전략 최적화 보고서', href: '/docs/stockdigging/optimization-strategy.html',
        desc: '301명 봇 × 3대회 × 95코호트 × 174실험 — 적응형 벤치마크 전략 최적화', date: '2026-03-23' },
      { title: 'ML 지표 가중치 최적화', href: '/docs/stockdigging/ml-indicator.html',
        desc: '머신러닝 기반 지표별 가중치 최적화 실험 및 분석', date: '2026-04-01' },
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
