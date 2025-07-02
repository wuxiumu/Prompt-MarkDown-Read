// ========== 主题与字体控制 ==========
function setSEOMeta(title, desc) {
  document.title = title ? title + " - Prompt-Markdown" : "Prompt-Markdown";
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', desc || title || 'Markdown文章阅读');
}
function setSchemaOrg({title, desc, date, url, author}) {
  const old = document.getElementById('schema-article');
  if (old) old.remove();
  let data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": desc,
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": author || "Aric"
    },
    "mainEntityOfPage": url || location.href
  };
  let script = document.createElement('script');
  script.type = "application/ld+json";
  script.id = "schema-article";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
const themeBtn = document.getElementById('themeBtn');
function applyTheme(theme) {
  if(theme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀️';
    localStorage.setItem('md-theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    themeBtn.textContent = '🌙';
    localStorage.setItem('md-theme', 'light');
  }
}
themeBtn.onclick = function() {
  let current = localStorage.getItem('md-theme');
  if(current === 'dark') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }
};
applyTheme(localStorage.getItem('md-theme') === 'dark' ? 'dark' : 'light');

// 字号调节
const root = document.documentElement;
const fontStep = 2, fontMin = 11, fontMax = 48, defaultFontSize = 17.5;
function applyFontSize(size) {
    // id = content
  document.getElementById('content').style.fontSize = size + 'px';
  root.style.setProperty('--main-font-size', size + 'px');
  localStorage.setItem('md-font-size-val', size);
}
function getCurrentFontSize() {
  return Number(localStorage.getItem('md-font-size-val')) || defaultFontSize;
}
document.getElementById('fontSmall').onclick = () => applyFontSize(Math.max(getCurrentFontSize() - fontStep, fontMin));
document.getElementById('fontLarge').onclick = () => applyFontSize(Math.min(getCurrentFontSize() + fontStep, fontMax));
document.getElementById('fontNormal').onclick = () => applyFontSize(defaultFontSize);
applyFontSize(getCurrentFontSize());

// 字体选择
const fontFamilySel = document.getElementById('fontFamily');
function applyFontFamily(ff) {
  document.body.style.fontFamily = (ff ? ff + "," : "") +
    "'HarmonyOS Sans','PingFang SC','Microsoft YaHei','Source Han Sans SC','Helvetica Neue','Helvetica','Arial',sans-serif";
  localStorage.setItem('md-font-family', ff || "");
}
fontFamilySel.onchange = function() { applyFontFamily(this.value); };
fontFamilySel.value = localStorage.getItem('md-font-family') || "";
applyFontFamily(fontFamilySel.value);

// ========== 目录功能 ==========
const toc = document.getElementById('toc');
const tocToggleBtn = document.getElementById('tocToggleBtn');
let tocVisible = localStorage.getItem('md-toc-visible');
if (tocVisible === null) tocVisible = true; // 默认显示目录
else tocVisible = tocVisible === '1';
function setTocVisible(show) {
    tocVisible = show;
    localStorage.setItem('md-toc-visible', show ? '1' : '0');
    tocToggleBtn.textContent = show ? '目录' : '显示目录';
    var tocc = document.getElementById('toc');
    if(tocc){
        tocc.style.display = show ? 'block' : 'none'
    }
   tocFixed()
}
tocToggleBtn.onclick = function () {
  setTocVisible(!tocVisible);
};
setTocVisible(tocVisible); // 页面加载时默认显示目录
function tocFixed(){
  const tocElm = document.querySelector('.table-of-contents');
  if(tocElm) {
    tocElm.style.position = 'fixed';
    tocElm.style.top = '90px';
    // tocElm.style.width = tocElm.offsetWidth + 'px';
    tocElm.style.display = (1==localStorage.getItem('md-toc-visible'))?"none":"block";
  }
}
window.addEventListener('scroll', () => {
  const hs = document.querySelectorAll('#content h2,h3,h4');
  const links = document.querySelectorAll('#toc a');
  let idx = 0, fromTop = window.scrollY + 88;
  for(let i=0; i<hs.length; i++) if(hs[i].offsetTop < fromTop) idx = i;
  links.forEach(a=>a.classList.remove('active'));
  if(links[idx]) links[idx].classList.add('active');
});

