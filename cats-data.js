// ============================================================
// 🐾 猫咪数据管理文件
// 所有猫咪的信息都在这里统一管理
// 
// ✏️ 如何添加新猫咪：
//   1. 复制下面一个 { } 块
//   2. 修改里面的信息
//   3. 把猫咪照片放进 assets/cats/ 文件夹
//   4. 保存文件即可，网页会自动显示
// ============================================================

const CATS_DATA = [
  {
    id: "yitong",
    name: "异瞳",
    age: "未知",
    color: "白色",
    gender: "待确认",
    personality: "神秘优雅，拥有一蓝一金的异色瞳孔，是我们的第一位居民。",
    story: "异瞳是我们救助的第一只猫咪，因为她独特的异色瞳孔而得名。她性格安静，喜欢静静观察周围的一切，但对熟悉的人非常依赖。",
    status: "在册",           // 可选：在册 / 已送养 / 医疗中
    photo: "assets/cats/yitong.png",
    adoptable: true,          // true = 可送养，false = 暂不送养
    tags: ["异瞳", "白猫", "第一位居民"],
    joinDate: "2026-01"
  },

  // ✏️ 在下面添加新猫咪，复制上面的格式：
  // {
  //   id: "猫咪英文ID（不能有空格）",
  //   name: "猫咪名字",
  //   age: "年龄",
  //   color: "毛色",
  //   gender: "性别",
  //   personality: "简短性格介绍（显示在卡片上）",
  //   story: "详细故事（显示在详情页）",
  //   status: "在册",
  //   photo: "assets/cats/文件名.jpg",
  //   adoptable: true,
  //   tags: ["标签1", "标签2"],
  //   joinDate: "2026-01"
  // },

  {
    id: "coming-soon",
    name: "期待下一位",
    age: "—",
    color: "—",
    gender: "—",
    personality: "我们正在等待下一位有缘的小生命……",
    story: "",
    status: "敬请期待",
    photo: "",
    adoptable: false,
    tags: ["即将加入"],
    joinDate: ""
  }
];

// ============================================================
// 以下是自动生成卡片的代码，不需要修改
// ============================================================

function createCatCard(cat, isPreview = false) {
  const statusColor = {
    "在册": "status-green",
    "已送养": "status-blue",
    "医疗中": "status-amber",
    "敬请期待": "status-gray"
  }[cat.status] || "status-gray";

  const photoHTML = cat.photo
    ? `<img src="${cat.photo}" alt="${cat.name}" class="cat-card-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="cat-card-emoji" style="display:none">🐱</div>`
    : `<div class="cat-card-emoji">🐾</div>`;

  const detailBtn = cat.id !== "coming-soon"
    ? `<a href="cat-detail.html?id=${cat.id}" class="btn btn-outline btn-sm">查看详情</a>`
    : "";

  return `
    <div class="cat-card ${cat.id === 'coming-soon' ? 'cat-card-placeholder' : ''}">
      <div class="cat-card-photo">
        ${photoHTML}
        <span class="cat-status ${statusColor}">${cat.status}</span>
      </div>
      <div class="cat-card-info">
        <div class="cat-card-header">
          <h3 class="cat-card-name">${cat.name}</h3>
          <div class="cat-tags">
            ${cat.tags.map(t => `<span class="cat-tag-chip">${t}</span>`).join("")}
          </div>
        </div>
        <p class="cat-card-desc">${cat.personality}</p>
        ${detailBtn}
      </div>
    </div>
  `;
}

// 首页预览（只显示前2只真实猫咪 + 占位）
function renderCatsPreview() {
  const el = document.getElementById("catsPreview");
  if (!el) return;
  const preview = CATS_DATA.slice(0, 3);
  el.innerHTML = preview.map(cat => createCatCard(cat, true)).join("");
}

// 猫咪页全量显示
function renderAllCats() {
  const el = document.getElementById("allCats");
  if (!el) return;
  el.innerHTML = CATS_DATA.map(cat => createCatCard(cat)).join("");
}

renderCatsPreview();
renderAllCats();
