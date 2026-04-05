// ============================================================
// PawAlliance · 主逻辑文件
// ============================================================

// ── 导航栏滚动效果 ──
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }
});

// ── 汉堡菜单（手机端） ──
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ── 当前页高亮导航 ──
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) link.classList.add("active");
  else link.classList.remove("active");
});

// ── 数字滚动动画 ──
function animateCounters() {
  document.querySelectorAll(".stat-num[data-target]").forEach(el => {
    const target = parseInt(el.dataset.target);
    if (target === 0) { el.textContent = "0"; return; }
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { el.textContent = target; clearInterval(timer); }
      else { el.textContent = start; }
    }, 30);
  });
}

// 进入视口时触发数字动画
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}
