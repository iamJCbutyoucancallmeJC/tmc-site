/* Network tiles: the open treatment (t1559).
   First state is the logo. A click turns the tile over to a short explanation
   and a direction to the site; one more click goes there.
   Without this script every tile is a plain link, as before. */
(function () {
  var ABOUT = null;

  function load(cb) {
    if (ABOUT) return cb();
    var el = document.getElementById('network-tiles-about');
    if (el) { ABOUT = JSON.parse(el.textContent); return cb(); }
    fetch('/network-tiles/tiles.json').then(function (r) { return r.json(); }).then(function (d) {
      ABOUT = {};
      d.tiles.forEach(function (t) { ABOUT[t.id] = t; });
      cb();
    }).catch(function () {});
  }

  function shut(card) {
    card.classList.remove('is-open');
    var face = card.querySelector('.network-tile');
    face.setAttribute('aria-expanded', 'false');
    card.querySelector('.network-tile-back').setAttribute('aria-hidden', 'true');
    card.querySelector('.network-tile-go').tabIndex = -1;
  }

  function open(card) {
    var group = card.parentNode;
    var others = group.querySelectorAll('.network-tile-card.is-open');
    for (var i = 0; i < others.length; i++) if (others[i] !== card) shut(others[i]);
    card.classList.add('is-open');
    card.querySelector('.network-tile').setAttribute('aria-expanded', 'true');
    card.querySelector('.network-tile-back').setAttribute('aria-hidden', 'false');
    card.querySelector('.network-tile-go').tabIndex = 0;
  }

  function enhance(a) {
    var id = a.getAttribute('data-network-tile');
    var t = ABOUT[id];
    if (!t || !t.about || a.closest('.network-tile-card')) return;
    var card = document.createElement('div');
    card.className = 'network-tile-card card-' + id;
    var face = document.createElement('button');
    face.type = 'button';
    face.className = a.className;
    face.setAttribute('data-network-tile', id);
    face.setAttribute('aria-expanded', 'false');
    face.setAttribute('aria-label', (a.getAttribute('aria-label') || t.label) + ': what it is');
    face.innerHTML = a.innerHTML;
    var back = document.createElement('div');
    back.className = 'network-tile-back';
    back.setAttribute('aria-hidden', 'true');
    back.innerHTML = '<p class="network-tile-about"></p><a class="network-tile-go"></a>';
    back.querySelector('.network-tile-about').textContent = t.about;
    var go = back.querySelector('.network-tile-go');
    go.href = a.href;
    go.tabIndex = -1;
    go.textContent = (t.go || a.hostname.replace(/^www\./, '')) + ' →';
    card.appendChild(face);
    card.appendChild(back);
    a.parentNode.replaceChild(card, a);
    face.addEventListener('click', function () {
      card.classList.contains('is-open') ? shut(card) : open(card);
    });
    back.addEventListener('click', function (e) {
      if (e.target.closest('.network-tile-go')) return;
      shut(card); face.focus();
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && card.classList.contains('is-open')) { shut(card); face.focus(); }
    });
  }

  function run(root) {
    load(function () {
      var tiles = (root || document).querySelectorAll('a.network-tile[data-network-tile]');
      for (var i = 0; i < tiles.length; i++) enhance(tiles[i]);
    });
  }

  window.NetworkTiles = { enhance: run, open: function (card) { load(function () { open(card); }); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { run(); });
  else run();
})();