// ========== 工具栏 ==========
const toolbar = document.querySelector('.toolbar');
const toolbarToggle = document.getElementById('toolbarToggle');
let toolbarVisible = localStorage.getItem('md-toolbar-visible');
if (toolbarVisible === null) toolbarVisible = true;
else toolbarVisible = toolbarVisible === '1';
function showToolbar(show) {
  toolbar.style.display = show ? 'flex' : 'none';
  localStorage.setItem('md-toolbar-visible', show ? '1' : '0');
}
toolbarToggle.onclick = function () {
  toolbarVisible = !toolbarVisible;
  showToolbar(toolbarVisible);
};
function updateToolbarDisplay() {
  if (window.innerWidth > 700) {
    toolbarToggle.style.display = '';
    toolbar.style.display = toolbarVisible ? 'flex' : 'none';
  } else {
    toolbarToggle.style.display = 'none';
    toolbar.style.display = 'none';
  }
}
updateToolbarDisplay();
window.addEventListener('resize', updateToolbarDisplay);

// ========== 文章加载与渲染 ==========
// const md = window.markdownit()
//   .use(window.markdownItAnchor)
//   .use(window.markdownItTocDoneRight, {containerId:'toc', listType:'ul'});
const md = window.markdownit({
  html: true
})
  .use(window.markdownItAnchor)
  .use(window.markdownItTocDoneRight, {containerId:'toc', listType:'ul'});
var apiUrl = './run.php?ddd=1';
var params = new URLSearchParams(window.location.search);
if (params.get('name')) {
  apiUrl += '&name=' + params.get('name');
}
if (params.get('lang')) {
  apiUrl += '&lang=' + params.get('lang');
}


const wrap = document.querySelector('.wrap');
const loading = document.getElementById('loading');
const content = document.getElementById('content');
const meta = document.getElementById('meta');
const title = document.getElementById('title');

function renderArticle(mdText){
  let html = md.render(mdText);
  content.innerHTML = html;
  let h1 = content.querySelector('h1');
  let titleText = h1 ? h1.textContent : "Markdown文章";
  let descText = "";
  let p = content.querySelector('p');
  if (p) descText = p.textContent.trim().slice(0, 140);
  setSEOMeta(titleText, descText);
  setSchemaOrg({
    title: titleText,
    desc: descText,
    date: new Date().toISOString().split('T')[0],
    url: location.href,
    author: "Aric"
  });
  if(h1) { title.textContent = h1.textContent; h1.style.display='none'; }
  meta.innerHTML = `最后更新时间：${new Date().toLocaleDateString()}`;
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
    let btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = '复制';
    btn.onclick = function(){
      navigator.clipboard.writeText(el.textContent);
      btn.textContent = '已复制!';
      setTimeout(()=>btn.textContent='复制',1100);
    };
    el.parentNode.style.position = 'relative';
    el.parentNode.appendChild(btn);
  });
  document.querySelectorAll('#content img').forEach(img=>img.loading='lazy');
  setTocVisible(tocVisible);
}
function fetchArticle(){
  loading.style.display = 'flex';
  wrap.style.display = 'none';
  fetch(apiUrl)
    .then(r => r.ok ? r.text() : Promise.reject())
    .then(md => {
      loading.style.display = 'none';
      wrap.style.display = 'block';
      renderArticle(md);
    })
    .catch(() => {
      loading.innerHTML = '<div style="color:#f43f5e;">文章加载失败或不存在</div>';
    });
}
fetchArticle();

// ========== 返回顶部 ==========
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>200?'block':'none';});
topBtn.onclick = ()=>window.scrollTo({top:0,behavior:'smooth'});

// ========== 打赏弹窗 ==========
const rewardBtn = document.getElementById('rewardBtn');
const rewardModal = document.getElementById('rewardModal');
const rewardFrame = document.getElementById('rewardFrame');
const rewardClose = document.getElementById('rewardClose');
const rewardUrl = "https://pay.gua.hk/test_wechat_pay/"; // 改为你的打赏页面链接

rewardBtn.onclick = function(e){
  e.preventDefault();
  rewardFrame.src = rewardUrl;
  rewardModal.style.display = 'flex';
};
rewardClose.onclick = function(){
  rewardModal.style.display = 'none';
  rewardFrame.src = '';
};
rewardModal.onclick = function(e){
  if(e.target === rewardModal) {
    rewardModal.style.display = 'none';
    rewardFrame.src = '';
  }
};