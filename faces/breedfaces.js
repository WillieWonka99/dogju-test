/* Draft: one sticker-style face per breed (viewBox 0 0 48 48), same line weight / eyes / nose / blush as core/dogs.js. */
(function (W) {
  'use strict';
  var INK = '#342824', PINK = '#F2A7A0', TONGUE = '#DF817A', SW = 'stroke="' + INK + '" stroke-width="2.4"';
  function p(d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '" ' + (extra === false ? '' : SW + ' stroke-linejoin="round"') + '/>'; }
  function eyes(y, gap, r) { gap = gap || 6; r = r || 1.9; return '<circle cx="' + (24 - gap) + '" cy="' + y + '" r="' + r + '" fill="' + INK + '"/><circle cx="' + (24 + gap) + '" cy="' + y + '" r="' + r + '" fill="' + INK + '"/>'; }
  function shine(y, gap, r) { gap = gap || 6; return '<circle cx="' + (24 - gap + r * .4) + '" cy="' + (y - r * .4) + '" r="' + r * .35 + '" fill="#fff"/><circle cx="' + (24 + gap + r * .4) + '" cy="' + (y - r * .4) + '" r="' + r * .35 + '" fill="#fff"/>'; }
  function nose(y, rx) { return '<ellipse cx="24" cy="' + y + '" rx="' + (rx || 2.7) + '" ry="' + ((rx || 2.7) * .74) + '" fill="' + INK + '"/>'; }
  function mouth(y, tongue) {
    return (tongue === false ? '' : '<path d="M22.4 ' + (y + 1.4) + 'C22.2 ' + (y + 5) + ' 25.8 ' + (y + 5.2) + ' 25.7 ' + (y + 1.5) + 'Z" fill="' + TONGUE + '" stroke="' + INK + '" stroke-width="1.7" stroke-linejoin="round"/>') +
      '<path d="M20.6 ' + y + 'C21.8 ' + (y + 2) + ' 23.8 ' + (y + 1.7) + ' 24 ' + (y - .1) + 'C24.2 ' + (y + 1.7) + ' 26.2 ' + (y + 2) + ' 27.4 ' + y + '" fill="none" stroke="' + INK + '" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function blush(y, gap) { gap = gap || 10; return '<ellipse cx="' + (24 - gap) + '" cy="' + y + '" rx="2.6" ry="1.5" fill="' + PINK + '"/><ellipse cx="' + (24 + gap) + '" cy="' + y + '" rx="2.6" ry="1.5" fill="' + PINK + '"/>'; }
  var HEAD = 'M24 10.2C33 10 38.8 15.6 39 23.2C39.2 31.4 32.8 38.2 24 38.2C15.2 38.2 8.8 31.4 9 23.2C9.2 15.6 15 10.4 24 10.2Z';
  var WIDE = 'M24 12C34.6 11.8 41 17.4 41 25C41 32.8 33.8 38.6 24 38.6C14.2 38.6 7 32.8 7 25C7 17.4 13.4 12.2 24 12Z';
  function face(y) { return eyes(y) + nose(y + 5.6) + mouth(y + 8.2) + blush(y + 7.6); }
  // pointed ears (shiba-like) with inner colour
  function pointy(c, ci) {
    return p('M11.6 18C10.6 12 11.4 7 13.6 3.8C17 5.6 20.2 8.6 22.2 12Z', c) + p('M36.4 18C37.4 12 36.6 7 34.4 3.8C31 5.6 27.8 8.6 25.8 12Z', c) +
      p('M13.9 13.6C13.5 10.8 13.9 8.6 14.9 7.2C16.7 8.4 18.3 10 19.5 11.8Z', ci, false) + p('M34.1 13.6C34.5 10.8 34.1 8.6 33.1 7.2C31.3 8.4 29.7 10 28.5 11.8Z', ci, false);
  }
  // floppy ears hanging at the sides
  function floppy(c, len) {
    len = len || 0;
    return p('M13 14C7 15.6 4.8 22 5.4 ' + (28 + len) + 'C5.8 ' + (32 + len) + ' 9.6 ' + (33 + len) + ' 11.4 ' + (29 + len) + 'C12.8 25 14.6 20 17.4 16.4Z', c) +
      p('M35 14C41 15.6 43.2 22 42.6 ' + (28 + len) + 'C42.2 ' + (32 + len) + ' 38.4 ' + (33 + len) + ' 36.6 ' + (29 + len) + 'C35.2 25 33.4 20 30.6 16.4Z', c);
  }

  var F = {
    // 米克斯 — brown, one ear up one ear folded (a bit of everything)
    mix: function () {
      var c = '#A9764E', l = '#F3DDB8';
      // ears up, tips folded forward (half-prick: a bit of everything)
      return p('M11.4 19C9.4 13.6 9.8 8.4 12.8 5.2C16.4 6.4 19.4 9.4 21 13Z', c) + p('M12.8 5.2C10.4 8.6 10.6 11.4 12.2 13.2C13.6 11.6 15.6 10.4 17.6 9.8Z', '#8A5C3A', false) +
        p('M36.6 19C38.6 13.6 38.2 8.4 35.2 5.2C31.6 6.4 28.6 9.4 27 13Z', c) + p('M35.2 5.2C37.6 8.6 37.4 11.4 35.8 13.2C34.4 11.6 32.4 10.4 30.4 9.8Z', '#8A5C3A', false) +
        p(HEAD, c, false) + p('M24 21C20.4 21 17.4 24.6 17.2 28.6C17 33.8 20.6 37.8 24 37.8C27.4 37.8 31 33.8 30.8 28.6C30.6 24.6 27.6 21 24 21Z', l, false) +
        '<path d="' + HEAD + '" fill="none" ' + SW + '/>' + face(21.6);
    },
    // 臘腸 — cream, long floppy ears, long muzzle (豆花)
    dachshund: function () {
      var c = '#DEAE8A', l = '#F6E3BC';
      return floppy(c, 4) + p('M24 8.5C32.8 8.2 37.2 14.5 37 22.4C36.8 30.6 31.6 37.2 24.2 37.4C16.4 37.6 11.1 31 11.2 22.6C11.3 14.6 15.6 8.8 24 8.5Z', l) + face(21.2);
    },
    // 柴犬 — red, pointed ears, cream cheeks + brow dots (柚子)
    shiba: function () {
      var c = '#D9814A', l = '#F6E3BC';
      return pointy(c, l) + p(HEAD, c, false) + p('M9.4 25.8C12.6 23 18 22.8 21.1 25.4C22.7 24.4 25.3 24.4 26.9 25.4C30 22.8 35.4 23 38.6 25.8C37.6 33.2 31.8 38 24 38C16.2 38 10.4 33.2 9.4 25.8Z', l, false) +
        '<path d="' + HEAD + '" fill="none" ' + SW + '/><ellipse cx="18" cy="17.8" rx="2.1" ry="1.3" fill="' + l + '"/><ellipse cx="30" cy="17.8" rx="2.1" ry="1.3" fill="' + l + '"/>' + face(21.6);
    },
    // 柯基 — orange/white, big upright ears, white blaze (麻糬)
    corgi: function () {
      var c = '#D9814A', w = '#FFFFFF';
      return p('M11.5 20C8.6 14 7.6 8 9.4 3.8C14 4.2 18.6 8 21.6 12.6Z', c) + p('M36.5 20C39.4 14 40.4 8 38.6 3.8C34 4.2 29.4 8 26.4 12.6Z', c) +
        p('M12.8 15.2C11.9 12.2 11.7 9.6 12.4 7.6C14.6 8.6 16.6 10.4 18 12.4Z', w, false) + p('M35.2 15.2C36.1 12.2 36.3 9.6 35.6 7.6C33.4 8.6 31.4 10.4 30 12.4Z', w, false) +
        p('M24 10.6C33.4 10.4 39.2 16.6 39 25C38.8 33.4 32.6 39.4 24.2 39.4C15.6 39.4 9.2 33.6 9.2 25.2C9.2 16.8 14.8 10.8 24 10.6Z', c, false) +
        p('M24 16.8C23.2 20.6 16.4 23.6 16 30C15.7 35.4 19.8 39 24 39C28.2 39 32.3 35.4 32 30C31.6 23.6 24.8 20.6 24 16.8Z', w, false) +
        '<path d="M24 10.6C33.4 10.4 39.2 16.6 39 25C38.8 33.4 32.6 39.4 24.2 39.4C15.6 39.4 9.2 33.6 9.2 25.2C9.2 16.8 14.8 10.8 24 10.6Z" fill="none" ' + SW + '/>' + eyes(24, 6.6) + nose(28) + mouth(30.4) + blush(29.6, 9.8);
    },
    // 貴賓 — apricot, curly top-knot pompom, curly ear puffs
    poodle: function () {
      var c = '#E9C39B', d = '#D9A877';
      function puff(cx, cy, r) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c + '" ' + SW + '/>'; }
      return puff(10, 26, 6) + puff(10.6, 33, 5) + puff(38, 26, 6) + puff(37.4, 33, 5) +
        p('M24 14C32 13.8 36.6 18.6 36.6 25.4C36.6 32.6 31.4 38 24 38C16.6 38 11.4 32.6 11.4 25.4C11.4 18.6 16 14.2 24 14Z', c) +
        puff(18.4, 12, 5.4) + puff(24, 9.2, 6) + puff(29.6, 12, 5.4) +
        '<path d="M20 9.6C21.6 8.6 23 9.4 22.6 11M25.6 8C27.4 7.4 28.4 8.8 27.6 10.2" fill="none" stroke="' + d + '" stroke-width="1.4" stroke-linecap="round"/>' +
        eyes(23.6, 5.4) + nose(28.6, 2.4) + mouth(30.8) + blush(30, 8.6);
    },
    // 博美 — orange fox face, small pointed ears, big fluffy ruff
    pom: function () {
      var c = '#E9A869', l = '#F8DCB4';
      var ruff = 'M24 8C28 5.6 32.4 7.4 33.6 10.4C37.6 9.8 40.6 13.2 39.6 16.6C43.2 18 44 22.4 41.6 25C44 27.8 42.8 32 39.4 33C40 36.8 36.6 39.6 33 38.6C31.4 42 26.8 42.8 24 40.6C21.2 42.8 16.6 42 15 38.6C11.4 39.6 8 36.8 8.6 33C5.2 32 4 27.8 6.4 25C4 22.4 4.8 18 8.4 16.6C7.4 13.2 10.4 9.8 14.4 10.4C15.6 7.4 20 5.6 24 8Z';
      return p('M15.4 15C14.8 11.2 15.6 8 17.4 6C19.6 7.4 21.4 9.4 22.4 11.8Z', c) + p('M32.6 15C33.2 11.2 32.4 8 30.6 6C28.4 7.4 26.6 9.4 25.6 11.8Z', c) +
        p(ruff, c) + p('M24 15.6C29.6 15.4 33 19 33 24.2C33 29.6 29 33.6 24 33.6C19 33.6 15 29.6 15 24.2C15 19 18.4 15.8 24 15.6Z', l, false) +
        eyes(22.4, 4.8, 1.8) + nose(26.6, 2.2) + mouth(28.6) + blush(28, 7.4);
    },
    // 馬爾濟斯 — white, long silky hair parted in the middle, pink bow
    maltese: function () {
      var w = '#FFFFFF', h = '#F4EFE8';
      // long silky ear hair hanging to the chin on both sides, round face, top-knot with a pink bow
      return p('M14.6 13.6C8.8 15 6.4 22 6.6 30C6.8 35.6 7.8 39.6 9.6 42.4C12.4 41.2 14.4 38.4 15 34.4C15.6 28 15.8 21 18 16Z', h) +
        p('M33.4 13.6C39.2 15 41.6 22 41.4 30C41.2 35.6 40.2 39.6 38.4 42.4C35.6 41.2 33.6 38.4 33 34.4C32.4 28 32.2 21 30 16Z', h) +
        p('M24 11.4C32 11.2 36.2 16.6 36.2 23.6C36.2 31 31.2 37 24 37C16.8 37 11.8 31 11.8 23.6C11.8 16.6 16 11.6 24 11.4Z', w) +
        '<path d="M24 11.6V16.4" stroke="#D9D0C6" stroke-width="1.4" stroke-linecap="round"/>' +
        p('M24 4.6C26.6 4.6 27.8 6.4 27.4 8.4C27 10 25.6 11 24 11C22.4 11 21 10 20.6 8.4C20.2 6.4 21.4 4.6 24 4.6Z', w) +
        '<path d="M19.6 9.2L24 11L19.6 12.8ZM28.4 9.2L24 11L28.4 12.8Z" fill="#F08A9A" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/><circle cx="24" cy="11" r="1.3" fill="#F08A9A" stroke="' + INK + '" stroke-width="1.2"/>' +
        eyes(23.6, 5.4, 2.2) + shine(23.6, 5.4, 2.2) + nose(28.2, 2.3) + mouth(30.4) + blush(29.6, 8.6);
    },
    // 比熊 — white round cotton-ball head (湯圓)
    bichon: function () {
      var c = '#FFFFFF', l = '#F6E3BC';
      return p('M24 6.4C27 4.2 30.8 5.6 31.8 8.2C35.2 7.2 38.4 10 37.6 13.2C41 14.2 42.2 18.2 40.2 20.6C43 23 42.2 27.4 39.2 28.4C40.6 31.8 38.2 35.4 34.6 35C33.6 38.8 29.2 40.2 26.6 37.8C24.6 40.8 19.6 40.4 18.6 37.2C15.2 38.8 11.2 36.2 12.2 32.8C8.2 31.8 6.8 27.4 9.2 24.8C6.2 22.4 7.2 17.8 10.6 16.8C9.6 13 12.6 9.8 16.2 10.4C16.6 6.8 21 4.8 24 6.4Z', c) +
        '<circle cx="18.8" cy="22" r="2.1" fill="' + INK + '"/><circle cx="29.2" cy="22" r="2.1" fill="' + INK + '"/>' + nose(26.2, 2.3) + mouth(28.2) + blush(26.8, 8.6);
    },
    // 吉娃娃 — fawn, huge wide ears, apple head, big eyes
    chihuahua: function () {
      var c = '#D9A066', l = '#F6E3BC', pink = '#F2B8A8';
      return p('M14 20C7.6 17.4 3.4 11 3 4.6C9.6 4.2 16.2 8.2 20 14Z', c) + p('M34 20C40.4 17.4 44.6 11 45 4.6C38.4 4.2 31.8 8.2 28 14Z', c) +
        p('M12.6 16.4C9 14.6 6.8 11 6.4 7.6C10.2 7.6 14 9.8 16.4 13Z', pink, false) + p('M35.4 16.4C39 14.6 41.2 11 41.6 7.6C37.8 7.6 34 9.8 31.6 13Z', pink, false) +
        p('M24 11.6C32.4 11.4 37.4 16.8 37.2 23.8C37 31 31.6 36.8 24 36.8C16.4 36.8 11 31 10.8 23.8C10.6 16.8 15.6 11.8 24 11.6Z', c) +
        p('M24 25C20.6 25 18.4 27.8 18.6 30.6C18.8 34 21.2 36.4 24 36.4C26.8 36.4 29.2 34 29.4 30.6C29.6 27.8 27.4 25 24 25Z', l, false) +
        eyes(22.6, 6, 2.6) + shine(22.6, 6, 2.6) + nose(28.2, 2.1) + mouth(30.2) + blush(29, 10);
    },
    // 雪納瑞 — grey, bushy eyebrows, square beard and moustache, folded ears
    schnauzer: function () {
      var g = '#9E9894', l = '#E8E4E0';
      return p('M12.4 17C10.4 12.6 11.6 8.4 14.6 6.6C17.2 8.6 19 11 19.8 14Z', g) + p('M35.6 17C37.6 12.6 36.4 8.4 33.4 6.6C30.8 8.6 29 11 28.2 14Z', g) +
        p('M24 10C32.6 9.8 37.6 15 37.4 22.4C37.2 28 35 32.4 31 34.8L17 34.8C13 32.4 10.8 28 10.6 22.4C10.4 15 15.4 10.2 24 10Z', g) +
        p('M15.6 26C15.6 31.4 15.2 36.4 17.4 40.4C20.4 41.6 27.6 41.6 30.6 40.4C32.8 36.4 32.4 31.4 32.4 26C29 24.8 26.4 25.6 24 27C21.6 25.6 19 24.8 15.6 26Z', l) +
        p('M13.4 19.6C15.8 16.6 20 16.4 21.8 18.6C19.4 18.6 16.4 19.4 13.4 19.6ZM34.6 19.6C32.2 16.6 28 16.4 26.2 18.6C28.6 18.6 31.6 19.4 34.6 19.6Z', l) +
        eyes(21.8, 5.6) + nose(27.6, 2.6) + '<path d="M21 33.4C22.4 34.4 25.6 34.4 27 33.4" fill="none" stroke="' + INK + '" stroke-width="1.7" stroke-linecap="round"/>';
    },
    // 西施 — brown/white long hair, top-knot tied up, flat little face
    shihtzu: function () {
      var b = '#B5835A', w = '#FFFFFF';
      return p('M13 15C7 17 5.4 26 6 34C6.4 38.6 10.4 40.2 13.4 38C12.4 31 13 22 16.4 17Z', b) + p('M35 15C41 17 42.6 26 42 34C41.6 38.6 37.6 40.2 34.6 38C35.6 31 35 22 31.6 17Z', b) +
        p('M24 12C32 11.8 36.6 17 36.4 24C36.2 31.4 31.2 37.6 24 37.6C16.8 37.6 11.8 31.4 11.6 24C11.4 17 16 12.2 24 12Z', w) +
        p('M24 12C29 12 32 14.6 33 18C29.6 16.6 27 17.4 24 20C21 17.4 18.4 16.6 15 18C16 14.6 19 12 24 12Z', b, false) +
        p('M24 3C27.2 3 28.8 5.2 28.2 7.6C27.6 9.6 25.8 10.6 24 10.6C22.2 10.6 20.4 9.6 19.8 7.6C19.2 5.2 20.8 3 24 3Z', w) +
        '<path d="M20.4 10.4H27.6" stroke="#F08A9A" stroke-width="2.4" stroke-linecap="round"/>' +
        eyes(23.4, 5.6, 2.2) + shine(23.4, 5.6, 2.2) + nose(27.4, 2.2) + mouth(29.2) + blush(28.8, 9);
    },
    // 巴哥 — fawn, black mask muzzle, forehead wrinkles, small black folded ears
    pug: function () {
      var c = '#E3C08F', m = '#4A3A33';
      return p('M12.4 16.4C9 14.6 7.4 17.4 8.2 21C9.4 21.4 11 20.6 12.6 19.6Z', m) + p('M35.6 16.4C39 14.6 40.6 17.4 39.8 21C38.6 21.4 37 20.6 35.4 19.6Z', m) +
        p(WIDE, c) + p('M24 22.6C18.2 22.6 14.6 26.4 14.8 30.6C15 35.2 19 38.2 24 38.2C29 38.2 33 35.2 33.2 30.6C33.4 26.4 29.8 22.6 24 22.6Z', m, false) +
        '<path d="' + WIDE + '" fill="none" ' + SW + '/>' +
        '<path d="M19.4 16.6C21.6 15.6 26.4 15.6 28.6 16.6M20.6 19C22.4 18.2 25.6 18.2 27.4 19" fill="none" stroke="#B88E5E" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle cx="17.4" cy="23.4" r="2.6" fill="' + INK + '"/><circle cx="30.6" cy="23.4" r="2.6" fill="' + INK + '"/>' + shine(23.4, 6.6, 2.6) +
        '<ellipse cx="24" cy="27.6" rx="2.8" ry="1.9" fill="#1E1714"/>' +
        '<path d="M20.4 31.4C21.8 33.2 23.8 32.8 24 31.2C24.2 32.8 26.2 33.2 27.6 31.4" fill="none" stroke="#F3DCC0" stroke-width="1.6" stroke-linecap="round"/><path d="M22.6 32.8C22.4 35.6 25.6 35.8 25.4 32.9Z" fill="' + TONGUE + '"/>';
    },
    // 法國鬥牛犬 — fawn, big upright bat ears, flat face, dark muzzle
    frenchie: function () {
      var c = '#E3C08F', pink = '#F2B8A8', m = '#5A463C';
      // big rounded upright bat ears
      return p('M14.6 17.4C8.6 15.4 5.8 9.6 7.8 4.6C10.8 3 15.6 4.8 18.4 8.8C19.8 11 20.6 13.4 20.8 15.2Z', c) + p('M33.4 17.4C39.4 15.4 42.2 9.6 40.2 4.6C37.2 3 32.4 4.8 29.6 8.8C28.2 11 27.4 13.4 27.2 15.2Z', c) +
        p('M14.4 14.4C10.6 12.8 9.2 9.4 10.2 6.8C12.4 6.2 15.2 7.6 16.8 10.2C17.6 11.6 18 13 18 14.2Z', pink, false) + p('M33.6 14.4C37.4 12.8 38.8 9.4 37.8 6.8C35.6 6.2 32.8 7.6 31.2 10.2C30.4 11.6 30 13 30 14.2Z', pink, false) +
        p(WIDE, c) + p('M24 25.6C20.2 25.6 17.8 28.2 17.8 31C17.8 34.4 20.6 36.8 24 36.8C27.4 36.8 30.2 34.4 30.2 31C30.2 28.2 27.8 25.6 24 25.6Z', m, false) +
        '<path d="' + WIDE + '" fill="none" ' + SW + '/>' + eyes(23.4, 7, 2.4) + shine(23.4, 7, 2.4) +
        '<ellipse cx="24" cy="28.6" rx="2.8" ry="1.9" fill="#1E1714"/><path d="M21.2 32C22.4 33.4 25.6 33.4 26.8 32" fill="none" stroke="#F3DCC0" stroke-width="1.6" stroke-linecap="round"/>' + blush(31.4, 11);
    },
    // 英國鬥牛犬 — white with brown patch, wide jowls, underbite, rose ears
    bulldog: function () {
      var w = '#FFFFFF', b = '#C98F5C';
      var head = 'M24 11.6C35.2 11.4 41.6 17 41.6 24.4C41.6 28.4 40 30.4 38.6 32.6C37.4 36.6 31.6 39.4 24 39.4C16.4 39.4 10.6 36.6 9.4 32.6C8 30.4 6.4 28.4 6.4 24.4C6.4 17 12.8 11.8 24 11.6Z';
      return p('M11.6 15.4C8.6 14.2 6.2 16.2 6.6 19.6C8.6 19.8 10.6 18.6 12.4 17.4Z', b) + p('M36.4 15.4C39.4 14.2 41.8 16.2 41.4 19.6C39.4 19.8 37.4 18.6 35.6 17.4Z', b) +
        p(head, w) + p('M24 11.8C30.6 11.8 35.6 14 38.4 17.6C36.6 22.4 33 24.4 29 23.6C27.4 19.6 26 16 24 11.8Z', b, false) +
        '<path d="' + head + '" fill="none" ' + SW + '/>' +
        '<path d="M15 31C17.6 28.6 21 28.8 24 30.6C27 28.8 30.4 28.6 33 31" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>' +
        '<path d="M19.8 33.4C21.4 35.6 26.6 35.6 28.2 33.4L27.2 31.8L24 32.6L20.8 31.8Z" fill="' + TONGUE + '" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/><path d="M21.6 32.2V33.4M26.4 32.2V33.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>' +
        eyes(23, 7.4, 2) + '<ellipse cx="24" cy="27.6" rx="3.2" ry="2.1" fill="' + INK + '"/>' + blush(30.4, 12);
    },
    // 邊境牧羊犬 — black/white, tipped ears, white blaze, happy eyes (黑糖)
    collie: function () {
      var k = '#3A3330', w = '#FFFFFF';
      return p('M10.4 21C6.4 15.4 7.6 8.6 12.6 6.4C15.8 8.8 18.2 11.8 19.4 15Z', k) + p('M37.6 21C41.6 15.4 40.4 8.6 35.4 6.4C32.2 8.8 29.8 11.8 28.6 15Z', k) +
        p(HEAD, w, false) + p('M9.2 22.4C9.4 15.4 15 10.4 24 10.2C33 10 38.6 15.4 38.8 22.4C35.4 20.6 30.6 20 27.4 21.6C26.2 18.2 25.2 15.6 24 14C22.8 15.6 21.8 18.2 20.6 21.6C17.4 20 12.6 20.6 9.2 22.4Z', k, false) +
        '<path d="' + HEAD + '" fill="none" ' + SW + '/><path d="M15.4 25C16.6 26.4 18.8 26.4 20 25M28 25C29.2 26.4 31.4 26.4 32.6 25" fill="none" stroke="' + INK + '" stroke-width="1.9" stroke-linecap="round"/>' +
        nose(28.8, 2.5) + '<path d="M21.6 31.6C22.8 32.6 25.2 32.6 26.4 31.6" fill="none" stroke="' + INK + '" stroke-width="1.7" stroke-linecap="round"/>' + blush(29.8, 10);
    },
    // 拉布拉多 — yellow, short floppy ears, broad head, otter-friendly face
    lab: function () {
      var c = '#E7C27D', l = '#F3DCAE';
      return p('M12 15.6C7.6 16.4 5.6 21.4 6.6 26C7.4 28.6 10.4 28.8 11.8 26.4C13 23.6 14.4 20.4 16.8 17.6Z', '#D6A85E') + p('M36 15.6C40.4 16.4 42.4 21.4 41.4 26C40.6 28.6 37.6 28.8 36.2 26.4C35 23.6 33.6 20.4 31.2 17.6Z', '#D6A85E') +
        p('M24 10.4C33.2 10.2 38.4 15.6 38.4 23C38.4 31.2 32.4 37.8 24 37.8C15.6 37.8 9.6 31.2 9.6 23C9.6 15.6 14.8 10.6 24 10.4Z', c) +
        p('M24 24.4C20 24.4 17.2 27.2 17.4 30.4C17.6 34.2 20.6 36.8 24 36.8C27.4 36.8 30.4 34.2 30.6 30.4C30.8 27.2 28 24.4 24 24.4Z', l, false) + face(21.8);
    },
    // 黃金獵犬 — golden, feathered wavy ears, fluffy cheeks
    golden: function () {
      var c = '#D9A24E', l = '#F0C982', e = '#C08436';
      // long feathered ears with wavy edges + fluffy cheek tufts
      var earL = 'M13.4 13.4C7 14 3.8 19.6 4.2 25.4C3 27 3.6 29.4 5.4 29.8C4.8 32 6.4 34 8.6 33.6C9.2 35.8 12 36.2 13.2 34.2C14.8 34.4 16 32.8 15.4 31C15.6 25.6 16.2 20 18 15.8Z';
      var earR = 'M34.6 13.4C41 14 44.2 19.6 43.8 25.4C45 27 44.4 29.4 42.6 29.8C43.2 32 41.6 34 39.4 33.6C38.8 35.8 36 36.2 34.8 34.2C33.2 34.4 32 32.8 32.6 31C32.4 25.6 31.8 20 30 15.8Z';
      return p(earL, e) + p(earR, e) +
        '<path d="M7.6 24.6C8.6 25.6 9.2 27.2 9 28.8M11 22.4C12 23.8 12.4 25.6 12.2 27.4M40.4 24.6C39.4 25.6 38.8 27.2 39 28.8M37 22.4C36 23.8 35.6 25.6 35.8 27.4" fill="none" stroke="#A86E26" stroke-width="1.3" stroke-linecap="round"/>' +
        p('M24 10C33 9.8 38 15.2 38 22.6C38 31 31.8 38 24 38C16.2 38 10 31 10 22.6C10 15.2 15 10.2 24 10Z', c) +
        p('M24 24.6C20.2 24.6 17.6 27.2 17.8 30.4C18 34 20.8 36.6 24 36.6C27.2 36.6 30 34 30.2 30.4C30.4 27.2 27.8 24.6 24 24.6Z', l, false) + face(21.8);
    },
    // 哈士奇 — grey/white mask, pointed ears, blue eyes
    husky: function () {
      var g = '#7D8590', w = '#FFFFFF', blue = '#4FA3D9';
      return pointy(g, '#F2D6CF') + p(HEAD, w, false) +
        p('M9.2 22.6C9.2 15.6 15 10.4 24 10.2C33 10 38.8 15.4 38.8 22.6C36.4 20.4 32.6 19.4 29.6 20.4C28.6 17.6 26.4 16.6 24 18.6C21.6 16.6 19.4 17.6 18.4 20.4C15.4 19.4 11.6 20.4 9.2 22.6Z', g, false) +
        '<path d="M24 10.4V18" stroke="' + w + '" stroke-width="2.6" stroke-linecap="round"/>' +
        '<path d="' + HEAD + '" fill="none" ' + SW + '/>' +
        '<circle cx="18" cy="23.2" r="2.4" fill="' + blue + '" stroke="' + INK + '" stroke-width="1.3"/><circle cx="30" cy="23.2" r="2.4" fill="' + blue + '" stroke="' + INK + '" stroke-width="1.3"/>' +
        '<circle cx="18" cy="23.2" r="1" fill="' + INK + '"/><circle cx="30" cy="23.2" r="1" fill="' + INK + '"/>' + nose(28.8, 2.6) + mouth(31.2) + blush(30.4, 10);
    }
  };
  W.BREED_FACES = F;
  W.BREED_LIST = [
    ['米克斯', 'mix'], ['臘腸', 'dachshund'], ['柴犬', 'shiba'], ['柯基', 'corgi'], ['貴賓', 'poodle'], ['博美', 'pom'],
    ['馬爾濟斯', 'maltese'], ['比熊', 'bichon'], ['吉娃娃', 'chihuahua'], ['雪納瑞', 'schnauzer'], ['西施', 'shihtzu'], ['巴哥', 'pug'],
    ['法國鬥牛犬', 'frenchie'], ['英國鬥牛犬', 'bulldog'], ['邊境牧羊犬', 'collie'], ['拉布拉多', 'lab'], ['黃金獵犬', 'golden'], ['哈士奇', 'husky']
  ];
})(window);
