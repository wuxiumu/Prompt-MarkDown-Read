Recommended Reading
> [智造喵](/?name=awesome-chatgpt-prompts-zh/README)




Below are some popular and high-quality AI prompts and prompt engineering related open source projects on GitHub:

# Better Understanding of AI Prompt Engineering

## **⭐ Key “Awesome Prompt Engineering” Resource Collection**





1.  [**promptslab/Awesome‑Prompt‑Engineering**](/?name=Awesome-Prompt-Engineering&lang=zh)


   - Includes papers, tools, tutorials, examples, and other resources for mainstream models like GPT, ChatGPT, PaLM, etc.
   - Currently has about 4,600 ⭐ (stars), with a very active community contributing.



2.  [**dair‑ai/Prompt‑Engineering‑Guide**](/?name=Prompt-Engineering-Guide&lang=zh)

   - Collection of the latest papers, teaching guides, notebooks, practical tips, covering zero-shot, Chain-of-Thought, multiple language support, etc.
   - About 58k ⭐, a very comprehensive prompt engineering reference.



3.  [**f/awesome‑chatgpt‑prompts**](/?name=awesome-chatgpt-prompts&lang=zh)

   - A curated collection of prompts specifically for ChatGPT, suitable for direct use or improvement.
   - The community encourages users to contribute prompts.



4.  [**ai‑boost/awesome‑prompts**](/?name=awesome‑prompts&lang=zh)


   - High-quality prompts collected from GPT Store, with categories like offense/defense, prompt design, about 6.4k ⭐.







------





## **🛠 Tools and Practical Projects**





- **NirDiamant/Prompt_Engineering**: Covers basic to advanced prompt techniques and practical cases, suitable for beginners to deep learners.
- **truthofmatthew/prompt‑design‑and‑engineering‑techniques**: Explains prompt design principles, iteration processes, and example demonstrations, great for systematic understanding of prompt engineering.





------





## **📚 Terminology and Pattern Libraries**





- **raphaelmansuy/…/prompt_engineering_patterns**: Organizes prompt engineering patterns for reuse of common techniques in a structured way.
- **Brex/prompt‑engineering**: Enterprise-level guide covering strategies, security recommendations, Prompt Hacking, and other enterprise practical points.





------





### **How to Choose?**





- Want to grasp the overall prompt engineering landscape at once? Recommended **dair‑ai/Prompt‑Engineering‑Guide** + **promptslab/Awesome‑Prompt‑Engineering**.
- Want to do ChatGPT customization and prompt practice? Try **awesome‑chatgpt‑prompts**.
- Interested in systematic and pattern-based design? Check out **prompt_engineering_patterns**.






If you want to know the specific content of a project, such as directory structure, examples, usage, just tell me, I can help you open the corresponding GitHub page and analyze it~




# 📖 How to Create a Readable HTML Page

Great! What you want is **a readable HTML page**, with content supporting Markdown, and **content loaded and rendered via AJAX**.

This solution is very suitable for blogs, technical documentation, announcements, daily reports, product manuals, knowledge bases, and other scenarios.



Let me quickly outline for you **optional requirements, mature approaches, and simple implementable suggestions**.



------





## **1. Core Requirements List**





**Basic Features**



- Simple page structure, focused on reading experience
- Support Markdown syntax, beautiful content layout
- Content loaded asynchronously via ajax (e.g., GET /api/article?id=123)
- Automatically render markdown to html and insert into the page





**Optional Enhancements (simple but very valuable)**



- Responsive design, looks good on both mobile and PC
- Theme switching (dark/light)
- Automatic table of contents (TOC)
- Code highlighting (add colors for code blocks in markdown)
- Font optimization, paragraph line-height, centered content with appropriate margins
- Support images, tables, blockquotes, task lists, links, and other common markdown elements
- Loading animation/transition, show loading indicator when fetching is slow
- Friendly error/empty content messages
- Support copy title/paragraph, long press sharing, and other small details





**A bit advanced**



- Support article pagination/switching
- Support comments, tipping buttons
- Reading progress bar
- “Back to top” floating button
- Support SEO (meta title, description, structured data)





------





## **2. Simple and Excellent “Ready-made Technology Choices”**





- **markdown-it**

  Pure JS, lightweight, highly extensible, supports plugins. Highly recommended (npm and CDN available).

- **highlight.js**

  For code highlighting, supports multiple themes, zero dependencies.

- **tocbot/toc.js**

  Optional, adds automatic table of contents, no backend dependency.





> These libraries can be used with a single line of code, no need for webpack or vite, just use CDN directly.



------





## **3. Minimal Viable Version (MVP) Recommendation:**





- Use markdown-it to render markdown
- highlight.js for code highlighting
- Minimalist layout, enough margin, slightly larger fonts
- ajax to fetch content, loading indicator, friendly error messages





**This can be delivered with just 30 lines of JS + 50 lines of HTML/CSS!**

Other small features can be added later as needed.



------





## **4. Some Industry “Excellent Reading Experience” Detail Suggestions**





- Fonts: body text 16-20px, line height 1.6-2.0, suitable for long reading
- Centered layout with margins on both sides, body width 650-800px
- Code block color differentiation, copyable
- Table of contents floating or in-page anchors
- Appropriate spacing between paragraphs, not too dense
- Images auto scale width, tables horizontally scrollable
- One-click dark mode toggle
- Loading skeleton or spinner when loading is slow
- All buttons large and easy to tap, suitable for touch screens





------





## **5. Typical “Very Simple and Excellent” Implementation Process**





1. **Page structure** `#content container`, loading/empty state div
2. **Include markdown-it and highlight.js CDN**
3.  **Fetch markdown text via ajax**
4.  **Render to html and insert**
5.  **Call highlight.js to process all code blocks**





------

**Example (for understanding only, not final code):**



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





## **6. Development Order Suggestions**





1. Page skeleton + markdown rendering
2. ajax content loading + loading/error hints
3. Code highlighting / automatic TOC
4. Responsive optimization / themes
5. Detail experience improvements





------





## **7. Reference Minimal Reading Sites**





- v2ex.com (topic pages)
- GitHub README rendering
- Jianshu, Zhihu columns
- Juejin article pages





------



**If you want to “go live quickly”, it is recommended to first complete**:



- ajax content fetching
- markdown-it rendering
- highlight.js highlighting
- basic responsive CSS





These points done, the experience is already “professional”!



------



If you want to add any details or features, just name them — such as TOC, progress bar, comments, tipping buttons, dark mode toggle, etc.

Once the final requirements are confirmed, I can directly write you a “ready-to-use and beautiful” HTML demo!



1. Page skeleton + markdown rendering
2. Include markdown-it and highlight.js CDN
3. ajax content loading + loading/error hints
4. Code highlighting / automatic TOC
5. Responsive optimization / themes
6. Fonts: body text 16-20px, line height 1.6-2.0, suitable for long reading
7. Centered layout with margins on both sides, body width 650-800px
8. Code block color differentiation, copyable
9. Table of contents floating or in-page anchors
10. Appropriate spacing between paragraphs, not too dense
11. Images auto scale width, tables horizontally scrollable
12. One-click dark mode toggle
13. Loading skeleton or spinner when loading is slow
14. All buttons large and easy to tap, suitable for touch screens
15. Support article pagination/switching
16. Support comments, tipping buttons
17. Reading progress bar
18. “Back to top” floating button
19. Theme switching (dark/light)
20. Support SEO (meta title, description, structured data)