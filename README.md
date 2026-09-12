# 单细胞最佳实践 · 简体中文镜像

本仓库是 **《Single-cell best practices》**（单细胞最佳实践）一书的**非官方简体中文社区镜像**，由社区维护并经过多轮审校，仅供中文读者学习参考。

- 📖 **在线阅读**：<https://uniqjade.github.io/single-cell-best-practices-zh/>
- 📦 v2 离线包：[0.2.0-zh](https://github.com/UniqJade/single-cell-best-practices-zh/releases/tag/0.2.0-zh)。历史版本 [`0.1.0-zh`](https://github.com/UniqJade/single-cell-best-practices-zh/releases/tag/0.1.0-zh) 提供 v1 中文 PDF 和离线包；v2 中文 PDF 尚未提供。
- 上游项目仓库：<https://github.com/theislab/single-cell-best-practices>
- 上游官方站点（英文原文，以其为准）：<https://www.sc-best-practices.org>

> ⚠️ **社区镜像免责声明**：本镜像由社区维护并经过多轮审校，**仍可能存在错误、滞后或不准确之处**。任何技术细节、结论与代码请以上游英文原文为准。本镜像与上游作者、Theis 实验室无隶属关系，也未获其官方背书。

## 在线阅读

直接打开在线地址即可阅读 50 页中文内容。左侧目录用于章节导航，站内搜索支持 `Ctrl` / `⌘` + `K`。

站点使用 Jupyter Book v2 / MyST，首屏 HTML、页面数据与搜索内容同步中文化。原有章节 URL 会重定向到对应的新页面；部分旧片段链接无法定位到原位置，已删除标题的入口会回到同章章首。

正文文字链接与相邻文字留出分隔空格。每章核心术语首次出现时给出中文、完整英文名称及通行缩写；关键要点与主正文分别释义。术语链接支持悬停查看中文定义和跳转术语表。

## 关于原书与署名

原书《Single-cell best practices》由 Theis 实验室（Theislab）及单细胞社区众多贡献者编写、维护，系统介绍了跨模态单细胞数据分析的最佳实践。著作权与署名归原作者所有。

如需在学术工作中引用，请引用上游论文（以上游仓库 README 提供的信息为准）：

> Heumos, L., Schaar, A.C., Lance, C. et al. *Best practices for single-cell analysis across modalities.* Nature Reviews Genetics 24, 550–572 (2023).

## 许可证

原书以 **Apache License 2.0** 授权（`Copyright 2021 Theislab`）。本中文镜像沿用相同许可证发布，完整条款见本仓库 [`LICENSE`](./LICENSE)。

## 内容来源与同步状态

- 本次迁移对应上游源码提交 [`483cef24f2497cbb20c4eabc4cc6a469b97ce52a`](https://github.com/theislab/single-cell-best-practices/commit/483cef24f2497cbb20c4eabc4cc6a469b97ce52a)。代码、公式及 notebook 保存输出保留；构建网站时不重新执行分析 notebook。
- 在线站点随本仓库 `main` 分支的静态文件更新。Release 资产是独立版本快照，不会随分支自动更新。
- 翻译、构建工具与本地审校记录保存在独立工作仓库，本仓库保存公开站点和说明。
- 本镜像不保证与上游实时同步；维护时先比对上游变更，再对受影响页面做中文审校与发布。

## 本地 / 离线阅读

使用 v2 离线包时，解压 `single-cell-best-practices-zh-offline.zip`，在解压后的包根目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后打开 <http://127.0.0.1:8000/single-cell-best-practices-zh/>。请通过本地 HTTP 服务阅读，以便章节跳转和搜索正常加载。正文、图片、字体和公式渲染可离线使用；书中数据下载、外部文献和反馈链接仍需网络。

克隆本仓库预览时，请保留相同的目录名称与访问子路径，在包含 `single-cell-best-practices-zh` 的父目录启动服务：

```bash
git clone https://github.com/UniqJade/single-cell-best-practices-zh.git single-cell-best-practices-zh
python3 -m http.server 8000 --bind 127.0.0.1
```

同样打开 <http://127.0.0.1:8000/single-cell-best-practices-zh/>。

AIR 多模态整合章节引用的 `connectionplot.pdf` 未由上游提供，阅读页已明确说明缺失。该说明不影响其余内容阅读。

## 反馈问题

- **中文镜像问题**（措辞、术语、漏译、页面滞后等）：请先参阅 [上游英文原文](https://www.sc-best-practices.org)，再在 [本仓库提交 Issue](https://github.com/UniqJade/single-cell-best-practices-zh/issues/new)。
- **原文内容问题**（科学错误、代码 bug、过时信息等）：请反馈至 [上游仓库](https://github.com/theislab/single-cell-best-practices/issues/new)；不熟悉英文的读者也可先在本仓库反馈。
