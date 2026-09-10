(function () {
  function getOverlay() {
    var overlay = document.getElementById('page-transition');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'page-transition';
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function revealPage() {
    var existing = document.getElementById('page-transition');
    if (existing) {
      requestAnimationFrame(function () {
        existing.classList.remove('active');
      });
    }
  }

  // Normal load.
  document.addEventListener('DOMContentLoaded', revealPage);
  // Back-forward cache restores (e.g. clicking back/a link to a page still
  // frozen in bfcache) don't fire DOMContentLoaded, but always fire pageshow —
  // without this the overlay can stay stuck fully opaque from before the
  // page was frozen.
  window.addEventListener('pageshow', revealPage);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.photo-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || link.target === '_blank') return;
        e.preventDefault();
        var overlay = getOverlay();
        requestAnimationFrame(function () {
          overlay.classList.add('active');
        });
        setTimeout(function () {
          window.location.href = href;
        }, 400);
      });
    });
  });
})();
