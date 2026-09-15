# 单细胞最佳实践 · 简体中文版

《Single-cell best practices》的社区中文译本，围绕单细胞数据分析的实际流程，介绍每一步要解决的问题、常用方法及其使用场景，并结合代码、图表和案例帮助理解。

内容从单细胞 RNA 测序的基础概念与数据处理出发，延伸到细胞类型识别、轨迹推断、实验条件比较，以及空间组学、免疫受体库和多模态分析。你可以从头学习，也可以在分析遇到具体问题时按章节查阅。

## 开始阅读

- **[在线阅读](https://uniqjade.github.io/single-cell-best-practices-zh/)**：无需下载，可按目录浏览，也可搜索书中内容。
- **[下载中文 PDF](https://github.com/UniqJade/single-cell-best-practices-zh/releases/download/0.2.1-zh/single-cell-best-practices-zh-v2.pdf)**：全书 1,048 页，约 118 MB，下载后直接打开，适合离线阅读和做笔记。
- **[下载离线网页版](https://github.com/UniqJade/single-cell-best-practices-zh/releases/download/0.2.1-zh/single-cell-best-practices-zh-offline.zip)**：约 235 MB，保留网页目录、搜索和交互；使用方法见下方。

PDF 中的动画和交互内容以静态形式呈现，体验完整交互请使用网页版。

## 这本书适合谁

- **刚接触单细胞分析的同学**：先了解数据长什么样、分析流程有哪些步骤，再结合示例学习。
- **正在处理实验数据的研究者**：按质量控制、细胞注释、差异分析等任务查阅对应章节。
- **已有分析经验的读者**：进一步了解空间组学、免疫受体库和多模态数据的分析方法。

理解示例代码需要一定的 Python 或 R 基础，以及基本的生物学和统计学知识。书中的流程和参数应结合自己的实验设计与数据判断，不宜直接照搬。

## 主要内容

| 主题 | 可以读到什么 |
| --- | --- |
| 基础与数据处理 | 单细胞 RNA 测序、原始数据处理、数据结构与分析框架、GPU 加速 |
| 预处理与细胞识别 | 质量控制、归一化、特征选择、降维、聚类、细胞类型注释与数据整合 |
| 轨迹与实验条件 | 拟时序、RNA velocity、谱系追踪、差异基因表达、细胞组成比较、通路分析与扰动建模 |
| 生物学机制 | 基因调控网络、细胞间通讯与去卷积 |
| 染色质与空间组学 | 染色质可及性分析、空间邻域、组织区域、空间变异基因与空间去卷积 |
| 蛋白与免疫受体 | 表面蛋白数据处理、免疫受体分析、克隆型与抗原特异性 |
| 多模态分析 | 配对数据整合、不同数据模态之间的联合分析 |

完整章节见 [在线目录](https://uniqjade.github.io/single-cell-best-practices-zh/)。初次阅读可以从“介绍 → 预处理与可视化 → 识别细胞结构”开始，再按研究问题选择后续章节。

## 中文版的阅读体验

正文、章节导航和搜索界面均已中文化，代码、公式、图表及原书保存的示例输出保留。常见专业术语保留英文名称或缩写，方便对照原文、检索文献和查阅软件文档；网页版中的术语链接可用于查看解释。

当前提供在线版、离线网页版和整本 PDF。网页版适合搜索、跳转和查看交互内容；PDF 可使用目录和章节书签跳转，适合连续阅读、批注和打印。PDF 中的自测题展开显示，动画以静态图呈现，并提供原动画链接。

当前下载版本为 **0.2.1-zh**。中文内容按版本更新，并非与英文原书实时同步；引用或使用具体方法时，建议同时查阅英文原文和相关软件文档。

## 离线阅读

<details>
<summary>如何使用离线网页版</summary>

只想下载后直接阅读，选择上面的 PDF 即可。

离线网页版需要电脑已安装 Python 3。解压下载的 ZIP，在解压后的文件夹中打开终端，运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后在浏览器打开 <http://127.0.0.1:8000/single-cell-best-practices-zh/>。阅读期间保持终端开启，结束后按 Ctrl+C 关闭。书中的外部文献和数据下载链接仍需联网。

</details>

有两点阅读差异需要留意：部分旧链接会回到章节开头，未必定位到原来的段落；免疫受体多模态整合章节的一份原始图表未由上游提供，书中保留了缺失说明。

## 原书与反馈

原书由 Theis 实验室及单细胞研究社区编写。本译本由社区独立维护，非官方中文版；翻译可能存在疏漏，如有疑问，请对照 [英文原书](https://www.sc-best-practices.org/)。

发现错译、排版或链接问题，可在 [这里反馈](https://github.com/UniqJade/single-cell-best-practices-zh/issues/new)，附上章节名称或页面链接即可。

原书及作者信息见 [原项目](https://github.com/theislab/single-cell-best-practices)。学术引用请使用原作者的论文：Heumos, L., Schaar, A.C., Lance, C. et al. *Best practices for single-cell analysis across modalities.* Nature Reviews Genetics 24, 550–572 (2023)。

本译本沿用原书的 Apache License 2.0，详见 [许可证](LICENSE)。[查看历史版本](https://github.com/UniqJade/single-cell-best-practices-zh/releases)。
