/* Academic journal — rendering & interactions.
   All content comes from content.js; this file normally needs no edits. */
(function () {
  "use strict";
  var S = window.SITE;
  var app = document.getElementById("app");
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= helpers ================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  function fmtDate(d) {
    if (!d) return "";
    var p = String(d).split("-");
    return p[1] ? MONTHS[+p[1] - 1] + " " + p[0] : p[0];
  }
  function nowKey() { var n = new Date(); return n.getFullYear() + "-" + String(n.getMonth() + 1).padStart(2, "0"); }
  function isExt(url) { return /^https?:/.test(url); }
  function a(url, label, cls, extra) {
    var e = isExt(url);
    return '<a class="' + (cls || "") + '" href="' + esc(url) + '"' + (e ? ' target="_blank" rel="noopener noreferrer"' : "") + (extra || "") + ">" + label +
      (e ? '<span class="sr-only"> (opens in a new tab)</span>' : "") + "</a>";
  }
  var LINKS = [["paper", "Article"], ["pdf", "PDF"], ["preprint", "Preprint"], ["code", "Code"], ["data", "Data"], ["slides", "Slides"], ["video", "Video"], ["program", "Programme"]];
  function linkChips(links, withDoi) {
    if (!links) return "";
    var out = [];
    if (withDoi !== false && links.doi) out.push(a("https://doi.org/" + links.doi, "DOI " + esc(links.doi), "lchip doi"));
    LINKS.forEach(function (m) { if (links[m[0]]) out.push(a(links[m[0]], m[1], "lchip")); });
    return out.length ? '<div class="lchips">' + out.join("") + "</div>" : "";
  }
  var STATUS = {
    "published": { label: "Published", cls: "st-pub", group: "published" },
    "accepted": { label: "Accepted", cls: "st-acc", group: "accepted" },
    "under-review": { label: "Under review", cls: "st-rev", group: "review" },
    "submitted": { label: "Under review", cls: "st-rev", group: "review" },
    "preprint": { label: "Preprint", cls: "st-pre", group: "preprint" }
  };
  var AWARD = { award: "Award", nomination: "Nomination", shortlist: "Shortlisted", grant: "Grant" };
  function axisName(id) { var x = S.axes.filter(function (y) { return y.id === id; })[0]; return x ? x.title : id; }
  function initials(n) { return n.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); }
  function uiIcon(name) {
    return '<svg class="ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + window.ICONS.ui[name] + "</svg>";
  }
  function brandSvg(slug) {
    var b = window.ICONS.brands[slug];
    return b ? '<svg class="brand-svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" style="color:' + b.hex + '"><path fill="currentColor" d="' + b.path + '"/></svg>' : "";
  }
  /* compact: logo only + tooltip; full: logo + platform name */
  function profileLinks(mode) {
    return '<ul class="brands ' + mode + '">' + S.profiles.filter(function (l) { return l.url && l.icon; }).map(function (l) {
      var name = l.label.replace(/\s*\(.*\)$/, "");
      return '<li><a class="brand" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(name) + ' profile (opens in a new tab)"' +
        (mode === "compact" ? ' data-tip="' + esc(name) + '"' : "") + '><span class="brand-chip">' + brandSvg(l.icon) + "</span>" +
        (mode === "full" ? '<span class="brand-name">' + esc(name) + "</span>" : "") + "</a></li>";
    }).join("") + "</ul>";
  }
  function authorsHtml(list) {
    return list.map(function (n) { return /Jaballi/.test(n) ? '<strong class="me">' + esc(n) + "</strong>" : esc(n); }).join(", ");
  }

  var NAV = [
    ["home", "Home"], ["research", "Research"], ["publications", "Publications"], ["teaching", "Teaching"],
    ["service", "Service"], ["activities", "Activities"], ["collaborations", "Collaborations"], ["about", "About"]
  ];

  /* ================= derived data ================= */
  var pubs = S.publications.slice().sort(function (x, y) { return y.date.localeCompare(x.date) || x.title.localeCompare(y.title); });
  var peer = pubs.filter(function (p) { return p.status === "published" || p.status === "accepted"; });
  var teachYears = S.teaching.filter(function (y) { return !y.draft; });
  var allCourses = [];
  teachYears.forEach(function (y) { y.institutions.forEach(function (i) { i.courses.forEach(function (c) { allCourses.push({ year: y.year, inst: i, c: c }); }); }); });
  var latestTeaching = teachYears[0];
  var latestInst = latestTeaching.institutions[0];
  var ROLE = { CM: "Lectures (CM)", TD: "Tutorials (TD)", TP: "Labs (TP)", Supervision: "Project supervision" };
  var activities = S.activities.slice().sort(function (x, y) { return y.date.localeCompare(x.date); });
  var upcoming = []
    .concat(activities.map(function (t) { return { date: t.date, title: t.event, role: t.role, detail: t.place, href: "#activities" }; }))
    .concat(S.service.map(function (s) { return { date: s.date, title: s.venue, role: s.role, detail: s.detail, href: "#service" }; }))
    .filter(function (e) { return e.date >= nowKey(); })
    .sort(function (x, y) { return x.date.localeCompare(y.date); });
  var nextEvent = upcoming[0] || null;

  /* ================= HERO ================= */
  function hero() {
    var p = S.person;
    var aff = p.affiliations.map(function (x) { return a(x.url, esc(x.short), "pill", ' title="' + esc(x.name) + '"'); }).join("");
    var tabs = NAV.map(function (n, i) {
      return '<li><a href="#' + n[0] + '" data-nav="' + n[0] + '"' + (i === 0 ? ' aria-current="true"' : "") + ">" + n[1] + "</a></li>";
    }).join("");
    var areas = S.axes.map(function (x) { return '<li><button type="button" class="area" data-axis="' + x.id + '">' + esc(x.short || x.title) + "</button></li>"; }).join("");
    var dots = S.highlights.map(function (h, i) {
      return '<button type="button" class="dot" data-slide="' + i + '" aria-label="Highlight ' + (i + 1) + " of " + S.highlights.length + '"' + (i === 0 ? ' aria-current="true"' : "") + "></button>";
    }).join("");
    var multi = S.highlights.length > 1;
    return '' +
    '<section class="hero card" id="home" aria-labelledby="greet">' +
      '<div class="hero-top">' +
        '<div class="hero-id">' +
          '<p class="eyebrow">Academic journal</p>' +
          '<h1 id="greet" class="greet"><span class="fn">' + esc(p.firstName) + '</span> <strong>' + esc(p.lastName) + '</strong><span class="phd">, ' + esc(p.honorific) + "</span></h1>" +
          '<p class="role"><span class="role-long">' + esc(p.position) + '</span><span class="role-short">' + esc(p.shortPosition) + "</span> · " + p.affiliations.map(function (x) { return a(x.url, esc(x.short), "aff", ' title="' + esc(x.name) + '"'); }).join(" & ") + "</p>" +
          '<p class="statement">' + esc(p.homeStatement) + "</p>" +
          '<ul class="areas" aria-label="Research areas — show related publications">' + areas + "</ul>" +
        "</div>" +
        '<div class="clock"><p class="eyebrow">' + esc(p.city) + '</p><p class="clock-time" id="clock" aria-label="Local time in ' + esc(p.city) + '">--:--</p></div>' +
      "</div>" +
      '<div class="hero-bar">' +
        '<nav class="tabs" aria-label="Main sections"><ul id="tabNav">' + tabs + "</ul></nav>" +
        '<div class="hero-pills">' +
          '<button class="theme-btn" type="button" data-theme-toggle aria-label="Switch to night mode"><span class="theme-ico" aria-hidden="true"></span></button>' +
        "</div>" +
      "</div>" +
      '<ul class="quick" aria-label="Quick access">' +
        '<li><a href="#publications"><span class="qi">' + uiIcon("publications") + '</span><span class="ql">Publications</span></a></li>' +
        '<li><a href="#teaching"><span class="qi">' + uiIcon("teaching") + '</span><span class="ql">Teaching</span></a></li>' +
        '<li><a href="#projects"><span class="qi">' + uiIcon("projects") + '</span><span class="ql">Projects</span></a></li>' +
        '<li><a href="#contact"><span class="qi">' + uiIcon("contact") + '</span><span class="ql">Contact</span></a></li>' +
      "</ul>" +
      '<div class="news" role="region" aria-roledescription="carousel" aria-label="Latest news">' +
        '<p class="news-h">Latest</p>' +
        '<div class="entry" id="entry" aria-live="off">' + slide(0) + "</div>" +
        (multi ? '<div class="news-ctl">' +
          '<button type="button" class="ctl" id="newsPrev" aria-label="Previous highlight"><span aria-hidden="true">‹</span></button>' +
          '<div class="dots" role="group" aria-label="Choose highlight">' + dots + "</div>" +
          '<button type="button" class="ctl" id="newsNext" aria-label="Next highlight"><span aria-hidden="true">›</span></button>' +
          '<button type="button" class="ctl pause" id="newsPause" aria-pressed="false" hidden><span class="pause-ico" aria-hidden="true"></span><span class="pause-lbl">Pause</span></button>' +
        "</div>" : "") +
      "</div>" +
    "</section>";
  }
  function slide(i) {
    var h = S.highlights[i];
    var soon = h.date > nowKey() ? '<span class="soon">Upcoming</span>' : "";
    return '<div class="slide"><p class="meta"><span>' + esc(fmtDate(h.date)) + '</span><span class="sep" aria-hidden="true">•</span><span>' + esc(h.place) + "</span>" + soon + "</p>" +
      '<p class="entry-text">' + h.html + "</p>" +
      (h.link ? a(h.link, esc(h.linkLabel || "Read more") + '<span aria-hidden="true"> →</span>', "entry-more") : "") + "</div>";
  }

  /* ================= WIDGETS ================= */
  function widgets() {
    var p = S.person;
    var portrait = p.photo
      ? '<img class="portrait-img" src="' + esc(p.photo) + '" alt="Portrait of ' + esc(p.name) + '" width="600" height="510" decoding="async">'
      : '<div class="portrait-mono" aria-hidden="true"><span>' + initials(p.name) + "</span></div>";
    var axes = S.axes.map(function (x) { return '<li><button type="button" class="axis-link" data-axis="' + x.id + '">' + esc(x.title) + "</button></li>"; }).join("");
    var lc = latestInst.courses;
    var courses = lc.slice(0, 4).map(function (c) {
      return "<li>" + (c.code ? '<span class="code">' + esc(c.code) + "</span>" : "") + esc(c.title) + "</li>";
    }).join("") + (lc.length > 4 ? '<li class="more">+ ' + (lc.length - 4) + " more</li>" : "");
    var ev = nextEvent
      ? '<p class="w-big">' + esc(fmtDate(nextEvent.date)) + '</p><p class="w-strong">' + esc(nextEvent.role) + '</p><p class="w-text">' + esc(nextEvent.title) +
        (nextEvent.detail ? " — " + esc(nextEvent.detail) : "") + '</p><a class="w-link" href="' + nextEvent.href + '">Details<span aria-hidden="true"> →</span></a>'
      : '<p class="w-text">No upcoming event is listed.</p><a class="w-link" href="#activities">Past activities<span aria-hidden="true"> →</span></a>';
    var photos = S.photos.map(function (ph) {
      return '<figure class="w photo"><img src="' + esc(ph.src) + '" alt="' + esc(ph.alt) + '" loading="lazy" decoding="async"><figcaption><span>' + esc(ph.caption) + "</span>" +
        (ph.credit ? "<small>" + esc(ph.credit) + "</small>" : "") + "</figcaption></figure>";
    }).join("");
    return '' +
    '<section class="widgets" aria-label="At a glance">' +
      '<article class="w w-profile reveal">' + portrait +
        '<div class="w-profile-body"><span class="tag">' + esc(p.shortPosition) + '</span>' +
          '<p class="w-strong">' + esc(p.name) + ", " + esc(p.honorific) + "</p>" +
          '<p class="w-text">' + esc(p.affiliations.map(function (x) { return x.short; }).join(" · ")) + "</p>" +
          '<div class="w-actions"><a class="btn" href="' + esc(p.cv) + '">Download CV <span class="sr-only">(PDF)</span></a><a class="btn ghost" href="#about">About</a></div>' +
        "</div></article>" +
      '<div class="w-stack">' +
        '<article class="w w-dark reveal" aria-labelledby="w-axes"><div class="w-head"><h2 id="w-axes" class="w-title">Research axes</h2><span class="w-hint">Filter papers</span></div><ul class="w-list axes">' + axes + "</ul></article>" +
        '<article class="w w-warm reveal" aria-labelledby="w-teach"><div class="w-head"><h2 id="w-teach" class="w-title">Teaching · ' + esc(latestTeaching.year) + '</h2></div>' +
          '<p class="w-sub">' + esc(latestInst.institution) + '</p><ul class="w-list">' + courses + '</ul><a class="w-link" href="#teaching">All courses<span aria-hidden="true"> →</span></a></article>' +
      "</div>" +
      '<div class="w-stack">' +
        '<article class="w w-light reveal" aria-labelledby="w-next"><div class="w-head"><h2 id="w-next" class="w-title">Next on the calendar</h2></div>' + ev + "</article>" +
        '<article class="w w-links reveal" aria-labelledby="w-find"><div class="w-head"><h2 id="w-find" class="w-title">Find my work</h2></div>' + profileLinks("compact") + "</article>" +
      "</div>" + photos +
    "</section>";
  }

  /* ================= PILLARS ================= */
  function pillars() {
    var nCourses = allCourses.length;
    var nInst = new Set(allCourses.map(function (x) { return x.inst.institution; })).size;
    var nOngoing = S.projects.filter(function (p) { return p.stage === "ongoing"; }).length;
    var nCommittee = S.service.filter(function (s) { return s.category === "Programme committees" || s.category === "Chairing & organization"; }).length;
    var nReview = S.service.filter(function (s) { return s.category === "Reviewing & editorial"; }).length;
    function pl(cls, k, t, facts, links) {
      return '<article class="pillar ' + cls + ' reveal"><p class="pillar-k">' + k + '</p><h2 class="pillar-t">' + t + '</h2><ul class="pillar-f">' +
        facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + '</ul><p class="pillar-links">' +
        links.map(function (l) { return '<a href="' + l[0] + '">' + l[1] + "</a>"; }).join("") + "</p></article>";
    }
    return '<section class="pillars" aria-label="Research, teaching and academic service">' +
      pl("r", "01 · Research", "NLP for low-resource, dialectal and multimodal settings",
        [peer.length + " peer-reviewed papers", (pubs.length - peer.length) + " under review", nOngoing + " ongoing projects with public code"],
        [["#publications", "Publications"], ["#projects", "Projects"]]) +
      pl("t", "02 · Teaching", "Algorithms, data structures, programming and data",
        [nCourses + " courses in " + nInst + " institutions", S.supervision.length + " supervised theses and projects", "Bachelor's to master's level"],
        [["#teaching", "Courses"], ["#supervision", "Supervision"]]) +
      pl("s", "03 · Academic service", "Committees, reviewing and community",
        [nCommittee + " committee and chairing roles", nReview + " journal reviewing and editorial roles", "Track chair, ACIIDS 2027"],
        [["#service", "Service"], ["#activities", "Activities"]]) +
    "</section>";
  }

  function panel(id, kicker, title, lead, body, cls) {
    return '<section class="panel card reveal ' + (cls || "") + '" id="' + id + '" aria-labelledby="' + id + '-h">' +
      '<header class="panel-head"><p class="eyebrow">' + kicker + '</p><h2 id="' + id + '-h" class="panel-title">' + title + "</h2>" +
      (lead ? '<p class="panel-lead">' + lead + "</p>" : "") + "</header>" + body + "</section>";
  }

  /* ================= RESEARCH (axes, directions, projects) ================= */
  function research() {
    var axes = S.axes.map(function (x, i) {
      var n = pubs.filter(function (p) { return p.axes.indexOf(x.id) > -1; }).length;
      return '<article class="axis-card a' + (i % 4) + '"><h3 class="h3">' + esc(x.title) + "</h3><p>" + esc(x.text) + '</p><ul class="kw">' +
        x.keywords.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + '</ul><button type="button" class="axis-link small" data-axis="' + x.id + '">' + n + " related publications →</button></article>";
    }).join("");
    var dirs = S.currentDirections.map(function (c) {
      return '<li><h4 class="h4">' + esc(c.title) + "</h4><p>" + esc(c.text) + '</p><p class="kw-line">' + c.keywords.map(esc).join(" · ") + "</p></li>";
    }).join("");
    return panel("research", "01 · Research", "Research", esc(S.person.researchStatement),
      '<div class="axis-grid">' + axes + "</div>" +
      '<div class="sub-block dirs"><h3 class="sub-h">Current directions <span class="muted">· LaBRI, since 2025</span></h3><ul class="current">' + dirs + "</ul></div>" +
      projects());
  }
  function projects() {
    var STAGE = { ongoing: "Ongoing research", completed: "Completed project" };
    var cards = S.projects.map(function (p) {
      return '<article class="project" data-stage="' + p.stage + '">' +
        '<div class="project-top"><span class="stage s-' + p.stage + '">' + STAGE[p.stage] + '</span><span class="muted">' + esc(p.period) + "</span></div>" +
        '<h4 class="h3">' + esc(p.title) + "</h4>" +
        '<p class="project-status">' + esc(p.status) + "</p>" +
        '<dl class="project-dl">' +
          (p.problem ? "<div><dt>Problem</dt><dd>" + esc(p.problem) + "</dd></div>" : "") +
          (p.approach ? "<div><dt>Approach</dt><dd>" + esc(p.approach) + "</dd></div>" : "") +
          (p.role ? "<div><dt>Role</dt><dd>" + esc(p.role) + "</dd></div>" : "") +
        "</dl>" +
        (p.resources && p.resources.length ? '<div class="lchips">' + p.resources.map(function (r) { return a(r.url, esc(r.label), "lchip"); }).join("") + "</div>" : "") +
      "</article>";
    }).join("");
    var rel = S.releases.map(function (r) {
      return "<li>" + a(r.url, '<span class="rel-t">' + esc(r.title) + '</span><span class="rel-k">' + esc(r.kind) + (r.licence ? " · " + esc(r.licence) + " licence" : "") + "</span>", "rel") +
        '<p class="muted">' + esc(r.text) + "</p></li>";
    }).join("");
    return '<div class="sub-block" id="projects" tabindex="-1">' +
      '<div class="sub-head"><h3 class="sub-h">Projects</h3>' +
        '<div class="chipset" role="group" aria-label="Filter projects">' +
          '<button type="button" class="fchip" data-stage-f="all" aria-pressed="true">All</button>' +
          '<button type="button" class="fchip" data-stage-f="ongoing" aria-pressed="false">Ongoing research</button>' +
          '<button type="button" class="fchip" data-stage-f="completed" aria-pressed="false">Completed</button>' +
        "</div></div>" +
      '<div class="project-grid">' + cards + "</div>" +
      '<h3 class="sub-h rel-h">Released software & resources</h3><ul class="releases">' + rel + "</ul>" +
      '<p class="legend">Statuses are those stated in each repository. A public repository does not imply that the related work is published or peer reviewed.</p>' +
    "</div>";
  }

  /* ================= PUBLICATIONS ================= */
  function citation(p) {
    var c = p.cite;
    if (!p.authorsComplete || !p.authors.length || !c || !p.links.doi) return "";
    var parts = [p.authors.join(", ") + ".", p.title + "."];
    if (c.journal) parts.push(c.journal + ", vol. " + c.volume + (c.article ? ", article " + c.article : "") + ", " + c.year + ".");
    else parts.push("In: " + c.book + (c.series ? ", " + c.series + " vol. " + c.volume : "") + ", pp. " + c.pages + ". " + c.publisher + ", " + c.year + ".");
    parts.push("https://doi.org/" + p.links.doi);
    return parts.join(" ");
  }
  function coverHtml(p) {
    if (!p.coverImage || (p.status !== "published" && !p.coverGeneric)) return '<div class="ref-cover none" aria-hidden="true"></div>';
    var img = '<img src="' + esc(p.coverImage) + '"' + (p.coverImage2x ? ' srcset="' + esc(p.coverImage) + " 1x, " + esc(p.coverImage2x) + ' 2x"' : "") +
      ' width="' + (p.coverWidth || 92) + '" height="' + (p.coverHeight || 139) + '" alt="' + esc(p.coverAlt || "Cover of the volume") + '"' +
      ' loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.closest(\'.ref\').classList.add(\'no-cover\')">';
    return '<div class="ref-cover">' + (p.coverUrl ? a(p.coverUrl, img, "cover-link", ' title="Open the official page of this volume"') : img) +
      (p.coverCredit ? '<span class="cover-credit">' + esc(p.coverCredit) + "</span>" : "") + "</div>";
  }
  function pubItem(p) {
    var st = STATUS[p.status];
    var cite = citation(p);
    return '<li class="ref' + (p.coverImage && (p.status === "published" || p.coverGeneric) ? " has-cover" : "") + (p.coverGeneric ? " generic-cover" : "") + '" id="pub-' + p.id + '">' + coverHtml(p) +
      '<div class="ref-body">' +
        '<p class="ref-meta"><span class="status ' + st.cls + '">' + st.label + '</span><span class="ref-type">' + esc(p.type) + "</span></p>" +
        '<p class="ref-title">' + esc(p.title) + "</p>" +
        (p.authors.length ? '<p class="ref-auth">' + authorsHtml(p.authors) + "</p>" : "") +
        '<p class="ref-venue">' + esc(p.venue) + " · " + esc(fmtDate(p.date)) +
          (p.cite && p.cite.year && p.cite.year !== String(p.year) ? ' <span class="pubyear">· published by ' + esc(p.cite.publisher || "the publisher") + " in " + esc(p.cite.year) + "</span>" : "") + "</p>" +
        (p.note ? '<p class="ref-note"><span aria-hidden="true">★ </span>' + esc(p.note) + "</p>" : "") +
        (p.summary ? '<p class="ref-sum">' + esc(p.summary) + "</p>" : "") +
        linkChips(p.links) +
        (cite ? '<button type="button" class="copy" data-cite="' + esc(cite) + '">Copy citation</button>' : "") +
      "</div></li>";
  }
  function publications() {
    var years = Array.from(new Set(pubs.map(function (p) { return String(p.year); }))).sort().reverse();
    var n = { published: 0, accepted: 0, review: 0, preprint: 0 };
    pubs.forEach(function (p) { n[STATUS[p.status].group]++; });
    var stat = function (k, label) { return n[k] ? '<button type="button" class="fchip" data-pstatus="' + k + '" aria-pressed="false">' + label + ' <span class="n">' + n[k] + "</span></button>" : ""; };
    return panel("publications", "01 · Research", "Publications",
      "Journal articles, conference papers and work under review on natural language processing for low-resource and dialectal languages, multilingual speech, multimodal learning and social media analysis.",
      '<div class="filters" role="search" aria-label="Filter publications">' +
        '<label class="search"><span class="sr-only">Search publications</span><input id="pq" type="search" placeholder="Search title, venue, co-author, keyword…" autocomplete="off"></label>' +
        '<div class="chipset" role="group" aria-label="Status">' +
          '<button type="button" class="fchip" data-pstatus="all" aria-pressed="true">All <span class="n">' + pubs.length + "</span></button>" +
          stat("published", "Published") + stat("accepted", "Accepted") + stat("review", "Under review") + stat("preprint", "Preprint") +
        "</div>" +
        '<div class="selects">' +
          '<label><span>Type</span><select id="pType"><option value="all">All types</option><option>Journal</option><option>Conference</option></select></label>' +
          '<label><span>Research axis</span><select id="pAxis"><option value="all">All axes</option>' + S.axes.map(function (x) { return '<option value="' + x.id + '">' + esc(x.title) + "</option>"; }).join("") + "</select></label>" +
          '<label><span>Year</span><select id="pYear"><option value="all">All years</option>' + years.map(function (y) { return "<option>" + y + "</option>"; }).join("") + "</select></label>" +
          '<button type="button" class="reset" id="pReset">Clear filters</button>' +
        "</div>" +
      "</div>" +
      '<p class="count" id="pCount" role="status" aria-live="polite"></p><div id="pResults"></div>' +
      '<p class="legend">Complete reference lists are also available on ' + a(S.profiles[1].url, "DBLP") + " and " + a(S.profiles[0].url, "Google Scholar") + ".</p>");
  }
  var PF = { q: "", status: "all", type: "all", axis: "all", year: "all" };
  function runPubs() {
    var list = pubs.filter(function (p) {
      if (PF.status !== "all" && STATUS[p.status].group !== PF.status) return false;
      if (PF.type !== "all" && p.type !== PF.type) return false;
      if (PF.axis !== "all" && p.axes.indexOf(PF.axis) < 0) return false;
      if (PF.year !== "all" && String(p.year) !== PF.year) return false;
      if (PF.q) {
        var hay = [p.title, p.authors.join(" "), p.venue, p.venueShort, p.summary, p.type, STATUS[p.status].label, p.axes.map(axisName).join(" ")].join(" ").toLowerCase();
        if (PF.q.split(/\s+/).some(function (w) { return hay.indexOf(w) < 0; })) return false;
      }
      return true;
    });
    var by = {};
    list.forEach(function (p) { (by[p.year] = by[p.year] || []).push(p); });
    var html = Object.keys(by).sort().reverse().map(function (y) {
      return '<div class="year-group"><h3 class="year">' + y + '</h3><ol class="refs">' + by[y].map(pubItem).join("") + "</ol></div>";
    }).join("");
    document.getElementById("pResults").innerHTML = html ||
      '<div class="empty"><p><strong>No publication matches these filters.</strong></p><p>Try another keyword or <button type="button" class="linklike" data-clear="pubs">clear all filters</button>.</p></div>';
    var desc = [];
    if (PF.axis !== "all") desc.push("axis: " + axisName(PF.axis));
    if (PF.year !== "all") desc.push(PF.year);
    if (PF.q) desc.push("“" + PF.q + "”");
    document.getElementById("pCount").textContent = "Showing " + list.length + " of " + pubs.length + " publications" + (desc.length ? " · " + desc.join(" · ") : "");
  }
  function syncPubs() {
    document.querySelectorAll("[data-pstatus]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.pstatus === PF.status)); });
    document.getElementById("pq").value = PF.q;
    document.getElementById("pType").value = PF.type;
    document.getElementById("pAxis").value = PF.axis;
    document.getElementById("pYear").value = PF.year;
  }

  /* ================= TEACHING ================= */
  var RES_KIND = [["slides", "Course materials"], ["exercises", "Exercises"], ["notebook", "Notebooks"], ["solutions", "Solutions"], ["project", "Projects"], ["other", "Other resources"]];
  var LEVEL = { L1: "Bachelor's — Year 1", L2: "Bachelor's — Year 2", L3: "Bachelor's — Year 3", M1: "Master's — Year 1", M2: "Master's — Year 2" };
  function courseCard(c) {
    var res = c.resources || [];
    var groups = RES_KIND.map(function (k) {
      var items = res.filter(function (r) { return (r.kind || "other") === k[0] && r.url; });
      return items.length ? "<div><dt>" + k[1] + "</dt><dd>" + items.map(function (r) { return a(r.url, esc(r.label), "lchip"); }).join("") + "</dd></div>" : "";
    }).join("");
    var obj = Array.isArray(c.objectives) ? c.objectives.filter(Boolean) : (c.objectives ? [c.objectives] : []);
    var levels = (c.levels || []).filter(function (l) { return LEVEL[l]; });
    var lvlHtml = levels.length
      ? '<span class="lvl-badge" title="' + esc(levels.map(function (l) { return LEVEL[l]; }).join(" / ")) + '"><b>' + levels.join(" · ") + '</b><span class="lvl-txt">' +
        esc(levels.length > 1 ? (levels[0][0] === "M" ? "Master's" : "Bachelor's") + " — Years " + levels.map(function (l) { return l.slice(1); }).join(" & ") : LEVEL[levels[0]]) + "</span></span>"
      : (c.levelText ? '<span class="lvl-badge plain"><span class="lvl-txt">' + esc(c.levelText) + "</span></span>" : "");
    var ill = window.COURSE_ILLUSTRATIONS && c.illustration && window.COURSE_ILLUSTRATIONS[c.illustration];
    return '<article class="course">' +
      (ill ? '<div class="course-ill">' + ill + "</div>" : "") +
      '<div class="course-body">' +
        '<div class="course-top">' + lvlHtml + (c.code ? '<span class="code">' + esc(c.code) + "</span>" : "") + "</div>" +
        (c.officialName ? '<p class="official">' + esc(c.officialName) + "</p>" : "") +
        '<h5 class="h4 course-title">' + esc(c.title) + "</h5>" +
        '<ul class="fchips" aria-label="Language and teaching format">' +
          (c.languages || []).map(function (f) { return '<li class="lang">' + esc(f) + "</li>"; }).join("") +
          (c.roles || []).map(function (f) { return '<li class="f">' + esc(ROLE[f] || f) + "</li>"; }).join("") + "</ul>" +
        (c.roleNote ? '<p class="course-note">' + esc(c.roleNote) + "</p>" : "") +
        (c.termNote ? '<p class="course-note">' + esc(c.termNote) + "</p>" : "") +
        (c.description ? '<p class="course-desc">' + esc(c.description) + "</p>" : "") +
        (obj.length ? '<div class="course-obj"><p class="res-h">Learning objectives</p><ul>' + obj.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>" : "") +
        (c.topics && c.topics.length ? '<p class="kw-line">Topics: ' + c.topics.map(esc).join(" · ") + "</p>" : "") +
        (c.hours ? '<p class="course-note">' + esc(c.hours) + " hours</p>" : "") +
        (groups ? '<dl class="res">' + groups + "</dl>" : "") + (c.page ? a(c.page, "Course page", "w-link") : "") +
      "</div></article>";
  }
  function teaching() {
    var tabs = teachYears.map(function (y, i) {
      var insts = y.institutions.map(function (x) { return x.institution; }).join(" · ");
      return '<button type="button" role="tab" class="seg" id="tt-' + i + '" aria-controls="tp-' + i + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : "") + ">" +
        esc(y.year) + '<span class="seg-sub">' + esc(insts) + "</span></button>";
    }).join("");
    var calIco = '<svg class="ico" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
    var panes = teachYears.map(function (y, i) {
      var body = y.institutions.map(function (inst) {
        var sems = [1, 2].map(function (n) {
          var list = inst.courses.filter(function (c) { return (c.semester || 1) === n; });
          if (!list.length) return "";
          return '<div class="sem"><h4 class="sem-h"><span class="sem-ico">' + calIco + "</span>Semester " + n + '<span class="sem-n">' + list.length + " course" + (list.length > 1 ? "s" : "") + "</span></h4>" +
            '<div class="course-grid">' + list.map(courseCard).join("") + "</div></div>";
        }).join("");
        return '<div class="inst"><p class="inst-h">' + esc(inst.institution) + ' <span class="muted">· ' + esc(inst.role) + " · " + esc(inst.unit) + "</span></p>" + sems + "</div>";
      }).join("");
      return '<div class="tpane" role="tabpanel" id="tp-' + i + '" aria-labelledby="tt-' + i + '"' + (i ? " hidden" : "") + ">" + body + "</div>";
    }).join("");
    return panel("teaching", "02 · Teaching", "Teaching & resources", esc(S.person.teachingStatement),
      '<div class="segs years" role="tablist" aria-label="Academic years">' + tabs + "</div>" + panes +
      '<p class="legend">Each course shows its level, language and my role: <b>Lectures (CM)</b>, <b>Tutorials (TD)</b>, <b>Labs (TP)</b> or <b>Project supervision</b>.</p>');
  }

  /* ================= SERVICE (supervision + academic service) ================= */
  function service() {
    var sup = S.supervision.map(function (s) {
      return '<li class="tl-item"><p class="tl-meta"><span class="lvl">' + esc(s.level) + "</span>" + esc(s.period) + " · " + esc(s.mode) + (s.ongoing ? ' <span class="soon">Ongoing</span>' : "") + "</p>" +
        '<h4 class="h4">' + esc(s.topic) + '</h4><p class="muted">' + esc(s.role) + (s.with ? " with " + esc(s.with) : "") + " — " + esc(s.institution) + "</p>" +
        (s.summary ? "<p>" + esc(s.summary) + "</p>" : "") + (s.outcome ? '<div class="lchips">' + a(s.outcome.url, esc(s.outcome.label), "lchip") + "</div>" : "") + "</li>";
    }).join("");
    var cats = ["Chairing & organization", "Programme committees", "Reviewing & editorial", "Memberships"];
    var groups = cats.map(function (c) {
      var items = S.service.filter(function (s) { return s.category === c; });
      if (!items.length) return "";
      return '<div class="svc-group"><h4 class="svc-h">' + esc(c) + ' <span class="n">' + items.length + '</span></h4><ul class="svc">' + items.map(function (s) {
        var when = fmtDate(s.date) + (s.until ? " – " + s.until : "");
        return '<li><span class="svc-date">' + esc(when) + "</span><div><p><strong>" + esc(s.role) + "</strong>" + (s.date > nowKey() ? ' <span class="soon">Upcoming</span>' : "") +
          " — " + esc(s.venue) + "</p>" + (s.detail ? '<p class="muted">' + esc(s.detail) + "</p>" : "") + "</div></li>";
      }).join("") + "</ul></div>";
    }).join("");
    return panel("service", "03 · Academic service", "Supervision & academic service", esc(S.person.serviceStatement),
      '<div class="split">' +
        '<div class="sub-block" id="supervision" tabindex="-1"><h3 class="sub-h">Supervision & mentoring</h3><ol class="timeline">' + sup + "</ol></div>" +
        '<div class="sub-block"><h3 class="sub-h">Committees, reviewing & memberships</h3>' + groups + "</div>" +
      "</div>");
  }

  /* ================= ACTIVITIES (chronology) ================= */
  var KGROUP = { "Conference talk": "talks", "Invited talk": "talks", "Seminar": "talks", "Workshop": "talks", "Outreach": "talks", "Event attended": "events", "Research stay": "stays" };
  function activityItem(t) {
    return '<li class="act k-' + KGROUP[t.kind] + '"><span class="act-dot" aria-hidden="true"></span>' +
      '<div class="act-meta"><span class="act-kind">' + esc(t.kind) + "</span><span>" + esc(fmtDate(t.date)) + "</span><span>" + esc(t.place) + "</span></div>" +
      '<p class="act-title' + (t.isDescription ? " desc" : "") + '">' + esc(t.title) + "</p>" +
      '<p class="act-event">' + esc(t.event) + ' · <span class="muted">' + esc(t.role) + "</span></p>" + linkChips(t.links, false) + "</li>";
  }
  function activitiesPanel() {
    var years = Array.from(new Set(activities.map(function (t) { return t.date.slice(0, 4); }))).sort().reverse();
    var c = { talks: 0, events: 0, stays: 0 };
    activities.forEach(function (t) { c[KGROUP[t.kind]]++; });
    return panel("activities", "03 · Academic life", "Talks, conferences & events",
      "A chronology of conference presentations, invited talks, seminars, workshops, research stays and events attended.",
      '<div class="filters compact" role="search" aria-label="Filter activities">' +
        '<label class="search"><span class="sr-only">Search activities</span><input id="aq" type="search" placeholder="Search events, places, titles…" autocomplete="off"></label>' +
        '<div class="chipset" role="group" aria-label="Type">' +
          '<button type="button" class="fchip" data-akind="all" aria-pressed="true">All <span class="n">' + activities.length + "</span></button>" +
          '<button type="button" class="fchip" data-akind="talks" aria-pressed="false">Talks & workshops <span class="n">' + c.talks + "</span></button>" +
          '<button type="button" class="fchip" data-akind="stays" aria-pressed="false">Research stays <span class="n">' + c.stays + "</span></button>" +
          '<button type="button" class="fchip" data-akind="events" aria-pressed="false">Events attended <span class="n">' + c.events + "</span></button>" +
        "</div>" +
        '<div class="selects"><label><span>Year</span><select id="aYear"><option value="all">All years</option>' + years.map(function (y) { return "<option>" + y + "</option>"; }).join("") + "</select></label>" +
        '<button type="button" class="reset" id="aReset">Clear filters</button></div>' +
      "</div>" +
      '<p class="count" id="aCount" role="status" aria-live="polite"></p><div id="aResults"></div>');
  }
  var AF = { q: "", kind: "all", year: "all" };
  function runActs() {
    var list = activities.filter(function (t) {
      if (AF.kind !== "all" && KGROUP[t.kind] !== AF.kind) return false;
      if (AF.year !== "all" && t.date.slice(0, 4) !== AF.year) return false;
      if (AF.q) {
        var hay = [t.title, t.event, t.place, t.role, t.kind].join(" ").toLowerCase();
        if (AF.q.split(/\s+/).some(function (w) { return hay.indexOf(w) < 0; })) return false;
      }
      return true;
    });
    var by = {};
    list.forEach(function (t) { var y = t.date.slice(0, 4); (by[y] = by[y] || []).push(t); });
    document.getElementById("aResults").innerHTML = Object.keys(by).sort().reverse().map(function (y) {
      return '<div class="year-group"><h3 class="year">' + y + '</h3><ol class="acts">' + by[y].map(activityItem).join("") + "</ol></div>";
    }).join("") || '<div class="empty"><p><strong>No activity matches these filters.</strong></p><p><button type="button" class="linklike" data-clear="acts">Clear all filters</button></p></div>';
    document.getElementById("aCount").textContent = "Showing " + list.length + " of " + activities.length + " activities";
  }
  function syncActs() {
    document.querySelectorAll("[data-akind]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.akind === AF.kind)); });
    document.getElementById("aq").value = AF.q; document.getElementById("aYear").value = AF.year;
  }

  /* ================= COLLABORATIONS & CONTACT ================= */
  function collaborations() {
    var col = S.collaborators.map(function (c) {
      return '<li class="collab"><span class="collab-mono" aria-hidden="true">' + initials(c.name) + '</span><div><p class="h4">' + esc(c.name) + '</p><p class="muted">' + esc(c.org) + "</p><p>" + esc(c.context) + "</p></div></li>";
    }).join("");
    var topics = S.openTopics.map(function (t) { return '<li><p class="h4">' + esc(t.title) + "</p><p>" + esc(t.text) + "</p></li>"; }).join("");
    var c = S.contact;
    return panel("collaborations", "Collaborations", "Collaborations & contact",
      "I welcome scientific collaborations, invitations to talks and seminars, and exchanges on teaching.",
      '<div class="collab-grid">' +
        '<div class="sub-block"><h3 class="sub-h">Research collaborations</h3><ul class="collabs">' + col + '</ul><p class="legend">Documented supervision and research collaborations. Co-authors are listed with each publication.</p></div>' +
        '<div class="sub-block"><h3 class="sub-h">Open to collaboration on</h3><ul class="topics">' + topics + "</ul></div>" +
      "</div>" +
      '<div class="contact-grid" id="contact" tabindex="-1">' +
        '<div class="contact-card dark"><p class="eyebrow">Contact</p><p class="contact-lead">The best way to reach me is by email.</p>' +
          '<a class="btn light big" href="mailto:' + esc(c.email) + '">' + uiIcon("contact") + '<span class="email">' + esc(c.email).replace("@", "@<wbr>") + "</span>" + "</a>" +
          '<address>' + c.lines.map(esc).join("<br>") + "</address></div>" +
        '<div class="contact-card"><p class="eyebrow">Student projects & supervision</p><p>' + esc(S.studentNote) + '</p>' +
          '<a class="btn ghost" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent("Student project enquiry") + '">Write about a project</a></div>' +
        '<div class="contact-card"><p class="eyebrow">Profiles</p>' + profileLinks("full") +
          '<a class="btn ghost" href="' + esc(S.person.cv) + '">Download CV (PDF)</a></div>' +
      "</div>");
  }

  /* ================= ABOUT ================= */
  function about() {
    function tl(arr) {
      return '<ol class="timeline">' + arr.map(function (e) {
        return '<li class="tl-item"><p class="tl-meta">' + esc(e.period) + (e.mobility ? ' <span class="lvl">Research mobility</span>' : "") + '</p><h4 class="h4">' + esc(e.title) +
          '</h4><p class="muted">' + esc(e.org) + "</p>" + (e.text ? "<p>" + esc(e.text) + "</p>" : "") + (e.link ? '<div class="lchips">' + a(e.link.url, esc(e.link.label), "lchip") + "</div>" : "") + "</li>";
      }).join("") + "</ol>";
    }
    var aw = '<ul class="awards">' + S.awards.map(function (x) {
      return '<li class="award k-' + x.kind + '"><span class="ak">' + AWARD[x.kind] + '</span><div><p class="tl-meta">' + esc(fmtDate(x.date)) + '</p><h4 class="h4">' + esc(x.title) +
        '</h4><p class="muted">' + esc(x.org) + "</p>" + (x.text ? "<p>" + esc(x.text) + "</p>" : "") + (x.link ? '<div class="lchips">' + a(x.link, "Related paper", "lchip") + "</div>" : "") + "</div></li>";
    }).join("") + '</ul><p class="legend"><b>Award</b>: prize received · <b>Nomination</b>: nominated, not awarded · <b>Shortlisted</b>: reached a selection stage · <b>Grant</b>: funding obtained.</p>';
    var sk = '<dl class="skills">' + S.skills.map(function (s) { return "<div><dt>" + esc(s.label) + "</dt><dd>" + esc(s.value) + "</dd></div>"; }).join("") + "</dl>";
    var segs = [["Experience", tl(S.experience)], ["Education", tl(S.education)], ["Distinctions", aw], ["Skills & languages", sk]];
    return panel("about", "About", "Experience, education & distinctions", esc(S.person.intro),
      '<div class="segs" role="tablist" aria-label="About sections">' + segs.map(function (s, i) {
        return '<button type="button" role="tab" class="seg" id="ab-' + i + '" aria-controls="abp-' + i + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : "") + ">" + s[0] + "</button>";
      }).join("") + "</div>" +
      segs.map(function (s, i) { return '<div class="tpane" role="tabpanel" id="abp-' + i + '" aria-labelledby="ab-' + i + '"' + (i ? " hidden" : "") + ">" + s[1] + "</div>"; }).join(""));
  }

  function footer() {
    return '<footer class="foot"><p>© ' + new Date().getFullYear() + " " + esc(S.person.name) + " · Last updated " + esc(fmtDate(S.lastUpdated)) + "</p>" +
      '<a class="to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>';
  }

  /* ================= render ================= */
  app.innerHTML = hero() + widgets() + pillars() + research() + publications() + teaching() + service() + activitiesPanel() + collaborations() + about() + footer();
  document.getElementById("dockNav").innerHTML = NAV.map(function (n) { return '<li><a href="#' + n[0] + '" data-nav="' + n[0] + '">' + n[1] + "</a></li>"; }).join("");
  document.getElementById("menuList").innerHTML = NAV.map(function (n, i) { return '<li><a href="#' + n[0] + '" data-nav="' + n[0] + '"><span class="mi-n" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" + n[1] + "</a></li>"; }).join("");
  runPubs(); runActs();

  if (S.backdrop) {
    document.getElementById("backdropPhoto").style.backgroundImage = "url('" + S.backdrop + "')";
    document.documentElement.classList.add("has-photo");
  }

  /* clock */
  var clockEl = document.getElementById("clock"), fmt;
  try { fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: S.person.timezone }); }
  catch (e) { fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" }); }
  function tick() { clockEl.textContent = fmt.format(new Date()); }
  tick(); setInterval(tick, 15000);

  /* highlights — manual navigation; optional auto-advance with a Pause control */
  var cur = 0, entry = document.getElementById("entry"), timer = null, playing = false;
  var pauseBtn = document.getElementById("newsPause");
  function show(i) {
    cur = (i + S.highlights.length) % S.highlights.length;
    entry.classList.add("swap");
    setTimeout(function () { entry.innerHTML = slide(cur); entry.classList.remove("swap"); }, reduceMotion ? 0 : 180);
    document.querySelectorAll(".dot").forEach(function (d, k) { d.setAttribute("aria-current", String(k === cur)); });
  }
  function setPlaying(on) {
    playing = on; clearInterval(timer); timer = null;
    if (on) timer = setInterval(function () { if (!document.hidden) show(cur + 1); }, 8000);
    entry.setAttribute("aria-live", on ? "off" : "polite");
    if (pauseBtn) {
      pauseBtn.setAttribute("aria-pressed", String(!on));
      pauseBtn.querySelector(".pause-lbl").textContent = on ? "Pause" : "Play";
      pauseBtn.classList.toggle("paused", !on);
      pauseBtn.setAttribute("aria-label", on ? "Pause automatic rotation" : "Resume automatic rotation");
    }
  }
  if (S.highlights.length > 1) {
    document.querySelectorAll(".dot").forEach(function (d) { d.addEventListener("click", function () { setPlaying(false); show(+d.dataset.slide); }); });
    document.getElementById("newsPrev").addEventListener("click", function () { setPlaying(false); show(cur - 1); });
    document.getElementById("newsNext").addEventListener("click", function () { setPlaying(false); show(cur + 1); });
    if (!reduceMotion) { pauseBtn.hidden = false; pauseBtn.addEventListener("click", function () { setPlaying(!playing); }); setPlaying(true); }
    else setPlaying(false);
    var news = document.querySelector(".news");
    news.addEventListener("focusin", function (e) { if (playing && e.target !== pauseBtn) setPlaying(false); });
  }

  /* theme */
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

  /* tabs with keyboard support */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    function activate(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { activate(t); });
      t.addEventListener("keydown", function (e) {
        var j = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
        if (j === null) return;
        e.preventDefault(); var n = tabs[(j + tabs.length) % tabs.length]; n.focus(); activate(n);
      });
    });
  });

  /* publication filters */
  function debounce(fn) { var t; return function () { var args = arguments; clearTimeout(t); t = setTimeout(function () { fn.apply(null, args); }, 120); }; }
  document.getElementById("pq").addEventListener("input", debounce(function (e) { PF.q = e.target.value.trim().toLowerCase(); runPubs(); }));
  document.querySelectorAll("[data-pstatus]").forEach(function (b) { b.addEventListener("click", function () { PF.status = b.dataset.pstatus; syncPubs(); runPubs(); }); });
  document.getElementById("pType").addEventListener("change", function (e) { PF.type = e.target.value; runPubs(); });
  document.getElementById("pAxis").addEventListener("change", function (e) { PF.axis = e.target.value; runPubs(); });
  document.getElementById("pYear").addEventListener("change", function (e) { PF.year = e.target.value; runPubs(); });
  function clearPubs() { PF = { q: "", status: "all", type: "all", axis: "all", year: "all" }; syncPubs(); runPubs(); }
  document.getElementById("pReset").addEventListener("click", clearPubs);

  /* activity filters */
  document.getElementById("aq").addEventListener("input", debounce(function (e) { AF.q = e.target.value.trim().toLowerCase(); runActs(); }));
  document.querySelectorAll("[data-akind]").forEach(function (b) { b.addEventListener("click", function () { AF.kind = b.dataset.akind; syncActs(); runActs(); }); });
  document.getElementById("aYear").addEventListener("change", function (e) { AF.year = e.target.value; runActs(); });
  function clearActs() { AF = { q: "", kind: "all", year: "all" }; syncActs(); runActs(); }
  document.getElementById("aReset").addEventListener("click", clearActs);

  /* project stage filter */
  document.querySelectorAll("[data-stage-f]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.dataset.stageF;
      document.querySelectorAll("[data-stage-f]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      document.querySelectorAll(".project").forEach(function (p) { p.hidden = v !== "all" && p.dataset.stage !== v; });
    });
  });

  /* delegated clicks: axis shortcuts, clear buttons, copy citation */
  function goTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#" + id);
  }
  document.addEventListener("click", function (e) {
    var ax = e.target.closest("[data-axis]");
    if (ax) { PF = { q: "", status: "all", type: "all", axis: ax.dataset.axis, year: "all" }; syncPubs(); runPubs(); goTo("publications"); return; }
    var cl = e.target.closest("[data-clear]");
    if (cl) { if (cl.dataset.clear === "pubs") clearPubs(); else clearActs(); return; }
    var cp = e.target.closest("[data-cite]");
    if (cp && navigator.clipboard) {
      navigator.clipboard.writeText(cp.dataset.cite).then(function () { cp.textContent = "Copied"; setTimeout(function () { cp.textContent = "Copy citation"; }, 1600); });
    }
  });

  /* reveal on scroll (content is visible without JS animation support) */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    document.documentElement.classList.add("anim");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.02 });
    reveals.forEach(function (r) { io.observe(r); });
  }

  /* active section, dock, mobile menu & progress */
  var dock = document.getElementById("dock"), tabBar = document.getElementById("tabNav"), fill = document.getElementById("scrubberFill");
  var mq = window.matchMedia("(max-width: 899px)");
  var menuBtn = document.getElementById("menuBtn"), sheet = document.getElementById("menuSheet"), dockCurrent = document.getElementById("dockCurrent");
  var LABEL = {}; NAV.forEach(function (n) { LABEL[n[0]] = n[1]; });
  var sections = NAV.map(function (n) { return document.getElementById(n[0]); });
  var lastActive = "";
  function setActive(id) {
    if (id === lastActive) return; lastActive = id;
    document.querySelectorAll("[data-nav]").forEach(function (x) { if (x.dataset.nav === id) x.setAttribute("aria-current", "true"); else x.removeAttribute("aria-current"); });
    dockCurrent.textContent = LABEL[id];
    var on = document.querySelector('#dockNav [data-nav="' + id + '"]');
    if (on && !mq.matches) { var nav = on.closest(".dock-nav"); nav.scrollLeft = on.offsetLeft - nav.clientWidth / 2 + on.clientWidth / 2; }
  }
  function openMenu(open) {
    sheet.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.querySelector(".menu-lbl").textContent = open ? "Close" : "Menu";
    dock.classList.toggle("menu-open", open);
    if (open) { var c = sheet.querySelector('[aria-current="true"]') || sheet.querySelector("a"); c.focus(); }
  }
  menuBtn.addEventListener("click", function () { openMenu(sheet.hidden); });
  sheet.addEventListener("click", function (e) { if (e.target.closest("a")) openMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) { openMenu(false); menuBtn.focus(); } });
  document.addEventListener("click", function (e) { if (!sheet.hidden && !dock.contains(e.target)) openMenu(false); });
  mq.addEventListener ? mq.addEventListener("change", function () { openMenu(false); onScroll(); }) : mq.addListener(function () { openMenu(false); onScroll(); });

  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
      fill.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
      var show = mq.matches || tabBar.getBoundingClientRect().bottom < 0;
      dock.classList.toggle("show", show);
      dock.inert = !show;
      var id = "home", line = mq.matches ? 120 : innerHeight * 0.3;
      sections.forEach(function (s) { if (s && s.getBoundingClientRect().top < line) id = s.id; });
      if (innerHeight + y >= document.documentElement.scrollHeight - 4) id = NAV[NAV.length - 1][0];
      setActive(id);
      ticking = false;
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  /* honour a hash on load (content is rendered by JS) */
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(function () { target.scrollIntoView(); });
  }
})();
