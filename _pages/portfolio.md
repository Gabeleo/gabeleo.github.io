---
layout: page
title: Portfolio
permalink: /portfolio
description: A growing collection of your cool projects.
nav: true
nav_order: 2
horizontal: false
fill: true
---

  {% for image in site.static_files %}
        {% if image.path contains 'assets/img/portfolio_images' %}
            <div class="grid-item">
                {% include figure.html path=image.path class="z-depth-1"%}
            </div>
        {% endif %}
    {% endfor %}
</div>
