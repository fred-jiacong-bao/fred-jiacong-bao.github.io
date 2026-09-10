Photo files for the Photography page live in this folder, organized by
category (e.g. `wildlife-*.jpg`, `landscape-*.jpg`).

To add or change photos, edit `_data/photography.yml`: each category has
a `hero` (the big full-bleed image at the top of that section) and a
`grid` list (the masonry grid below it). Just reference filenames from
this folder.

Resize/compress before adding — aim for ~2000-2400px on the long edge,
JPEG quality ~80. On macOS:

  sips -Z 2400 -s formatOptions 82 input.jpg --out output.jpg
