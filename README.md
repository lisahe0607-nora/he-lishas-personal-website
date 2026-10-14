# 何梨莎的个人简历与作品集

原生 HTML / CSS / JavaScript 静态网站，无构建步骤和后台依赖。

## 页面

- `index.html`：个人介绍、精选作品、能力、工作履历和联系方式。
- `knowledge.html`：小白企业知识库 RAG。交付状态为原型完成、计划调整后暂停。
- `drone.html`：无人机赛事调度。界面图为代码的离线模拟展示。
- `health.html`：醒来 APP、智能穿戴与 BI，合并为一个健康 AI 案例。
- `overseas.html`：JMChip 与 SEMIMall，合并为一个海外独立站案例。
- `resume.html`：完整简历，支持浏览器打印及保存为 PDF。

## 本地预览

在网站目录运行 `python3 -m http.server 8765`，浏览器打开 `http://localhost:8765`。
也可直接打开 `index.html`。图片、样式和页面路径均为相对路径。

## 代码仓库与发布

代码仓库：https://gitee.com/MyLiz/he-lishas-personal-website

网站文件位于仓库根目录，默认分支为 `master`。无需构建，静态托管的发布目录直接使用仓库根目录。

如后续使用 GitHub Pages，可将网站代码同步到相应 GitHub 仓库，在 Settings → Pages 中选择实际分支和 `/ (root)`。`.nojekyll` 已包含，页面兼容仓库子路径。
其他静态托管服务同样可直接使用这些 HTML、CSS、JavaScript 和图片文件。

Gitee 仓库地址用于管理和查看代码。面试官浏览网站需要静态托管服务发布后的网页地址。

## 更新内容

- 首页介绍、经历、联系方式：编辑 `index.html`。
- 项目内容和原型链接：编辑对应案例 HTML 文件。
- 简历：编辑 `resume.html`。
- 界面图片：替换 `assets` 中的对应文件。
- 样式和交互：`styles.css`、`app.js`。

原型链接保留用户提供的 Figma 与 MasterGo 文件地址，源平台的分享可见性由文件所有者管理。网站内的案例正文与图片可直接浏览。
本地网站已连接上述 Gitee 仓库；网站的线上访问地址以静态托管平台实际发布结果为准。
