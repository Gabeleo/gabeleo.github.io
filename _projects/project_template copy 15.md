---
layout: page #layout of the page from _layouts (if rosie dont worry about this)
title: Midday Sacrifice #title of the project
img: assets/img/portfolio_images/26_.jpeg #image path. i.e assets/img/portfolio_images/1_.jpg
importance: 1 #changes order in which is it appeared in the year its displayed in
category: 2021 #year number or year range. i.e 2023 or 2022-2023
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% assign img_path = page.img%}
        {% include figure.html path=img_path  class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Midday Sacrifice, digital illustration, 2021. 
</div>
