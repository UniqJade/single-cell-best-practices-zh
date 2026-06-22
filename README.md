# 单细胞最佳实践 · 简体中文镜像

本仓库是 **《Single-cell best practices》**（单细胞最佳实践）一书的**非官方简体中文翻译镜像**，由机器翻译（Argos Translate）生成静态站点后发布，仅供中文读者学习参考。

- 📖 **在线阅读（推荐，无需下载）**：<https://uniqjade.github.io/single-cell-best-practices-zh/>
- 📦 离线 / PDF 下载：见 [Releases `0.1.0-zh`](https://github.com/UniqJade/single-cell-best-practices-zh/releases/tag/0.1.0-zh)（整本中文 PDF + 站点离线包）
- 上游项目仓库：<https://github.com/theislab/single-cell-best-practices>
- 上游官方站点（英文原文，以其为准）：<https://www.sc-best-practices.org>

> ⚠️ **翻译免责声明**：本镜像内容由机器翻译生成并经过部分人工校对，**可能存在错误、过时或不准确之处**。任何技术细节、结论与代码请以上游英文原文为准。本镜像与上游作者、Theis 实验室无隶属关系，也未获其官方背书。

## 在线阅读

**无需克隆或下载本仓库**，浏览器直接打开即可阅读：

### 👉 <https://uniqjade.github.io/single-cell-best-practices-zh/>

首页会自动跳转到前言页 `preamble.html`，可用左侧目录在各章间导航，并支持站内搜索（`Ctrl` / `⌘` + `K`）。

## 关于原书与署名

原书《Single-cell best practices》由 Theis 实验室（Theislab）及单细胞社区众多贡献者编写、维护，系统介绍了跨模态单细胞数据分析的最佳实践。著作权与署名归原作者所有。

如需在学术工作中引用，请引用上游论文（以上游仓库 README 提供的信息为准）：

> Heumos, L., Schaar, A.C., Lance, C. et al. *Best practices for single-cell analysis across modalities.* Nature Reviews Genetics 24, 550–572 (2023).

## 许可证

原书以 **Apache License 2.0** 授权（`Copyright 2021 Theislab`）。本中文镜像沿用相同许可证发布，完整条款见本仓库 [`LICENSE`](./LICENSE)。

## 内容来源与构建说明

- 站点为上游 Sphinx / Jupyter-Book 生成的静态页面的中文翻译版本，导航、样式、图片、搜索等资源均为相对路径，可独立部署。
- 每个页面的 `<head>` 中保留了 `source_url`（原文页面地址）与 `translation`（翻译方式）等来源标注元信息，便于溯源比对。
- 翻译/构建脚本与本地工作流文件保留在作者的工作仓库中，**未包含在本发布仓库内**。

## 本地 / 离线预览（可选）

一般直接用上面的在线地址即可；如需离线阅读，可下载 [Release](https://github.com/UniqJade/single-cell-best-practices-zh/releases/tag/0.1.0-zh) 中的站点离线包，或在本仓库根目录启动静态服务器：

```bash
# 在仓库根目录启动一个静态服务器
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/ （会自动跳转到 preamble.html）
```

## 反馈问题

- **翻译问题**（措辞不当、术语错误、漏译等）：请在[本仓库提交 Issue](https://github.com/UniqJade/single-cell-best-practices-zh/issues/new)。
- **原文内容问题**（科学错误、代码 bug、过时信息等）：请反馈至[上游仓库](https://github.com/theislab/single-cell-best-practices/issues/new)；不熟悉英文的读者也可在本仓库提交 Issue，维护者会整理后转报上游。
