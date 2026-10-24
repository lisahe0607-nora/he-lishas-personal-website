# 何梨莎的个人简历与作品集

原生 HTML / CSS / JavaScript 静态网站，无构建步骤和后台依赖。

## 页面

- `index.html`：个人介绍、以无人机为主的精选作品、能力、工作履历和联系方式；首页独立样式为 `home.css`。
- `knowledge.html`：小白企业知识库 RAG。交付状态为原型完成、计划调整后暂停。
- `drone.html`：无人机智能调度平台，展示调度首页、任务编排、结果与联调界面的本地运行截图。
- `health.html`：醒来 APP、智能穿戴与 BI，合并为一个健康 AI 案例。
- `overseas.html`：JMChip 与 SEMIMall，合并为一个海外独立站案例。
- `resume.html`：完整简历，支持浏览器打印及保存为 PDF。

## 本地预览

在网站目录运行 `python3 -m http.server 8765`，浏览器打开 `http://localhost:8765`。
也可直接打开 `index.html`。图片、样式和页面路径均为相对路径。

## 代码仓库与发布

公开网站：https://lisahe0607-nora.github.io/he-lishas-personal-website/

GitHub托管仓库：https://github.com/lisahe0607-nora/he-lishas-personal-website

Gitee代码副本：https://gitee.com/MyLiz/he-lishas-personal-website

网站文件位于仓库根目录，默认分支为 `master`。无需构建，静态托管的发布目录直接使用仓库根目录。

当前已启用 GitHub Pages，发布源为 `master` 分支的 `/ (root)`。`.nojekyll` 已包含，页面兼容仓库子路径。GitHub托管仓库更新后自动重新发布；Gitee副本需另行同步。

Gitee 仓库地址用于管理和查看代码。面试官浏览网站需要静态托管服务发布后的网页地址。

## 更新内容

- 首页介绍、经历、联系方式：编辑 `index.html`。
- 项目内容和原型链接：编辑对应案例 HTML 文件。
- 简历：编辑 `resume.html`。
- 界面图片：替换 `assets` 中的对应文件。
- 样式和交互：`styles.css`、`app.js`。
- 首页视觉与响应布局：`home.css`（仅首页加载，不覆盖案例及简历页面）。
- 案例流程、产品结构和决策表：对应案例HTML及 `visuals.css`；健康产品触点支持点击与键盘切换，交互位于 `app.js`。

原型链接保留用户提供的 Figma 与 MasterGo 文件地址，源平台的分享可见性由文件所有者管理。网站内的案例正文与图片可直接浏览。
本地 `origin` 指向Gitee副本，`github` 指向GitHub托管仓库。案例中的图示表达产品设计与协作关系，原型交付、模拟展示和真实设备验证保持各自的状态与证据说明。

## 无人机案例素材（2026-10-24）

本次依据用户提供的本地运行版更新，仅展示截图与产品案例，不公开运行服务地址、配置或设备凭据。编排截图为未保存、未下发的预览草稿；结果图呈现真实无记录空状态；联调工具未执行模拟或真实飞行操作。图片位于 `assets/drone-*-20261024.jpg`，页面专用样式为 `drone-case.css`。
