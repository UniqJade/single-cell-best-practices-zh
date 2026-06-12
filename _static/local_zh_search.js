(() => {
  const SEARCH_PAGE = "search.html";
  const INDEX_PATH = "_static/local_zh_search_index.json";
  const script = document.currentScript || document.querySelector('script[src$="local_zh_search.js"]');
  const scriptUrl = new URL(script ? script.getAttribute("src") : INDEX_PATH, document.baseURI);
  const rootUrl = new URL("../", scriptUrl);
  const indexUrl = new URL(INDEX_PATH, rootUrl);
  const searchPageUrl = new URL(SEARCH_PAGE, rootUrl);
  let indexPromise = null;

  function normalize(text) {
    return (text || "").toString().toLowerCase().replace(/\s+/g, " ").trim();
  }

  function queryTerms(query) {
    return normalize(query).split(/[\s,，.。;；:：!?！？、()[\]{}<>《》"'“”‘’/\\|]+/).filter(Boolean);
  }

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(indexUrl).then((response) => {
        if (!response.ok) throw new Error(`中文搜索索引加载失败: ${response.status}`);
        return response.json();
      });
    }
    return indexPromise;
  }

  function scorePage(page, query, terms) {
    const title = normalize(page.title);
    const section = normalize(page.section);
    const text = normalize(page.text);
    const haystack = `${title} ${section} ${text}`;
    let score = 0;
    if (query && haystack.includes(query)) score += 100;
    for (const term of terms) {
      if (!term) continue;
      if (title.includes(term)) score += 40;
      if (section.includes(term)) score += 12;
      if (text.includes(term)) score += 6;
    }
    return score;
  }

  function makeSnippet(page, query, terms) {
    const text = page.text || "";
    const lowered = text.toLowerCase();
    const needles = [query, ...terms].map(normalize).filter(Boolean);
    let index = -1;
    for (const needle of needles) {
      index = lowered.indexOf(needle);
      if (index >= 0) break;
    }
    if (index < 0) index = 0;
    const start = Math.max(0, index - 70);
    const end = Math.min(text.length, index + 180);
    return `${start > 0 ? "..." : ""}${text.slice(start, end)}${end < text.length ? "..." : ""}`;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function setText(parent, tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    parent.appendChild(node);
    return node;
  }

  async function renderSearch(query) {
    const container = document.getElementById("search-results");
    if (!container) return;
    clear(container);
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) {
      setText(container, "p", "local-zh-search-summary", "请输入关键词搜索 50 个中文教程页面。");
      return;
    }

    try {
      const index = await loadIndex();
      const terms = queryTerms(normalizedQuery);
      const matches = (index.pages || [])
        .map((page) => ({ page, score: scorePage(page, normalizedQuery, terms) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 30);

      setText(container, "p", "local-zh-search-summary", `找到 ${matches.length} 个结果，索引范围 ${index.page_count || 0} 个教程页面。`);
      if (!matches.length) return;

      const list = document.createElement("ol");
      list.className = "local-zh-search-results";
      for (const { page } of matches) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = new URL(page.href, rootUrl).href;
        link.textContent = page.title || page.href;
        item.appendChild(link);
        if (page.section) setText(item, "div", "local-zh-search-section", page.section);
        setText(item, "p", "local-zh-search-snippet", makeSnippet(page, normalizedQuery, terms));
        list.appendChild(item);
      }
      container.appendChild(list);
    } catch (error) {
      setText(container, "p", "local-zh-search-error", error.message || "中文搜索不可用。");
    }
  }

  function installStyles() {
    if (document.getElementById("local-zh-search-style")) return;
    const style = document.createElement("style");
    style.id = "local-zh-search-style";
    style.textContent = `
      .local-zh-search-results { padding-left: 1.25rem; }
      .local-zh-search-results li { margin: 0 0 1rem; }
      .local-zh-search-results a { font-weight: 600; }
      .local-zh-search-section { color: var(--pst-color-text-muted, #6c757d); font-size: 0.9rem; margin-top: 0.15rem; }
      .local-zh-search-snippet { margin: 0.2rem 0 0; }
      .local-zh-search-error { color: var(--pst-color-danger, #dc3545); }
    `;
    document.head.appendChild(style);
  }

  function wireSearchForms() {
    document.querySelectorAll("form.bd-search").forEach((form) => {
      form.setAttribute("action", searchPageUrl.href);
      form.setAttribute("method", "get");
      const input = form.querySelector('input[name="q"]');
      if (input) {
        input.setAttribute("placeholder", "搜索本书...");
        input.setAttribute("aria-label", "搜索本书...");
      }
      form.addEventListener("submit", (event) => {
        if (!location.pathname.endsWith("/search.html")) return;
        event.preventDefault();
        const query = input ? input.value : "";
        const url = new URL(location.href);
        url.searchParams.set("q", query);
        history.replaceState(null, "", url);
        renderSearch(query);
      });
    });
  }

  function boot() {
    installStyles();
    wireSearchForms();
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    document.querySelectorAll('input[name="q"]').forEach((input) => { input.value = query; });
    const heading = document.querySelector(".bd-search-container h1");
    if (heading) heading.textContent = "搜索";
    renderSearch(query);
    window.setTimeout(() => renderSearch(query), 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();