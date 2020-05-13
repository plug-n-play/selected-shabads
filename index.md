---
title: Collection of selected Shabads
layout: layout.njk
pagination:
  data: collections.blog
  size: 20
  alias: blogs
---

{% for blog in blogs %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}

<!-- {% if pagination.href.previous %}<a href="{{pagination.href.previous}}">Previous Page</a>{% endif %}
{% if pagination.href.next %}<a href="{{pagination.href.next}}">Next Page</a>{% endif %} -->
