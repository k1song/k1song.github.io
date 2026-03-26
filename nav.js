/**
 * K1 Note — 공통 사이드바 네비게이션
 *
 * 목차 순서를 바꾸고 싶으면 아래 NAV_ITEMS 배열의 순서만 변경하면 됩니다.
 * 새 문서를 추가하려면 items 배열에 { title, href } 객체를 추가하세요.
 */
const NAV_ITEMS = [
  {
    category: 'StockDigging',
    items: [
      { title: '사업 소개서 (IR)', href: '/docs/stockdigging/ir.html' },
      { title: '기술 아키텍처 검토', href: '/docs/stockdigging/tech-review.html' },
      { title: '비판 검토 및 대응', href: '/docs/stockdigging/rebuttal.html' },
      // 여기에 문서 추가: { title: '제목', href: '/docs/stockdigging/파일명.html' },
    ]
  },
  // 새 카테고리 추가 예시:
  // {
  //   category: '카테고리명',
  //   items: [
  //     { title: '문서 제목', href: '/docs/경로/파일.html' },
  //   ]
  // },
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
