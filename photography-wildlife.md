---
title: Wildlife Photography
layout: photography
permalink: /photography/wildlife/
---

{% assign wl = site.data.photography.wildlife %}
<section class="photo-section">
  {% if wl.hero %}
  <div class="photo-hero">
    <img src="{{ "/image/photography/" | append: wl.hero | relative_url }}" alt="">
  </div>
  {% endif %}

  {% if wl.grid.size > 0 %}
  <div class="photo-grid">
    {% for img in wl.grid %}
    <img src="{{ "/image/photography/" | append: img | relative_url }}" alt="">
    {% endfor %}
  </div>
  {% endif %}
</section>
