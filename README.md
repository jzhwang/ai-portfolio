# 🎨 Jessica的AI作品集

一个现代化、酷炫的个人 AI 作品集网站，展示 AI 视频创作和 AI 应用开发作品。https://jessica-ai-portfolio.vercel.app

## ✨ 特色功能

- 🌈 **霓虹渐变效果** - 动态渐变标题和故障艺术特效
- 💫 **粒子动画背景** - 炫酷的浮动粒子效果
- 🎬 **B站视频嵌入** - 完美集成 Bilibili 播放器
- 🚀 **3D 卡片交互** - 鼠标悬停时的发光和倾斜效果
- 📱 **完全响应式** - 完美适配手机、平板和电脑
- ⚡ **高性能优化** - 懒加载、节流和预加载技术

## 🛠️ 技术栈

- **纯前端技术** - HTML5 + CSS3 + JavaScript (ES6+)
- **动画库** - AOS (Animate On Scroll)
- **视频嵌入** - Bilibili iframe player
- **部署平台** - Vercel

## 📦 项目结构

```
ai-portfolio/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
├── avatar.jpg      # 头像图片（需自行添加）
├── vercel.json     # Vercel 配置
└── README.md       # 项目文档
```

## 🚀 快速开始

### 本地运行

1. 克隆项目到本地
2. 将你的头像图片命名为 `avatar.jpg` 放在项目根目录
3. 使用任意 HTTP 服务器运行，例如：

```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server
```

4. 在浏览器打开 `http://localhost:8000`

### 部署到 Vercel

1. 将项目推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 点击 Deploy，自动部署完成！

或使用 Vercel CLI：

```bash
npm i -g vercel
cd ai-portfolio
vercel
```

## 🎨 自定义配置

### 修改个人信息

编辑 `index.html`：

- 修改标题文字
- 更换视频链接（B站 BV 号）
- 修改应用链接和描述

### 调整配色方案

编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --neon-purple: #bf40ff;
    --neon-cyan: #00f0ff;
    --neon-pink: #ff006e;
    --bg-dark: #0a0a1a;
}
```

### 添加更多作品

在相应的 HTML 区块添加卡片：

**视频卡片模板：**
```html
<div class="video-card" data-aos="fade-up">
    <div class="video-wrapper">
        <iframe src="https://player.bilibili.com/player.html?bvid=YOUR_BV_ID"></iframe>
    </div>
    <div class="video-info">
        <h3>视频标题</h3>
        <p>视频描述</p>
    </div>
</div>
```

**应用卡片模板：**
```html
<a href="YOUR_APP_URL" target="_blank" class="app-card" data-aos="zoom-in">
    <div class="card-glow"></div>
    <div class="card-shine"></div>
    <div class="card-content">
        <div class="app-icon">🎯</div>
        <h3>应用名称</h3>
        <p>应用描述</p>
        <div class="card-footer">
            <span class="link-text">探索应用</span>
            <span class="arrow">→</span>
        </div>
    </div>
</a>
```

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动端浏览器

## 💡 性能优化

- 使用 Intersection Observer 实现懒加载
- CSS 动画硬件加速
- 节流函数优化高频事件
- 资源预加载提升交互速度

## 📄 许可证

MIT License - 自由使用和修改

## 👤 作者

**Jessica**

- 个人网站：[你的网站]
- GitHub：[你的 GitHub]
- Email：[你的邮箱]

---

💖 Made with Love by Jessica | Powered by AI
