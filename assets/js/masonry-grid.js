(function () {
  function layoutGrid(grid) {
    var styles = getComputedStyle(grid);
    var rowHeight = parseFloat(styles.getPropertyValue('grid-auto-rows'));
    var rowGap = parseFloat(styles.getPropertyValue('row-gap') || styles.getPropertyValue('gap')) || 0;
    var tiles = grid.querySelectorAll('.photo-tile');

    // Reset first so measurements reflect natural content height, not a
    // stale span from a previous (e.g. pre-resize) layout pass.
    tiles.forEach(function (tile) {
      tile.style.gridRowEnd = 'auto';
    });

    tiles.forEach(function (tile) {
      var contentHeight = tile.getBoundingClientRect().height;
      var span = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
      tile.style.gridRowEnd = 'span ' + span;
    });
  }

  function layoutAll() {
    document.querySelectorAll('.photo-grid').forEach(layoutGrid);
  }

  window.addEventListener('load', layoutAll);

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutAll, 150);
  });
})();
