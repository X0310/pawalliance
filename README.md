# PawAlliance 网站文件说明
# ✏️ 这是给管理员看的操作指南

## 📁 文件结构

```
pawalliance/
├── index.html        → 首页
├── cats.html         → 我们的猫（列表页）
├── cat-detail.html   → 猫咪详情页（自动根据ID显示）
├── adopt.html        → 云养计划
├── news.html         → 动态公告
├── message.html      → 留言板
├── about.html        → 关于我们
├── style.css         → 所有样式（颜色、字体、布局）
├── main.js           → 基础交互逻辑
├── cats-data.js      → 🐾 猫咪数据（在这里添加/修改猫咪）
├── news-data.js      → 📢 动态公告（在这里发布新公告）
└── assets/
    ├── logo.png      → 网站logo（替换这个文件即可换logo）
    └── cats/
        ├── yitong.png  → 异瞳的照片
        └── ...         → 其他猫咪照片放这里
```

---

## 🐾 如何添加新猫咪

打开 `cats-data.js`，在 `CATS_DATA` 数组里添加：

```javascript
{
  id: "xiaobai",           // 英文ID，不能有空格
  name: "小白",
  age: "1岁",
  color: "纯白",
  gender: "女",
  personality: "温柔安静，喜欢晒太阳",
  story: "小白是在小区里发现的……（详细故事）",
  status: "在册",
  photo: "assets/cats/xiaobai.jpg",
  adoptable: true,
  tags: ["白猫", "温柔"],
  joinDate: "2026-05"
},
```

然后把猫咪照片放进 `assets/cats/` 文件夹。

---

## 📢 如何发布新动态

打开 `news-data.js`，在最前面添加：

```javascript
{
  id: "news-002",
  title: "动态标题",
  date: "2026-04-06",
  type: "救助",     // 救助/医疗/送养/云养/活动/公告
  summary: "简短摘要（显示在列表）",
  content: `<p>详细内容……</p>`
},
```

---

## 🔢 如何修改首页数字

打开 `index.html`，找到 `data-target="数字"` 的地方修改：

```html
<div class="stat-num" data-target="12">0</div>  ← 改这里的数字
```

---

## 🎨 如何修改颜色主题

打开 `style.css`，找到最顶部的 `:root { }` 区块，修改颜色变量。

---

## ➕ 如何添加新页面

1. 复制任意一个 `.html` 文件，重命名（如 `partners.html`）
2. 修改里面的内容
3. 在所有页面的导航栏 `.nav-links` 里加一行：
   ```html
   <a href="partners.html" class="nav-link">合作伙伴</a>
   ```

---

## 💬 留言板升级为真实数据库（后续）

当前留言板用的是浏览器本地存储，数据只保存在访问者自己的电脑上。
后续接入 Supabase 步骤：
1. 注册 https://supabase.com
2. 创建 messages 表
3. 替换 message.html 里的 loadMessages / submitMessage 函数
（届时 Claude 可以帮你写具体代码）
