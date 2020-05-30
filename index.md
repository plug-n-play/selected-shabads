---
title: Collection of selected Shabads
layout: layout.njk
pagination:
  data: collections.shabad
  size: 20
  alias: shabads
---

{% for shabad in shabads %}

- [{{shabad.data.title}}]({{shabad.url}})

{% endfor %}
