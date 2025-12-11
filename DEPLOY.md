# 🚀 Vercel 部署指南

## 方式一：通过 Vercel 网站部署（推荐）

### 步骤 1：准备 GitHub 仓库

1. 在 GitHub 创建新仓库
2. 将 `ai-portfolio` 文件夹内容推送到仓库

```bash
cd ai-portfolio
git init
git add .
git commit -m "Initial commit: AI Portfolio"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 步骤 2：在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 导入你的 GitHub 仓库
5. 保持默认配置，点击 "Deploy"
6. 等待部署完成（通常 1-2 分钟）
7. 获取你的网站地址：`https://你的项目名.vercel.app`

### 步骤 3：自定义域名（可选）

1. 在 Vercel 项目页面点击 "Settings"
2. 选择 "Domains"
3. 添加你的自定义域名
4. 按照提示在域名服务商处配置 DNS

---

## 方式二：使用 Vercel CLI 部署

### 安装 Vercel CLI

```bash
npm install -g vercel
```

### 登录 Vercel

```bash
vercel login
```

### 部署项目

```bash
cd ai-portfolio
vercel
```

按照提示操作：
- 选择 scope（个人账户）
- 确认项目名称
- 选择项目路径（当前目录）
- 是否覆盖设置（选择 No）

### 部署到生产环境

```bash
vercel --prod
```

---

## 📝 部署前检查清单

- ✅ 确保 `avatar.jpg` 头像图片已添加
- ✅ 检查所有视频 BV 号是否正确
- ✅ 确认应用链接是否有效
- ✅ 测试本地运行是否正常
- ✅ 检查响应式布局（手机、平板、电脑）

---

## 🔧 常见问题

### 1. 部署后头像不显示

**原因**：头像文件未上传或路径错误

**解决方法**：
- 确保 `avatar.jpg` 在项目根目录
- 或使用绝对 URL 链接到外部图片
- 网站会自动显示默认的渐变头像

### 2. 视频无法播放

**原因**：B站视频 BV 号错误或视频已下架

**解决方法**：
- 检查 BV 号格式是否正确（例如：`BV1G3oZ6sT`）
- 确认视频在 B站可正常访问
- 更新 iframe src 中的 bvid 参数

### 3. 动画效果不流畅

**原因**：浏览器性能或网络问题

**解决方法**：
- 减少粒子数量（修改 `script.js` 中的 `particleCount`）
- 禁用部分动画效果
- 优化图片大小

### 4. 部署后样式错乱

**原因**：文件路径问题

**解决方法**：
- 确保所有文件都在同一目录
- 检查 HTML 中的 CSS 和 JS 引用路径
- 使用相对路径而非绝对路径

---

## 🔄 更新网站内容

### 本地测试

1. 修改文件内容
2. 本地浏览器刷新测试
3. 确认修改无误

### 推送更新

```bash
git add .
git commit -m "更新：描述你的修改"
git push
```

Vercel 会自动检测 GitHub 更新并重新部署（约 1-2 分钟）

---

## 📊 查看部署状态

1. 访问 [vercel.com/dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 查看部署历史和日志
4. 监控网站性能指标

---

## 💡 优化建议

### 性能优化

- 压缩图片（使用 TinyPNG 或 ImageOptim）
- 使用 WebP 格式图片
- 启用 Vercel 的自动图片优化

### SEO 优化

在 `index.html` 的 `<head>` 中添加：

```html
<meta name="description" content="Jessica的AI作品集 - 展示AI视频创作和AI应用开发">
<meta name="keywords" content="AI,作品集,视频创作,AI应用">
<meta property="og:title" content="Jessica的AI作品集">
<meta property="og:description" content="欢迎和我一起玩AI">
<meta property="og:image" content="https://你的域名/avatar.jpg">
```

---

## 📞 获取帮助

- Vercel 文档：[vercel.com/docs](https://vercel.com/docs)
- Vercel 社区：[github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

🎉 祝你部署顺利！
