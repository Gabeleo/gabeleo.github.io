---
layout: page
title: projects
permalink: /
description: A growing collection of your cool projects.
nav: true
nav_order: 2
horizontal: false
---


{% for image in site.assests.img %}
<!--
    {% if image.path contains 'photoportfolio' %}

-->
<div class="project">
    <div class= "thumbnail">
        <a href="{{ site.baseurl }}{{ image.path }}">
            <img class="thumbnail" src="{{ site.baseurl }}{{ image.path }}" />
        </a>
    </div>
</div>

<!--
    {% endif %}
-->
{% endfor %}

