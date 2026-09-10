(function () {
  function layoutGrid(grid) {
    var styles = getComputedStyle(grid);
    var rowHeight = parseFloat(styles.getPropertyValue('grid-auto-rows'));
    var rowGap = parseFloat(styles.getPropertyValue('row-gap') || styles.getPropertyValue('gap')) || 0;

    grid.querySelectorAll('.photo-tile').forEach(function (tile) {
      var img = tile.querySelector('img');
      if (!img || !img.naturalWidth) return;

      var figcaption = tile.querySelector('figcaption');
      var tileWidth = tile.getBoundingClientRect().width;
      var imgHeight = tileWidth * (img.naturalHeight / img.naturalWidth);
      var captionHeight = 0;
      if (figcaption) {
        var capStyles = getComputedStyle(figcaption);
        captionHeight = figcaption.getBoundingClientRect().height + parseFloat(capStyles.marginTop || 0);
      }

      var totalHeight = imgHeight + captionHeight;
      var span = Math.ceil((totalHeight + rowGap) / (rowHeight + rowGap));
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
