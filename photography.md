---
title: Photography
layout: photography
permalink: /photography/
---

<div class="photo-intro">
  <h1>Photography</h1>
  <p class="photo-subtitle">Landscape &amp; Wildlife</p>
</div>

{% assign wl = site.data.photography.wildlife %}
<section class="photo-section">
  <div class="section-title"><span>Wildlife</span></div>

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

{% assign ls = site.data.photography.landscape %}
<section class="photo-section">
  <div class="section-title"><span>Landscape</span></div>

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
