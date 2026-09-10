---
title: Landscape Photography
layout: photography
permalink: /photography/landscape/
---

{% assign ls = site.data.photography.landscape %}
<section class="photo-section">
  {% if ls.hero %}
  <div class="photo-hero">
    <img src="{{ "/image/photography/" | append: ls.hero | relative_url }}" alt="">
  </div>
  {% endif %}

  {% if ls.grid.size > 0 %}
  <div class="photo-grid">
    {% for img in ls.grid %}
    <img src="{{ "/image/photography/" | append: img | relative_url }}" alt="">
    {% endfor %}
  </div>
  {% else %}
  <p class="photo-coming-soon">Coming soon.</p>
  {% endif %}
</section>
