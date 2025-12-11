# 🎉 Jessica的AI作品集 - 快速开始

## 📁 项目文件说明

```
ai-portfolio/
├── index.html       ✅ 网站主页面
├── style.css        ✅ 样式文件（霓虹渐变、动画效果）
├── script.js        ✅ 交互脚本（粒子效果、卡片动画）
├── vercel.json      ✅ Vercel 部署配置
├── README.md        ✅ 项目说明文档
├── DEPLOY.md        ✅ 部署教程
├── START.md         ✅ 本文件
└── avatar.jpg       ⚠️  需要添加（你的头像图片）
```

---

## ⚡ 立即预览

### 方法 1：使用 Python（推荐）

```bash
cd ai-portfolio
python -m http.server 8000
```

然后在浏览器打开：`http://localhost:8000`

### 方法 2：使用 Node.js

```bash
npx http-server
```

### 方法 3：使用 VS Code

1. 安装 "Live Server" 插件
2. 右键 `index.html`
3. 选择 "Open with Live Server"

### 方法 4：直接打开（不推荐）

双击 `index.html` 文件

⚠️ 注意：部分功能可能因跨域限制无法正常工作

---

## 📝 下一步操作

### 1. 添加头像图片

将你的头像图片放在项目根目录，命名为 `avatar.jpg`

**图片要求：**
- 格式：JPG/JPEG/PNG
- 建议尺寸：300x300 像素以上
- 建议大小：小于 500KB

如果不添加头像，网站会自动显示默认的渐变头像（首字母 J）。

### 2. 测试所有功能

- ✅ 头像是否正常显示
- ✅ 视频是否能播放
- ✅ 应用链接是否正确
- ✅ 动画效果是否流畅
- ✅ 手机端是否正常（使用浏览器开发者工具测试）

### 3. 自定义内容（可选）

#### 修改个人信息

编辑 `index.html` 第 17 行：

```html
<h1 class="glitch-title" data-text="你的名字的AI作品集">你的名字的AI作品集</h1>
```

#### 修改欢迎语

编辑 `index.html` 第 18-22 行：

```html
<p class="subtitle">
    <span class="emoji-wave">✨</span>
    你的欢迎语~~
    <span class="emoji-wave">✨</span>
</p>
```

#### 调整配色

编辑 `style.css` 第 10-16 行：

```css
:root {
    --neon-purple: #bf40ff;  /* 紫色霓虹灯 */
    --neon-cyan: #00f0ff;    /* 青色霓虹灯 */
    --neon-pink: #ff006e;    /* 粉色霓虹灯 */
    --bg-dark: #0a0a1a;      /* 深色背景 */
}
```

---

## 🚀 部署到 Vercel

详细步骤请查看 `DEPLOY.md` 文件。

**快速部署：**

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel
```

或者：

1. 推送到 GitHub
2. 在 vercel.com 导入项目
3. 点击 Deploy

---

## 🎨 核心特色

- 🌈 **霓虹渐变标题** - 动态流动的彩色渐变效果
- ⚡ **故障艺术特效** - 标题文字的 glitch 动画
- 💫 **粒子背景** - 50 个随机浮动的彩色粒子
- 🎬 **视频卡片** - 6 个 B站视频嵌入播放
- 🚀 **应用卡片** - 3D 倾斜 + 鼠标跟随发光效果
- 📱 **完全响应式** - 自动适配所有设备
- ⚡ **性能优化** - 懒加载、节流、预加载

---

## 🛠️ 技术细节

### 动画效果

- **渐变流动**：CSS `background-position` 动画
- **故障特效**：transform + filter 组合动画
- **粒子系统**：JavaScript 动态生成 + CSS 动画
- **3D 倾斜**：CSS `perspective` + `rotateX/Y`
- **发光效果**：`box-shadow` + `radial-gradient`

### 性能优化

- **懒加载**：Intersection Observer API
- **节流**：高频事件防抖
- **硬件加速**：`transform` + `will-change`
- **资源预加载**：鼠标悬停预加载链接

### 兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 移动端浏览器

---

## 📞 需要帮助？

### 常见问题

**Q: 头像不显示怎么办？**
A: 添加 `avatar.jpg` 文件，或使用默认头像

**Q: 视频加载慢？**
A: 这是 B站服务器速度问题，可以启用懒加载优化

**Q: 动画卡顿？**
A: 减少粒子数量（编辑 `script.js` 第 11 行的 `particleCount`）

**Q: 如何修改视频？**
A: 编辑 `index.html`，替换 iframe 中的 `bvid` 参数

### 技术支持

- 查看 `README.md` - 完整项目文档
- 查看 `DEPLOY.md` - 部署教程
- 联系开发者：[你的联系方式]

---

## ✨ 享受你的 AI 作品集！

现在你可以：

1. 🎨 本地预览网站效果
2. 📝 自定义个人信息
3. 🚀 部署到 Vercel
4. 🌐 分享给全世界

祝你使用愉快！💖
