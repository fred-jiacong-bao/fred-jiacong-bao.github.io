---
title: Photography
layout: default
permalink: /photography/
---

## Photography

A few photos I've taken.

{% if site.data.photography.size > 0 %}
<div class="photo-gallery">
{% for photo in site.data.photography %}
  <a href="{{ "/image/photography/" | append: photo.image | relative_url }}" target="_blank">
    <img src="{{ "/image/photography/" | append: photo.image | relative_url }}" alt="{{ photo.caption | default: "Photo" }}">
  </a>
{% endfor %}
</div>
{% else %}
*Gallery coming soon.*
{% endif %}
