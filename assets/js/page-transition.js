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

  document.addEventListener('DOMContentLoaded', function () {
    var existing = document.getElementById('page-transition');
    if (existing) {
      requestAnimationFrame(function () {
        existing.classList.remove('active');
      });
    }

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
