---
layout: page
title: Events & Competitions
permalink: /events/
description: Academic competitions and events where Paullina Chacin has demonstrated excellence, including science fairs, debate tournaments, and STEM competitions. View achievements and awards.
---

# Events & Competitions

Academic and extracurricular competitions where I've challenged myself and demonstrated my skills.

<div class="collection-list">
{% for item in site.events %}
  <div class="collection-item">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p class="meta">
      {{ item.date | date: "%B %Y" }}
      {% if item.result %} | {{ item.result }}{% endif %}
      {% if item.category %} | {{ item.category }}{% endif %}
    </p>
    <p>{{ item.excerpt }}</p>
  </div>
{% endfor %}
</div>
