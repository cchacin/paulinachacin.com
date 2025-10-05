---
layout: page
title: Extracurricular Activities
permalink: /activities/
description: Paullina Chacin's leadership roles and club memberships showcasing interests in STEM, debate, and community engagement. Explore extracurricular achievements and personal growth.
---

# Extracurricular Activities

Leadership roles and club memberships that showcase my interests and commitment to personal growth.

<div class="collection-list">
{% for item in site.activities %}
  <div class="collection-item">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p class="meta">
      {% if item.role %}{{ item.role }}{% endif %}
      {% if item.organization %} | {{ item.organization }}{% endif %}
      {% if item.date %} | {{ item.date | date: "%B %Y" }}{% endif %}
      {% if item.end_date %} - {{ item.end_date | date: "%B %Y" }}{% endif %}
    </p>
    <p>{{ item.excerpt }}</p>
  </div>
{% endfor %}
</div>
