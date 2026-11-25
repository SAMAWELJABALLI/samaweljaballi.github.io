/* Shared chrome for static secondary pages (research/*.html):
   dock navigation, mobile menu, theme toggle, backdrop photo, progress bar, "copy BibTeX".
   The page content itself is static HTML. <body data-base="../"> gives the path back to the site root. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var base = document.body.getAttribute("data-base") || "";
  var current = document.body.getAttribute("data-section") || "research";
  var NAV = [
    ["home", "Home"], ["research", "Research"], ["publications", "Publications"], ["teaching", "Teaching"],
    ["service", "Service"], ["activities", "Activities"], ["collaborations", "Collaborations"], ["about", "About"]
  ];
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var p = S.person || {};
  if (p.photoBadge || p.photoAvatar) {
    document.querySelectorAll(".dock-brand .mono").forEach(function (m) {
      m.classList.add("has-photo");
      m.innerHTML = '<img src="' + esc(base + (p.photoBadge || p.photoAvatar)) + '" width="30" height="30" alt="" decoding="async">';
    });
  }
  var label = "";
  document.getElementById("dockNav").innerHTML = NAV.map(function (n) {
    if (n[0] === current) label = n[1];
    return '<li><a href="' + base + "index.html#" + n[0] + '"' + (n[0] === current ? ' aria-current="true"' : "") + ">" + n[1] + "</a></li>";
  }).join("");
  document.getElementById("menuList").innerHTML = NAV.map(function (n, i) {
    return '<li><a href="' + base + "index.html#" + n[0] + '"' + (n[0] === current ? ' aria-current="true"' : "") + '><span class="mi-n" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" + n[1] + "</a></li>";
  }).join("");
  document.getElementById("dockCurrent").textContent = label;
  if (S.backdrop) {
    document.getElementById("backdropPhoto").style.backgroundImage = "url('" + base + S.backdrop + "')";
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
  var y = document.getElementById("footYear"); if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var src = document.getElementById(b.getAttribute("data-copy"));
      if (!src || !navigator.clipboard) return;
      navigator.clipboard.writeText(src.textContent).then(function () {
        var t = b.textContent; b.textContent = "Copied"; setTimeout(function () { b.textContent = t; }, 1600);
      }, function () {});
    });
  });
})();
