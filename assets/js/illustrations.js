/* Course illustrations — original inline SVGs drawn for this site.
   All share the same 320 × 110 frame and use CSS variables (see style.css, --ill-*),
   so they follow the day / night themes. Purely conceptual: no code, no technical claims. */
(function () {
  var base = function (inner) {
    return '<svg class="ill" viewBox="0 0 320 110" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
      '<rect width="320" height="110" fill="var(--ill-bg)"/>' +
      '<path d="M0 86c40-14 82-18 124-8s78 14 120 2 56-12 76-6v36H0z" fill="var(--ill-dune)"/>' +
      '<path d="M0 98c52-10 104-8 160 0s110 6 160-4v16H0z" fill="var(--ill-dune2)"/>' + inner + "</svg>";
  };
  var ink = "var(--ill-ink)", acc = "var(--ill-accent)", soft = "var(--ill-soft)", paper = "var(--ill-paper)";
  function arrow(x1, y1, x2, y2) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 6;
    return '<path d="M' + x1 + " " + y1 + "L" + x2 + " " + y2 + '" stroke="' + ink + '" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M' + x2 + " " + y2 + "L" + (x2 - h * Math.cos(a - 0.5)) + " " + (y2 - h * Math.sin(a - 0.5)) + "M" + x2 + " " + y2 + "L" +
      (x2 - h * Math.cos(a + 0.5)) + " " + (y2 - h * Math.sin(a + 0.5)) + '" stroke="' + ink + '" stroke-width="2" fill="none" stroke-linecap="round"/>';
  }
  function node(x, y, r, fill) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '" stroke="' + ink + '" stroke-width="2"/>'; }
  function edge(x1, y1, x2, y2) { return '<path d="M' + x1 + " " + y1 + "L" + x2 + " " + y2 + '" stroke="' + ink + '" stroke-width="2"/>'; }
  function box(x, y, w, h, fill, rx) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 4 : rx) + '" fill="' + fill + '" stroke="' + ink + '" stroke-width="2"/>'; }
  function label(x, y, t, size) { return '<text x="' + x + '" y="' + y + '" font-family="Outfit, sans-serif" font-size="' + (size || 11) + '" font-weight="700" fill="' + ink + '" text-anchor="middle">' + t + "</text>"; }

  var I = {};

  /* arrays and a linked list */
  I.ds = (function () {
    var s = "";
    for (var i = 0; i < 6; i++) s += box(30 + i * 20, 34, 20, 22, i === 2 ? acc : paper, 0);
    s += '<rect x="30" y="34" width="120" height="22" fill="none" stroke="' + ink + '" stroke-width="2"/>';
    for (var k = 0; k < 3; k++) {
      var x = 182 + k * 44;
      s += box(x, 34, 26, 22, k === 0 ? soft : paper, 5) + '<path d="M' + (x + 17) + ' 34v22" stroke="' + ink + '" stroke-width="1.5"/>';
      s += '<circle cx="' + (x + 21.5) + '" cy="45" r="2" fill="' + ink + '"/>';
      if (k < 2) s += arrow(x + 23, 45, x + 42, 45);
    }
    s += edge(286, 45, 296, 45) + edge(296, 37, 296, 53);
    return base(s);
  })();

  /* first steps: a sequence, a condition and a loop (flowchart) */
  I["py-basics"] = (function () {
    var s = "";
    s += '<rect x="22" y="36" width="44" height="20" rx="10" fill="' + paper + '" stroke="' + ink + '" stroke-width="2"/>';
    s += arrow(66, 46, 92, 46);
    s += '<path d="M120 26l26 20-26 20-26-20z" fill="' + acc + '" stroke="' + ink + '" stroke-width="2"/>' + label(120, 50, "if");
    s += arrow(146, 46, 176, 32) + arrow(146, 46, 176, 60);
    s += box(178, 22, 40, 20, paper) + box(178, 50, 40, 20, soft);
    s += arrow(218, 32, 244, 46) + arrow(218, 60, 244, 46);
    s += '<circle cx="262" cy="46" r="17" fill="' + paper + '" stroke="' + ink + '" stroke-width="2"/>';
    s += '<path d="M262 29a17 17 0 1 1-15 9" fill="none" stroke="' + acc + '" stroke-width="3" stroke-linecap="round"/>';
    s += '<path d="M244 33l3 6 6-2" fill="none" stroke="' + acc + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    return base(s);
  })();

  /* a function mapping a list to a new list */
  I["py-functions"] = (function () {
    var s = "";
    for (var i = 0; i < 4; i++) s += box(26 + i * 18, 36, 18, 20, paper, 0);
    s += arrow(102, 46, 128, 46);
    s += '<rect x="130" y="26" width="60" height="40" rx="10" fill="' + acc + '" stroke="' + ink + '" stroke-width="2"/>' + label(160, 51, "f( )", 14);
    s += arrow(190, 46, 216, 46);
    for (var k = 0; k < 4; k++) s += box(218 + k * 18, 36, 18, 20, k % 2 ? soft : paper, 0);
    return base(s);
  })();

  /* a binary tree and a graph */
  I["trees-graphs"] = (function () {
    var s = "";
    var T = [[90, 22], [60, 46], [120, 46], [44, 70], [76, 70], [104, 70], [136, 70]];
    [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]].forEach(function (e) { s += edge(T[e[0]][0], T[e[0]][1], T[e[1]][0], T[e[1]][1]); });
    T.forEach(function (p, i) { s += node(p[0], p[1], 7, i === 0 ? acc : (i < 3 ? soft : paper)); });
    var G = [[214, 24], [258, 30], [274, 64], [232, 74], [200, 54]];
    [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3]].forEach(function (e) { s += edge(G[e[0]][0], G[e[0]][1], G[e[1]][0], G[e[1]][1]); });
    G.forEach(function (p, i) { s += node(p[0], p[1], 7, i % 2 ? acc : paper); });
    return base(s);
  })();

  /* source text → syntax tree → instructions */
  I.compilation = (function () {
    var s = "";
    s += box(22, 20, 62, 54, paper, 6);
    [30, 40, 50, 60].forEach(function (y, i) { s += '<rect x="30" y="' + y + '" width="' + [40, 30, 44, 24][i] + '" height="4" rx="2" fill="' + (i === 1 ? acc : soft) + '"/>'; });
    s += arrow(90, 47, 114, 47);
    var T = [[150, 24], [132, 50], [168, 50], [122, 72], [142, 72]];
    [[0, 1], [0, 2], [1, 3], [1, 4]].forEach(function (e) { s += edge(T[e[0]][0], T[e[0]][1], T[e[1]][0], T[e[1]][1]); });
    T.forEach(function (p, i) { s += node(p[0], p[1], 6, i === 0 ? acc : paper); });
    s += arrow(184, 47, 208, 47);
    for (var i = 0; i < 4; i++) s += box(214, 20 + i * 14, 84, 11, i === 0 ? soft : paper, 3);
    return base(s);
  })();

  /* project work: a task board and merging branches */
  I.projects = (function () {
    var s = "";
    s += box(22, 18, 132, 62, paper, 6);
    [0, 1, 2].forEach(function (c) {
      var x = 30 + c * 42;
      s += '<rect x="' + x + '" y="26" width="34" height="4" rx="2" fill="' + ink + '"/>';
      for (var r = 0; r < 3 - c; r++) s += '<rect x="' + x + '" y="' + (36 + r * 13) + '" width="34" height="9" rx="2" fill="' + (c === 2 ? acc : soft) + '"/>';
    });
    s += '<path d="M182 30H296" stroke="' + ink + '" stroke-width="2.5"/>';
    s += '<path d="M206 30c14 0 14 34 30 34h20c16 0 16-34 30-34" fill="none" stroke="' + acc + '" stroke-width="2.5"/>';
    [[182, 30], [206, 30], [236, 64], [256, 64], [286, 30], [296, 30]].forEach(function (p, i) { s += node(p[0], p[1], 5, i === 2 || i === 3 ? acc : paper); });
    return base(s);
  })();

  /* star schema around a fact table + database cylinder */
  I.warehouse = (function () {
    var s = "";
    var C = [150, 47];
    [[96, 24], [204, 24], [96, 70], [204, 70]].forEach(function (p) { s += edge(C[0], C[1], p[0], p[1]); });
    [[96, 24], [204, 24], [96, 70], [204, 70]].forEach(function (p) { s += box(p[0] - 18, p[1] - 9, 36, 18, paper, 3); });
    s += box(130, 34, 40, 26, acc, 4);
    s += '<path d="M248 30v34c0 5 12 9 26 9s26-4 26-9V30" fill="' + soft + '" stroke="' + ink + '" stroke-width="2"/>';
    s += '<ellipse cx="274" cy="30" rx="26" ry="8" fill="' + paper + '" stroke="' + ink + '" stroke-width="2"/>';
    s += '<path d="M248 47c0 5 12 9 26 9s26-4 26-9" fill="none" stroke="' + ink + '" stroke-width="2"/>';
    s += '<path d="M20 30v30c0 5 10 8 22 8s22-3 22-8V30" fill="' + soft + '" stroke="' + ink + '" stroke-width="2"/><ellipse cx="42" cy="30" rx="22" ry="7" fill="' + paper + '" stroke="' + ink + '" stroke-width="2"/>';
    return base(s);
  })();

  /* two classes of points and a decision boundary */
  I.ml = (function () {
    var s = "";
    s += '<path d="M40 76H290M40 76V16" stroke="' + ink + '" stroke-width="2" stroke-linecap="round"/>';
    s += '<path d="M70 18c40 30 90 40 210 50" fill="none" stroke="' + acc + '" stroke-width="3" stroke-dasharray="6 5" stroke-linecap="round"/>';
    [[70, 40], [92, 52], [110, 62], [84, 66], [130, 68], [62, 58]].forEach(function (p) { s += node(p[0], p[1], 5, paper); });
    [[150, 30], [190, 26], [230, 40], [210, 22], [252, 30], [172, 44]].forEach(function (p) { s += '<rect x="' + (p[0] - 5) + '" y="' + (p[1] - 5) + '" width="10" height="10" rx="2" fill="' + soft + '" stroke="' + ink + '" stroke-width="2"/>'; });
    return base(s);
  })();

  /* two related tables */
  I.databases = (function () {
    var s = "";
    function table(x) {
      var t = box(x, 18, 86, 58, paper, 5) + '<rect x="' + x + '" y="18" width="86" height="14" rx="5" fill="' + soft + '" stroke="' + ink + '" stroke-width="2"/>';
      [44, 58].forEach(function (y) { t += '<path d="M' + x + " " + y + "h86" + '" stroke="' + ink + '" stroke-width="1.5"/>'; });
      t += '<path d="M' + (x + 30) + ' 32v44" stroke="' + ink + '" stroke-width="1.5"/>';
      return t;
    }
    s += table(40) + table(194);
    s += '<path d="M126 51c26 0 34-14 68-14" fill="none" stroke="' + acc + '" stroke-width="3" stroke-linecap="round"/>';
    s += node(126, 51, 4, acc) + node(194, 37, 4, acc);
    return base(s);
  })();

  /* classes, an inheritance link and object instances */
  I.oop = (function () {
    var s = "";
    function cls(x, y, w, fill) {
      return box(x, y, w, 36, paper, 4) + '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="11" rx="4" fill="' + fill + '" stroke="' + ink + '" stroke-width="2"/>' +
        '<path d="M' + x + " " + (y + 23) + "h" + w + '" stroke="' + ink + '" stroke-width="1.5"/>' +
        '<rect x="' + (x + 7) + '" y="' + (y + 15) + '" width="' + (w - 22) + '" height="4" rx="2" fill="' + soft + '"/>' +
        '<rect x="' + (x + 7) + '" y="' + (y + 28) + '" width="' + (w - 18) + '" height="4" rx="2" fill="' + soft + '"/>';
    }
    s += cls(34, 8, 66, acc);                                   /* base class */
    s += cls(34, 62, 66, soft);                                 /* derived class */
    s += '<path d="M67 62V53" stroke="' + ink + '" stroke-width="2"/>';
    s += '<path d="M67 45l-7 8h14z" fill="' + paper + '" stroke="' + ink + '" stroke-width="2" stroke-linejoin="round"/>'; /* inheritance */
    s += cls(196, 30, 70, acc);                                 /* associated class */
    s += '<path d="M100 80h36c22 0 30-32 52-32h8" fill="none" stroke="' + ink + '" stroke-width="2"/>';
    s += '<path d="M188 44l8 4-8 4" fill="none" stroke="' + ink + '" stroke-width="2" stroke-linejoin="round"/>';
    [[150, 20], [174, 14], [292, 16]].forEach(function (p, k) { s += node(p[0], p[1], 6, k === 2 ? acc : paper); }); /* objects */
    s += '<path d="M155 24l42 10M179 18l18 13M287 21l-12 10" stroke="' + ink + '" stroke-width="1.5" stroke-dasharray="3 3"/>';
    return base(s);
  })();

  window.COURSE_ILLUSTRATIONS = I;
})();
