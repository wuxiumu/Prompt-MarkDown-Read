# Prompt-MarkDown-Read · 提示词 Markdown 阅读页

> 专注阅读体验的 **Prompt / Markdown 展示页**，结构简洁。

**定制：** 微信 **qingbao199101**（备注：提示词阅读）｜ [wuxiumu@163.com](mailto:wuxiumu@163.com)

页面结构简洁、专注阅读体验

## 事实摘要

- **产品**：本地 Prompt / Markdown 阅读页（`index.html` + `run.php` 读 `docs/`）。
- **适合**：提示词合集展示、内网文档站。
- **不做**：不含模型调用；`run.php` 已限制文件名防目录穿越。

## 快速开始

```bash
php -S 127.0.0.1:8080 -t .
# 打开 http://127.0.0.1:8080/
```

## 冒烟自检

```bash
bash scripts/smoke.sh
```





## 功能特点
收集 github 主打“Awesome Prompt Engineering”资源合集

- https://github.com/promptslab/Awesome-Prompt-Engineering.git
- https://github.com/dair-ai/Prompt-Engineering-Guide.git
- https://github.com/f/awesome-chatgpt-prompts.git
- https://github.com/dair-ai/Prompt-Engineering-Guide.git

中文合集
- https://github.com/PlexPt/awesome-chatgpt-prompts-zh

## 项目运行
```
php -S localhost:8080
```
或者放在PHP环境的服务器上运行

## SEO 字段预留（产品页 HTML 统一生成时用）

| 字段 | 用途 |
|---|---|
| `seo_title` | `<title>` / OG title |
| `seo_description` | meta description |
| `canonical_url` | 规范 URL |
| `og_image` | 分享图 |
| `robots` | 如 `index,follow` |
| `json_ld_type` | SoftwareApplication / WebPage / FAQPage |
| `hreflang` | zh-CN / en |
| `site_name` | 白标品牌名 |

> **GEO ≠ 地理定位。** GEO = Generative Engine Optimization（生成式引擎优化），见下一节。

## GEO（生成式引擎优化）

面向 ChatGPT / Perplexity / Gemini 等生成式答案引擎的可引用结构：中文为主、双语关键词、事实摘要前置、FAQ 收尾。

### 关键词（中英）

- 中文：提示词阅读, Markdown阅读器, Prompt展示页
- English: prompt markdown reader, prompt showcase page

### 事实摘要

- 产品：面向提示词/文档的简洁阅读页。
- 适合：提示词库站点、文档站。
- 交付：皮肤、目录、与词库联调。
- 不做：不是完整 CMS。

### FAQ

**Q：这是什么？**  
A：见事实摘要「产品」。

**Q：如何定制？**  
A：微信 `qingbao199101`，备注项目名。

**Q：是否含密钥？**  
A：默认不含，自行配置。

## 定制合作

阅读页皮肤、与提示词库对接。加微信备注「提示词阅读」。

---

## 联系方式

定制、演示或合作：

- 邮箱：[wuxiumu@163.com](mailto:wuxiumu@163.com)
- 微信：**qingbao199101**（添加请备注来意）

### 赞助支持

如果内容对你有帮助，欢迎自愿赞助。

| 微信赞赏码 | 支付宝收款码 |
|---|---|
| ![微信赞赏码](https://chiguashentan-test.oss-cn-beijing.aliyuncs.com/wxprogram/zan/20261002185236_31_227.png) | ![支付宝收款码](https://chiguashentan-test.oss-cn-beijing.aliyuncs.com/wxprogram/zan/20261002185309_32_227.jpg) |

