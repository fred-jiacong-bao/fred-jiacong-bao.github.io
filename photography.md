---
title: Photography
layout: photography
permalink: /photography/
---

<div class="section-title section-title-first"><span>Wildlife</span></div>

{% assign wl = site.data.photography.wildlife %}
<section class="photo-section">
  {% if wl.hero %}
  <div class="photo-hero">
    <img src="{{ "/image/photography/" | append: wl.hero.file | relative_url }}" alt="">
    {% if wl.hero.caption %}<p class="hero-caption">{{ wl.hero.caption }}</p>{% endif %}
  </div>
  {% endif %}

  {% if wl.grid.size > 0 %}
  <div class="photo-grid">
    {% for photo in wl.grid %}
    <figure class="photo-tile">
      <img src="{{ "/image/photography/" | append: photo.file | relative_url }}" alt="">
      {% if photo.caption %}<figcaption>{{ photo.caption }}</figcaption>{% endif %}
    </figure>
    {% endfor %}
  </div>
  {% endif %}
</section>

<div class="section-title"><span>Landscape</span></div>

{% assign ls = site.data.photography.landscape %}
<section class="photo-section">
  {% if ls.hero %}
  <div class="photo-hero">
    <img src="{{ "/image/photography/" | append: ls.hero.file | relative_url }}" alt="">
    {% if ls.hero.caption %}<p class="hero-caption">{{ ls.hero.caption }}</p>{% endif %}
  </div>
  {% endif %}

  {% if ls.grid.size > 0 %}
  <div class="photo-grid">
    {% for photo in ls.grid %}
    <figure class="photo-tile">
      <img src="{{ "/image/photography/" | append: photo.file | relative_url }}" alt="">
      {% if photo.caption %}<figcaption>{{ photo.caption }}</figcaption>{% endif %}
    </figure>
    {% endfor %}
  </div>
  {% else %}
  <p class="photo-coming-soon">Coming soon.</p>
  {% endif %}
</section>
