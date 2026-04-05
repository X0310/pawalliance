// ============================================================
// 📢 动态公告数据管理文件
//
// ✏️ 如何发布新公告：
//   1. 在 NEWS_DATA 数组最前面，复制一个 { } 块
//   2. 修改标题、日期、内容、类型
//   3. 保存文件，网页自动更新
//
// 类型（type）可选：
//   "救助"  "医疗"  "送养"  "云养"  "活动"  "公告"
// ============================================================

const NEWS_DATA = [
  {
    id: "news-001",
    title: "PawAlliance 正式上线！",
    date: "2026-04-05",
    type: "公告",
    summary: "我们的网站今天正式上线，欢迎大家关注我们的流浪猫救助项目，一起参与云养计划。",
    content: `
      <p>PawAlliance 正式上线了！</p>
      <p>我们是一支致力于探索"以商养善"可持续路径的团队，通过构建流浪猫治理与宠物经济相融合的运营体系，希望让每一次消费都成为一次善举。</p>
      <p>目前，我们的第一位居民——异瞳猫咪已经入驻，欢迎大家来认识她，并参与我们的云养计划。</p>
    `
  },

  // ✏️ 在上面添加新动态，复制格式如下：
  // {
  //   id: "news-002",          ← 每条动态的唯一ID，递增
  //   title: "动态标题",
  //   date: "2026-04-06",
  //   type: "救助",
  //   summary: "显示在列表页的简短摘要",
  //   content: `
  //     <p>详细内容写在这里，支持HTML格式</p>
  //     <p>可以有多段</p>
  //   `
  // },
];

// ============================================================
// 以下是自动渲染代码，不需要修改
// ============================================================

function createNewsCard(news, isPreview = false) {
  const typeColors = {
    "救助": "type-coral",
    "医疗": "type-amber",
    "送养": "type-green",
    "云养": "type-teal",
    "活动": "type-purple",
    "公告": "type-gray"
  };
  const typeClass = typeColors[news.type] || "type-gray";

  return `
    <div class="news-item">
      <div class="news-meta">
        <span class="news-type ${typeClass}">${news.type}</span>
        <span class="news-date">${news.date}</span>
      </div>
      <h3 class="news-title">
        <a href="news-detail.html?id=${news.id}">${news.title}</a>
      </h3>
      <p class="news-summary">${news.summary}</p>
      <a href="news-detail.html?id=${news.id}" class="news-read-more">阅读全文 →</a>
    </div>
  `;
}

function renderNewsPreview() {
  const el = document.getElementById("newsPreview");
  if (!el) return;
  const preview = NEWS_DATA.slice(0, 3);
  if (preview.length === 0) {
    el.innerHTML = `<p class="empty-tip">暂无动态，敬请期待～</p>`;
    return;
  }
  el.innerHTML = preview.map(n => createNewsCard(n, true)).join("");
}

function renderAllNews() {
  const el = document.getElementById("allNews");
  if (!el) return;
  if (NEWS_DATA.length === 0) {
    el.innerHTML = `<p class="empty-tip">暂无动态，敬请期待～</p>`;
    return;
  }
  el.innerHTML = NEWS_DATA.map(n => createNewsCard(n)).join("");
}

renderNewsPreview();
renderAllNews();
