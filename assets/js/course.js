/* Course pages — course.html?c=<slug>
   One template for every course; all content comes from content.js (SITE.teaching).
   Empty fields are never displayed; no URL = no button. */
(function () {
  "use strict";
  var S = window.SITE;
  var root = document.getElementById("course");

  /* ---------- helpers (same conventions as app.js) ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isExt(url) { return /^https?:/.test(url); }
  function initials(n) { return n.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); }
  function yearKey(y) { return String(y).replace(/–/g, "-"); }
  /* Lucide v0.460.0 (ISC licence) — see assets/LICENSES.txt */
  var IC = {
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    git: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    pointer: '<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>'
  };
  function ico(name, size) {
    var s = size || 18;
    return '<svg class="ico" viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + IC[name] + "</svg>";
  }
  var NEWTAB = '<span class="sr-only"> (opens in a new tab)</span>';
  var ROLE = { CI: "Integrated lectures (CI)", CM: "Lectures (CM)", TD: "Tutorials (TD)", TDM: "Computer lab tutorials (TD machine)", TP: "Labs (TP)", Supervision: "Project supervision" };
  var LEVEL = { L1: "Bachelor's — Year 1", L2: "Bachelor's — Year 2", L3: "Bachelor's — Year 3", M1: "Master's — Year 1", M2: "Master's — Year 2" };
  var TYPE = { CI: "CI", CM: "CM", TD: "TD", TDM: "TD machine", TP: "TP", Project: "Project" };
  var TYPE_LONG = { CI: "Integrated lecture", CM: "Lecture", TD: "Tutorial", TDM: "Computer lab tutorial", TP: "Lab", Project: "Project" };
  var TYPE_ORDER = ["CM", "CI", "TD", "TDM", "TP", "Project"];
  var NAV = [
    ["home", "Home"], ["research", "Research"], ["publications", "Publications"], ["teaching", "Teaching"],
    ["service", "Service"], ["activities", "Activities"], ["collaborations", "Collaborations"], ["about", "About"]
  ];

  /* ---------- find the course ---------- */
  var list = [];
  S.teaching.filter(function (y) { return !y.draft; }).forEach(function (y) {
    y.institutions.forEach(function (inst) {
      inst.courses.forEach(function (c) { if (!c.draft && c.slug) list.push({ year: y.year, inst: inst, c: c }); });
    });
  });
  var slug = new URLSearchParams(location.search).get("c") || "";
  var idx = -1;
  list.forEach(function (x, i) { if (x.c.slug === slug) idx = i; });

  /* ---------- shared chrome: dock, menu, theme ---------- */
  function chrome() {
    if (S.person.photoBadge || S.person.photoAvatar) {
      document.querySelectorAll(".dock-brand .mono").forEach(function (m) {
        m.classList.add("has-photo");
        m.innerHTML = '<img src="' + esc(S.person.photoBadge || S.person.photoAvatar) + '" width="30" height="30" alt="" decoding="async">';
      });
    }
    document.getElementById("dockNav").innerHTML = NAV.map(function (n) {
      return '<li><a href="index.html#' + n[0] + '"' + (n[0] === "teaching" ? ' aria-current="true"' : "") + ">" + n[1] + "</a></li>";
    }).join("");
    document.getElementById("menuList").innerHTML = NAV.map(function (n, i) {
      return '<li><a href="index.html#' + n[0] + '"' + (n[0] === "teaching" ? ' aria-current="true"' : "") + '><span class="mi-n" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" + n[1] + "</a></li>";
    }).join("");
    document.getElementById("dockCurrent").textContent = "Teaching";
    if (S.backdrop) {
      document.getElementById("backdropPhoto").style.backgroundImage = "url('" + S.backdrop + "')";
      document.documentElement.classList.add("has-photo");
    }
    var dock = document.getElementById("dock"), menuBtn = document.getElementById("menuBtn"), sheet = document.getElementById("menuSheet");
    function openMenu(open) {
      sheet.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.querySelector(".menu-lbl").textContent = open ? "Close" : "Menu";
      dock.classList.toggle("menu-open", open);
      if (open) { var c = sheet.querySelector('[aria-current="true"]') || sheet.querySelector("a"); c.focus(); }
    }
    menuBtn.addEventListener("click", function () { openMenu(sheet.hidden); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) { openMenu(false); menuBtn.focus(); } });
    document.addEventListener("click", function (e) { if (!sheet.hidden && !dock.contains(e.target)) openMenu(false); });
    function setThemeLabels() {
      var night = document.documentElement.getAttribute("data-theme") === "night";
      document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
        b.setAttribute("aria-label", night ? "Switch to day mode" : "Switch to night mode");
        b.setAttribute("aria-pressed", String(night));
      });
    }
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = document.documentElement.getAttribute("data-theme") === "night" ? "day" : "night";
        document.documentElement.setAttribute("data-theme", t);
        try { localStorage.setItem("sj-theme", t); } catch (e) {}
        setThemeLabels();
      });
    });
    setThemeLabels();
    var fill = document.getElementById("scrubberFill"), ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var h = document.documentElement.scrollHeight - innerHeight;
        fill.style.transform = "scaleX(" + (h > 0 ? Math.min(1, scrollY / h) : 0) + ")";
        ticking = false;
      });
    }
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  function footer() {
    return '<footer class="foot"><p>© ' + new Date().getFullYear() + " " + esc(S.person.name) + "</p>" +
      '<a class="to-top" href="#main">Back to top <span aria-hidden="true">↑</span></a></footer>';
  }

  /* ---------- not found ---------- */
  if (idx < 0) {
    document.title = "Course not found · " + S.person.name;
    root.innerHTML = '<section class="panel card cp-missing"><p class="eyebrow">Teaching</p><h1 class="panel-title">Course not found</h1>' +
      '<p class="panel-lead">This course page does not exist or has moved.</p>' +
      '<a class="cp-btn primary" href="index.html#teaching">' + ico("left") + "<span>Back to Teaching</span></a></section>" + footer();
    chrome();
    return;
  }

  var X = list[idx], c = X.c, ykey = yearKey(X.year);
  var allCoursesHref = "index.html#teaching-" + ykey;

  /* ---------- title & description ---------- */
  document.title = (c.code ? c.code + " — " : "") + c.title + " (" + X.year + ") · " + S.person.name;
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", c.intro || c.description || (c.title + " — course page, " + X.inst.institution + ", " + X.year + "."));

  /* ---------- blocks ---------- */
  function levelBadge() {
    var levels = (c.levels || []).filter(function (l) { return LEVEL[l]; });
    if (levels.length) {
      return '<span class="lvl-badge"><b>' + levels.join(" · ") + '</b><span class="lvl-txt">' + esc(LEVEL[levels[0]]) + (c.track ? " · " + esc(c.track) : "") + "</span></span>";
    }
    return c.levelText ? '<span class="lvl-badge plain"><span class="lvl-txt">' + esc(c.levelText) + "</span></span>" : "";
  }
  function chips() {
    var out = (c.languages || []).map(function (f) { return '<li class="lang"><span class="sr-only">Language: </span>' + esc(f) + "</li>"; })
      .concat((c.tools || []).map(function (f) { return '<li class="tool"><span class="sr-only">Tool: </span>' + esc(f) + "</li>"; }))
      .concat((c.roles || []).map(function (f) { return '<li class="f"><span class="sr-only">My role: </span>' + esc(ROLE[f] || f) + "</li>"; }));
    return out.length ? '<ul class="fchips" aria-label="Language and my role">' + out.join("") + "</ul>" : "";
  }
  function actionBtn(obj, cls, icon, label, aria) {
    if (!obj || !obj.url) return "";
    var ext = isExt(obj.url);
    return '<div class="cp-action"><a class="cp-btn ' + cls + '" href="' + esc(obj.url) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ' aria-label="' + esc(aria) + (ext ? " (opens in a new tab)" : "") + '">' + ico(icon) + "<span>" + esc(label) + "</span></a>" +
      (obj.note ? '<p class="cp-note">' + esc(obj.note) + "</p>" : "") + "</div>";
  }
  function header() {
    var ill = window.COURSE_ILLUSTRATIONS && c.illustration && window.COURSE_ILLUSTRATIONS[c.illustration];
    var chatNote = c.chat && c.chat.url ? (c.chat.note || "Any question about the course is welcome here. Please be respectful; do not share personal data.") : "";
    var actions =
      actionBtn(c.moodle, "primary", "book", "Moodle", "Moodle course space") +
      actionBtn(c.website, "", "globe", c.website && c.website.label || "Course website", "Official course website") +
      actionBtn(c.chat && c.chat.url ? { url: c.chat.url, note: chatNote } : null, "", "chat", "Course discussion", "Course discussion forum");
    return '<section class="card cp-hero" aria-labelledby="cp-title">' +
      (ill ? '<div class="cp-ill">' + ill + "</div>" : "") +
      '<div class="cp-hero-body">' +
        '<div class="cp-id">' +
          '<div class="course-top">' + levelBadge() + (c.code ? '<span class="code">' + esc(c.code) + "</span>" : "") + "</div>" +
          (c.scheduled ? '<p class="sched"><span class="sched-dot" aria-hidden="true"></span>Scheduled teaching</p>' : "") +
          (c.officialName ? '<p class="official" lang="fr">' + esc(c.officialName) + "</p>" : "") +
          '<h1 class="cp-title" id="cp-title">' + esc(c.title) + "</h1>" +
          '<p class="cp-meta">' + esc(X.inst.institution) + ' <span aria-hidden="true">·</span> ' + esc(X.year) + (c.termNote ? ' <span aria-hidden="true">·</span> ' + esc(c.termNote) : "") + "</p>" +
          chips() +
        "</div>" +
        (actions ? '<div class="cp-actions">' + actions + "</div>" : "") +
      "</div></section>";
  }
  function intro() {
    var obj = (c.objectives || []).filter(Boolean), pre = (c.prerequisites || []).filter(Boolean);
    var left =
      (c.intro ? '<h3 class="cp-h3">Overview</h3><p class="cp-p">' + esc(c.intro) + "</p>" : "") +
      (obj.length ? '<h3 class="cp-h3">Learning objectives</h3><ul class="cp-list">' + obj.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" : "") +
      (c.approach ? '<h3 class="cp-h3">Teaching approach</h3><p class="cp-p">' + esc(c.approach) + "</p>" : "") +
      (pre.length ? '<h3 class="cp-h3">Prerequisites</h3><ul class="cp-list">' + pre.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" : "") +
      (c.assessment ? '<h3 class="cp-h3">Assessment</h3><p class="cp-p">' + esc(c.assessment) + "</p>" : "");
    var team = (c.team || []).filter(function (p) { return p.name; });
    var right = team.length ? '<aside class="cp-team" aria-labelledby="cp-team-h"><h3 class="cp-h3" id="cp-team-h">Teaching team</h3><ul>' + team.map(function (p) {
      return '<li class="cp-person' + (p.me ? " me" : "") + '"><span class="cp-avatar" aria-hidden="true">' + esc(initials(p.name)) + '</span><span class="cp-pname"><b>' + esc(p.name) + "</b>" +
        (p.role ? '<span class="cp-prole">' + esc(p.role) + "</span>" : "") + "</span></li>";
    }).join("") + "</ul></aside>" : "";
    if (!left && !right) return "";
    return '<section class="panel card cp-intro" aria-labelledby="cp-about-h"><div class="cp-cols' + (right ? "" : " single") + '"><div>' +
      '<h2 class="cp-h2" id="cp-about-h">About this course</h2>' + left + "</div>" + right + "</div></section>";
  }
  function fileChip(f, s) {
    if (!f || !f.url) return "";
    var ctx = s ? ", session " + s.n : "";
    var ext = isExt(f.url);
    return '<li class="cp-file"><a class="cp-file-open" href="' + esc(f.url) + '" target="_blank" rel="noopener"' +
      ' aria-label="' + esc(f.label + ctx + (/\.pdf$/i.test(f.url) ? ", PDF" : "")) + ' (opens in a new tab)">' +
      ico("file", 15) + "<span>" + esc(f.label) + "</span></a>" +
      (ext ? "" : '<a class="cp-file-dl" href="' + esc(f.url) + '" download aria-label="Download ' + esc(f.label + ctx) + '">' + ico("download", 15) + "</a>") + "</li>";
  }
  function sessionItem(s) {
    var files = (s.files || []).filter(function (f) { return f.url; });
    var fileList = files.map(function (f) { return fileChip(f, s); }).join("");
    var filesHtml = !files.length ? "" : files.length > 3
      ? '<details class="cp-files-more"><summary>' + files.length + " files</summary><ul class=\"cp-files\">" + fileList + "</ul></details>"
      : '<ul class="cp-files">' + fileList + "</ul>";
    var t = s.type && TYPE[s.type] ? s.type : "";
    return '<li class="cp-session" data-type="' + esc(t) + '">' +
      '<span class="cp-num' + (t ? " n-" + t.toLowerCase() : "") + '" aria-hidden="true">' + esc(s.n) + "</span>" +
      '<div class="cp-s-body"><div class="cp-s-head">' +
        '<h4 class="cp-s-title"><span class="sr-only">Session ' + esc(s.n) + '": </span><span lang="fr">' + esc(s.title) + "</span></h4>" +
        (t ? '<span class="cp-type t-' + t.toLowerCase() + '" title="' + esc(TYPE_LONG[t]) + '">' + esc(TYPE[t]) + "</span>" : "") +
      "</div>" +
      (s.summary ? '<p class="cp-s-sum">' + esc(s.summary) + "</p>" : "") +
      filesHtml + "</div></li>";
  }
  function materialsLink() {
    if (!c.materialsFrom) return "";
    var target = list.filter(function (x) { return x.c.slug === c.materialsFrom; })[0];
    if (!target) return "";
    return '<p class="cp-from"><a href="course.html?c=' + encodeURIComponent(target.c.slug) + '">Course materials: see the ' + esc(target.year) + " edition<span aria-hidden=\"true\"> →</span></a></p>";
  }
  function sessions() {
    var parts = c.parts && c.parts.length ? c.parts : (c.sessions && c.sessions.length ? [{ title: "", sessions: c.sessions }] : []);
    if (!parts.length) return "";
    var all = [];
    parts.forEach(function (p) { all = all.concat(p.sessions || []); });
    var present = TYPE_ORDER.filter(function (t) { return all.some(function (s) { return s.type === t; }); });
    var filters = present.length > 1 ? '<div class="cp-filters" role="group" aria-label="Filter sessions by type">' +
      '<button type="button" class="fchip" data-ftype="all" aria-pressed="true">All</button>' +
      present.map(function (t) { return '<button type="button" class="fchip ft-' + t.toLowerCase() + '" data-ftype="' + t + '" aria-pressed="false">' + esc(TYPE[t]) + "</button>"; }).join("") + "</div>" : "";
    var manyFiles = all.filter(function (s) { return (s.files || []).length > 3; }).length;
    var expand = all.length > 8 && manyFiles ? '<button type="button" class="cp-expand" id="cpExpand" aria-pressed="false">Expand all</button>' : "";
    var body = parts.map(function (p, i) {
      return '<div class="cp-part" data-part="' + i + '">' + (p.title ? '<h3 class="cp-part-h"><span class="cp-part-n">Part ' + (i + 1) + '</span> <span lang="fr">' + esc(p.title) + "</span></h3>" : "") +
        '<ol class="cp-timeline">' + (p.sessions || []).map(sessionItem).join("") + "</ol></div>";
    }).join("");
    return '<section class="panel card cp-sessions" aria-labelledby="cp-sess-h">' +
      '<div class="cp-sess-top"><h2 class="cp-h2" id="cp-sess-h">Sessions <span class="cp-count">' + all.length + "</span></h2>" + expand + "</div>" +
      materialsLink() + filters + '<p class="sr-only" id="cpLive" aria-live="polite"></p>' + body + "</section>";
  }
  function featured() {
    var tools = (c.extras || []).filter(function (f) { return f.url && f.kind === "tool"; });
    if (!tools.length) return "";
    return tools.map(function (f) {
      return '<section class="card cp-feature" aria-label="' + esc(f.badge || "Featured resource") + '"><div class="cp-feature-ico">' + ico(f.icon || "pointer", 26) + '</div><div class="cp-feature-body">' +
        (f.badge ? '<span class="cp-badge">' + esc(f.badge) + "</span>" : "") +
        '<h2 class="cp-feature-t">' + esc(f.label) + "</h2>" + (f.description ? '<p class="cp-p">' + esc(f.description) + "</p>" : "") +
        (f.credit ? '<p class="cp-credit">' + esc(f.credit) + "</p>" : "") +
        '<a class="cp-btn primary" href="' + esc(f.url) + '" target="_blank" rel="noopener noreferrer">' + ico("external", 17) + "<span>Open the visualiser</span>" + NEWTAB + "</a></div></section>";
    }).join("");
  }
  function specs() {
    var sp = (c.specs || []).filter(function (f) { return f.url; });
    if (!sp.length) return "";
    return '<section class="panel card cp-extras" aria-labelledby="cp-spec-h"><h2 class="cp-h2" id="cp-spec-h">Project specifications</h2>' +
      (c.specsCredit ? '<p class="cp-credit">' + esc(c.specsCredit) + "</p>" : "") + '<ul class="cp-files">' + sp.map(function (f) { return fileChip(f, null); }).join("") + "</ul></section>";
  }
  function kitCard(f) {
    return '<li class="cp-kit-card"><span class="cp-kit-ico">' + ico(f.icon || "file", 22) + '</span><div class="cp-kit-body"><div class="cp-kit-head"><h3 class="cp-kit-t">' + esc(f.label) + "</h3>" +
      (f.badge ? '<span class="cp-badge">' + esc(f.badge) + "</span>" : "") + "</div>" + (f.description ? '<p class="cp-kit-d">' + esc(f.description) + "</p>" : "") +
      '<ul class="cp-files">' + fileChip({ label: "Open sheet", url: f.url }, null).replace('aria-label="Open sheet', 'aria-label="' + esc(f.label) + ' sheet').replace('Download Open sheet', 'Download ' + esc(f.label) + ' sheet') + "</ul></div></li>";
  }
  function extras() {
    var ex = (c.extras || []).filter(function (f) { return f.url && f.kind !== "tool"; });
    if (!ex.length) return c.parts || c.sessions ? "" : (c.materialsFrom ? '<section class="panel card cp-sessions">' + materialsLink() + "</section>" : "");
    var cards = ex.every(function (f) { return f.description; });
    return '<section class="panel card cp-extras" aria-labelledby="cp-ex-h"><h2 class="cp-h2" id="cp-ex-h">' + esc(c.extrasTitle || "Course resources") + "</h2>" +
      (c.extrasIntro ? '<p class="cp-p cp-ex-intro">' + esc(c.extrasIntro) + "</p>" : "") +
      (cards ? '<ul class="cp-kit">' + ex.map(kitCard).join("") + "</ul>" : '<ul class="cp-files">' + ex.map(function (f) { return fileChip(f, null); }).join("") + "</ul>") + "</section>";
  }
  function crumbs() {
    return '<nav class="cp-crumbs" aria-label="Breadcrumb"><ol>' +
      '<li><a href="index.html#teaching">Teaching</a></li>' +
      '<li><a href="' + allCoursesHref + '">' + esc(X.year) + "</a></li>" +
      '<li><span aria-current="page">' + esc(c.code || c.title) + "</span></li></ol></nav>";
  }
  function pager() {
    var prev = list[idx - 1], next = list[idx + 1];
    function card(x, dir) {
      if (!x) return '<span class="cp-pg-empty" aria-hidden="true"></span>';
      return '<a class="cp-pg ' + dir + '" href="course.html?c=' + encodeURIComponent(x.c.slug) + '">' +
        '<span class="cp-pg-k">' + (dir === "prev" ? ico("left", 16) + "Previous course" : "Next course" + ico("right", 16)) + "</span>" +
        '<span class="cp-pg-t">' + esc((x.c.code ? x.c.code + " · " : "") + x.c.title) + '</span><span class="cp-pg-y">' + esc(x.year) + "</span></a>";
    }
    return '<nav class="cp-pager" aria-label="Other courses">' + card(prev, "prev") +
      '<a class="cp-all" href="' + allCoursesHref + '">' + ico("grid", 16) + "<span>All courses</span></a>" + card(next, "next") + "</nav>";
  }
  function floatChat() {
    if (!c.chat || !c.chat.url) return "";
    return '<a class="cp-fab" href="' + esc(c.chat.url) + '" target="_blank" rel="noopener noreferrer" aria-label="Ask a question in the course discussion (opens in a new tab)">' +
      ico("chat", 22) + '<span class="cp-fab-lbl" aria-hidden="true">Ask a question</span></a>';
  }

  root.innerHTML = crumbs() + header() + intro() + sessions() + featured() + specs() + extras() + pager() + footer() + floatChat();
  chrome();

  /* ---------- session filters & expand ---------- */
  var live = document.getElementById("cpLive");
  document.querySelectorAll("[data-ftype]").forEach(function (b) {
    b.addEventListener("click", function () {
      var t = b.dataset.ftype, shown = 0;
      document.querySelectorAll("[data-ftype]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      document.querySelectorAll(".cp-session").forEach(function (s) {
        var on = t === "all" || s.dataset.type === t; s.hidden = !on; if (on) shown++;
      });
      document.querySelectorAll(".cp-part").forEach(function (p) { p.hidden = !p.querySelector(".cp-session:not([hidden])"); });
      if (live) live.textContent = shown + " session" + (shown > 1 ? "s" : "") + " shown";
    });
  });
  var ex = document.getElementById("cpExpand");
  if (ex) ex.addEventListener("click", function () {
    var open = ex.getAttribute("aria-pressed") !== "true";
    document.querySelectorAll(".cp-files-more").forEach(function (d) { d.open = open; });
    ex.setAttribute("aria-pressed", String(open));
    ex.textContent = open ? "Collapse all" : "Expand all";
  });
})();
