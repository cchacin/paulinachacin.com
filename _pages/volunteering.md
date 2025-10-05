---
layout: page
title: Volunteering
permalink: /volunteering/
description: Explore Paullina Chacin's community service and volunteer work, including habitat construction, food bank service, and environmental initiatives. Committed to giving back and making a positive impact.
---

# Community Service & Volunteering

My commitment to community service reflects my belief in giving back and making a positive impact in the lives of others.

<div class="collection-list">
{% for item in site.volunteering %}
  <div class="collection-item">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p class="meta">
      {{ item.organization }} | {{ item.hours }} hours
      {% if item.date %} | {{ item.date | date: "%B %Y" }}{% endif %}
      {% if item.end_date %} - {{ item.end_date | date: "%B %Y" }}{% endif %}
    </p>
    <p>{{ item.excerpt }}</p>
  </div>
{% endfor %}
</div>
