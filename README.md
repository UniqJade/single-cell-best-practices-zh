# 单细胞最佳实践 · 简体中文镜像

本仓库是 **《Single-cell best practices》**（单细胞最佳实践）一书的**非官方简体中文翻译镜像**，由机器翻译（Argos Translate）生成静态站点后发布，仅供中文读者学习参考。

- 上游项目仓库：<https://github.com/theislab/single-cell-best-practices>
- 上游官方站点（英文原文，以其为准）：<https://www.sc-best-practices.org>

> ⚠️ **翻译免责声明**：本镜像内容由机器翻译生成并经过部分人工校对，**可能存在错误、过时或不准确之处**。任何技术细节、结论与代码请以上游英文原文为准。本镜像与上游作者、Theis 实验室无隶属关系，也未获其官方背书。

## 在线阅读

本仓库通过 GitHub Pages 提供静态站点，首页会自动跳转到前言页 `preamble.html`。

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

## 本地预览

```bash
# 在仓库根目录启动一个静态服务器
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/ （会自动跳转到 preamble.html）
```

---

如发现翻译问题，建议优先参阅[上游英文原文](https://www.sc-best-practices.org)；与原书内容相关的问题请反馈至[上游仓库](https://github.com/theislab/single-cell-best-practices)。
