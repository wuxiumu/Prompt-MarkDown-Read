推荐阅读
> [智造喵](/?name=awesome-chatgpt-prompts-zh/README)




以下是 GitHub 上一些热门且高质量的 AI 提示词（prompts）和提示工程相关的开源项目：

# 更好的了解AI提示词prompts工程

## **⭐ 主打“Awesome Prompt Engineering”资源合集**





1.  [**promptslab/Awesome‑Prompt‑Engineering**](/?name=Awesome-Prompt-Engineering&lang=zh)


   - 收录了 GPT、ChatGPT、PaLM 等主流模型的论文、工具、教程、示例等资源。
   - 目前拥有约 4,600 颗 ⭐（星标），社区活跃贡献众多 。



2.  [**dair‑ai/Prompt‑Engineering‑Guide**](/?name=Prompt-Engineering-Guide&lang=zh)

   - 集合最新论文、教学指南、笔记本、实战技巧，涵盖零样本、Chain‑of‑Thought、几种语言支持等。
   - 约 58k ⭐，是非常全面的 prompt 工程参考  。



3.  [**f/awesome‑chatgpt‑prompts**](/?name=awesome-chatgpt-prompts&lang=zh)

   - 专门针对 ChatGPT 的提示词精选合集，适合直接拿来使用或改进。
   - 社区鼓励用户自行贡献 prompts  。



4.  [**ai‑boost/awesome‑prompts**](/?name=awesome‑prompts&lang=zh)


   - 收录自 GPT Store 的优质 prompts，有攻防、提示设计等分类，约 6.4k ⭐ 。







------





## **🛠 工具与实战项目**





- **NirDiamant/Prompt_Engineering**：广泛覆盖基本到高级的 prompt 技术和实用案例，适合从入门到深究 。
- **truthofmatthew/prompt‑design‑and‑engineering‑techniques**：讲解 prompt 设计原则、迭代流程、范例示范，很适合想系统理解 prompt 工程的人 。





------





## **📚 专门术语与模式库**





- **raphaelmansuy/…/prompt_engineering_patterns**：整理 prompt 工程模式，以结构化方式复用常见技巧 。
- **Brex/prompt‑engineering**：企业级指南，覆盖策略、安全建议、Prompt Hacking 等企业实战要点 。





------





### **如何选择？**





- 想要一次性掌握 prompt 工程大盘？推荐 **dair‑ai/Prompt‑Engineering‑Guide** + **promptslab/Awesome‑Prompt‑Engineering**。
- 想做 ChatGPT 定制、prompt实战？试试 **awesome‑chatgpt‑prompts**。
- 对体系化、模式化设计感兴趣？可以看看 **prompt_engineering_patterns**。





如果你想了解某个项目的具体内容，比如目录结构、示例、使用方法，告诉我，我可以帮你打开对应 GitHub 页面并解析～




# 📖如何制作一个适合阅读的HTML页面

聊得好！你想要的是**一个适合阅读的HTML页面**，内容支持Markdown，且**内容由AJAX拉取后渲染**。

这个方案很适合博客、技术文档、公告、日报、产品手册、知识库等场景。



下面我快速给你梳理一下**可选需求点、成熟做法、以及简单可落地的实现建议**。



------





## **1. 核心需求清单**





**基础功能**



- 页面结构简洁、专注阅读体验
- 支持Markdown语法，内容美观排版
- 内容异步ajax加载（比如GET /api/article?id=123）
- 自动渲染markdown为html并插入页面





**可选增强（很简单但很加分）**



- 响应式，手机和PC都好看
- 主题切换（暗/亮）
- 自动目录（TOC）
- 代码高亮（markdown里有代码块就加颜色）
- 字体优化、段落行高、正文居中/适当留白
- 支持图片、表格、引用、任务列表、链接等常用markdown元素
- 加载动画/过渡，拉取慢时有loading提示
- 错误/空内容友好提示
- 支持复制标题/段落、长按分享等小细节





**进阶一点点**



- 文章支持分页/切换
- 支持评论、打赏按钮
- 阅读进度条
- “返回顶部”悬浮按钮
- 支持SEO（meta标题、描述、结构化数据）





------





## **2. 简单且优秀的“现成技术选型”**





- **markdown-it**

  纯JS，轻量，扩展性强，支持插件。最推荐（npm有CDN可直接引入）。

- **highlight.js**

  配合代码高亮，支持多种主题，零依赖。

- **tocbot/toc.js**

  可选，加自动目录，不依赖后端。





> 这些库都能一行代码搞定，无需webpack、vite，直接CDN用。



------





## **3. 最小可行版本（MVP）推荐：**





- 使用markdown-it渲染markdown
- highlight.js代码高亮
- 结构布局极简、留白足够、字体大点
- ajax拉内容、loading提示，内容渲染出错友好提示





**这个只要30行js+50行html/css就能交付！**

扩展其它小功能后续随时加。



------





## **4. 一些业界“阅读体验优秀”的细节建议**





- 字体：正文16-20px，行高1.6-2.0，适合长时间看
- 居中排版+两侧留白，正文宽度650-800px
- 代码块颜色区分、可复制
- 目录悬浮或页内锚点
- 段落之间留适当空间，不要太密集
- 图片自适应宽度，表格可横滑
- 暗黑模式一键切换
- 加载慢时loading骨架或转圈
- 所有按钮大而易点，适合触屏





------





## **5. 典型“非常简单且优秀”的实现流程**





1. **页面结构** `#content 容器 、loading/空态div`
2. **引入 markdown-it 和 highlight.js CDN**
3.  **用ajax获取markdown文本**
4.  **渲染成html并插入**
5.  **调用highlight.js处理所有代码块**





------

**举例（只为理解，不是最终代码）：**



```
fetch('/api/article?id=123')
  .then(res => res.text())
  .then(md => {
    let html = window.markdownit().render(md);
    document.getElementById('content').innerHTML = html;
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });
```



------





## **6. 开发顺序建议**





1. 页面骨架+markdown渲染
2. ajax加载内容+loading/出错提示
3. 代码高亮/自动目录
4. 响应式优化/主题
5. 细节体验提升





------





## **7. 可参考的极简阅读型站点**





- v2ex.com（主题帖页面）
- GitHub README渲染
- 简书、知乎专栏
- 掘金文章页





------



**如果你想优先“快上线”，推荐先把**：



- ajax拉内容
- markdown-it渲染
- highlight.js高亮
- 响应式基础css





这几个点搞定，体验已经“专业”！



------



有任何想加的细节、功能，都可以点名告诉我——比如目录、进度条、评论、打赏按钮、暗黑切换等。

聊定最终需求后，我可直接帮你写一个“秒能用+颜值高”的html demo！



1. 页面骨架+markdown渲染
2. 引入 markdown-it 和 highlight.js CDN
3. ajax加载内容+loading/出错提示
4. 代码高亮/自动目录
5. 响应式优化/主题
6. 字体：正文16-20px，行高1.6-2.0，适合长时间看
7. 居中排版+两侧留白，正文宽度650-800px
8. 代码块颜色区分、可复制
9. 目录悬浮或页内锚点
10. 段落之间留适当空间，不要太密集
11. 图片自适应宽度，表格可横滑
12. 暗黑模式一键切换
13. 加载慢时loading骨架或转圈
14. 所有按钮大而易点，适合触屏
15. 文章支持分页/切换
16. 支持评论、打赏按钮
17. 阅读进度条
18. “返回顶部”悬浮按钮
19. 主题切换（暗/亮）
20. 支持SEO（meta标题、描述、结构化数据）